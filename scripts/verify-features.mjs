import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import vm from "node:vm"
import ts from "typescript"

// Load pure TS feature modules without adding a test-runner dependency.
const root = fileURLToPath(new URL("../", import.meta.url))
const cache = new Map()
const events = new EventTarget()
const storage = new Map()
const sessionStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
  removeItem: (key) => storage.delete(key),
}
function load(relative) {
  const filename = path.resolve(root, relative)
  if (cache.has(filename)) return cache.get(filename).exports
  const loadedModule = { exports: {} }
  cache.set(filename, loadedModule)
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText
  const require = (specifier) => {
    assert.ok(
      specifier.startsWith("."),
      "Pure feature services should use local modules"
    )
    return load(path.resolve(path.dirname(filename), specifier + ".ts"))
  }
  vm.runInNewContext(
    source,
    {
      module: loadedModule,
      exports: loadedModule.exports,
      require,
      URLSearchParams,
      window: events,
      sessionStorage,
      Event,
      crypto: globalThis.crypto,
    },
    { filename }
  )
  return loadedModule.exports
}

const { marketplaceApps } = load("features/marketplace/data/marketplace.ts")
const { getMarketplaceCheckout } = load(
  "features/marketplace/services/catalog.ts"
)
assert.equal(getMarketplaceCheckout("unknown-product"), undefined)
for (const app of marketplaceApps) {
  const checkout = getMarketplaceCheckout(app.slug)
  assert.equal(checkout.slug, app.slug)
  assert.ok(checkout.packages.length > 0)
  assert.equal(checkout.sections[1].title, "Garansi")
  assert.equal(checkout.sections[2].items.length, 8)
  assert.ok(
    checkout.sections[2].items.some(({ body }) => body.includes("× 20%"))
  )
  for (const offer of checkout.offers ?? [])
    assert.ok(Number.isFinite(offer.price))
}
const blog = load("features/blog/services/posts.ts")
const { blogPosts } = load("features/blog/data/blog.ts")
assert.equal(blog.getPost("missing"), undefined)
assert.equal(blog.getPost(blogPosts[0].slug).title, blogPosts[0].title)
assert.equal(blog.postsInCategory("semua").length, blogPosts.length)
assert.ok(
  blog
    .postsInCategory("tips-mahasiswa")
    .every((p) => p.category === "tips-mahasiswa")
)
assert.equal(blog.isBlogCategory("unknown"), false)
assert.equal(blog.blogHref("semua"), "/blog")
assert.equal(
  blog.blogHref("tips-mahasiswa", 2),
  "/blog?kategori=tips-mahasiswa&halaman=2"
)
const { creatorJoinSteps } = load("features/creator/data/campaign.ts")
assert.equal(creatorJoinSteps.length, 3)
const session = load("features/creator/services/demo-session.ts")
let changes = 0
const unsubscribe = session.subscribeCreatorSession(() => changes++)
assert.equal(session.readCreatorSession(), null)
session.writeCreatorSession({ name: "Test", email: "test@example.com" })
assert.equal(session.readCreatorSession().name, "Test")
assert.equal(changes, 1)
session.clearCreatorSession()
assert.equal(session.readCreatorSession(), null)
assert.equal(changes, 2)
unsubscribe()
session.writeCreatorSession({ name: "Test", email: "test@example.com" })
assert.equal(changes, 2)
sessionStorage.setItem("ngampus-creator-session", "invalid json")
assert.equal(session.readCreatorSession(), null)
console.log(
  `PASS: ${marketplaceApps.length} product models, warranty terms, blog queries, creator steps, and session lifecycle.`
)

const paymentRules = load("features/payment/services/order-rules.ts")
const { previewGateway, simulateStatus } = load(
  "features/payment/services/preview-gateway.ts"
)
assert.equal(paymentRules.normalizePhone("0812 3456 7890"), "6281234567890")
assert.equal(paymentRules.normalizePhone("+62 812-3456-7890"), "6281234567890")
assert.throws(() => paymentRules.normalizePhone("invalid"))
const draft = {
  phone: "081234567890",
  amount: 40000,
  details: {
    kind: "marketplace",
    slug: "chatgpt",
    title: "ChatGPT",
    customerName: "Preview Test",
    plan: "Sharing",
    duration: "14 Hari",
  },
}
assert.throws(() => paymentRules.validateDraft({ ...draft, amount: -1 }))
assert.equal(paymentRules.parseOrder("invalid json"), null)
let paymentEvents = 0
const { subscribeOrders } = load("features/payment/services/preview-gateway.ts")
const stopPaymentEvents = subscribeOrders(() => paymentEvents++)
const order = await previewGateway.createOrder(draft)
assert.equal(order.status, "pending")
assert.equal(order.phone, "6281234567890")
assert.equal((await previewGateway.getOrder(order.id)).details.plan, "Sharing")
assert.equal(
  (await previewGateway.startPayment(order.id)).checkoutUrl,
  `/pembayaran/${order.id}/qris`
)
assert.throws(() => simulateStatus(order.id, "completed"))
simulateStatus(order.id, "processing")
await assert.rejects(previewGateway.startPayment(order.id))
simulateStatus(order.id, "completed")
assert.equal((await previewGateway.getOrder(order.id)).status, "completed")
assert.throws(() => simulateStatus(order.id, "pending"))
assert.equal(paymentEvents, 3)
stopPaymentEvents()
for (const status of ["cancelled", "failed", "expired"]) {
  const next = await previewGateway.createOrder(draft)
  simulateStatus(next.id, status)
  await assert.rejects(previewGateway.startPayment(next.id))
  assert.throws(() => simulateStatus(next.id, "processing"))
}
const old = await previewGateway.createOrder(draft)
const expired = { ...old, expiresAt: new Date(Date.now() - 1).toISOString() }
sessionStorage.setItem(
  `ngampus-payment-preview:${old.id}`,
  JSON.stringify(expired)
)
assert.equal(paymentRules.effectiveStatus(expired), "expired")
await assert.rejects(previewGateway.startPayment(old.id))
assert.throws(() => simulateStatus(old.id, "processing"))
for (const slug of ["turnitin", "cek-ai", "parafrase-manual"]) {
  const d = {
    phone: "081234567890",
    amount: 7000,
    details: {
      kind: "document",
      slug,
      title: slug,
      fileName: "Contoh.pdf",
      fileSize: 1024,
      filters:
        slug === "turnitin"
          ? ["Exclude Quotes", "Exclude Small Matches: 20 %"]
          : [],
    },
  }
  const result = await previewGateway.createOrder(d)
  assert.equal(result.details.fileName, "Contoh.pdf")
  assert.equal(result.details.filters.length, slug === "turnitin" ? 2 : 0)
  assert.throws(() =>
    paymentRules.validateDraft({
      ...d,
      details: { ...d.details, fileSize: 11 * 1024 * 1024 },
    })
  )
  assert.throws(() =>
    paymentRules.validateDraft({
      ...d,
      details: { ...d.details, fileName: "wrong.exe" },
    })
  )
}
assert.equal(await previewGateway.getOrder("missing"), null)
assert.equal(
  paymentRules.parseOrder(JSON.stringify({ ...order, mode: "live" })),
  null
)
console.log(
  "PASS: payment input validation, four checkout kinds, preview persistence, transitions, expiry, and terminal-state protection."
)
