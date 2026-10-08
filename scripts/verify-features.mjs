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
