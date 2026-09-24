export const marketplaceCategories = [
  { id: "semua", label: "Semua" },
  { id: "ai-chat", label: "AI Chat" },
  { id: "desain", label: "Desain" },
  { id: "video", label: "Video" },
  { id: "produktivitas", label: "Produktivitas" },
  { id: "akademik", label: "Akademik" },
] as const

export type MarketplaceCategory = (typeof marketplaceCategories)[number]["id"]

export const marketplaceApps = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description: "Asisten nulis, riset, dan brainstorm.",
    price: "Rp 49.000",
    comparePrice: "Rp 350.000",
    logo: "/images/app-chatgpt.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    slug: "claude",
    name: "Claude",
    description: "Stok 18 akun",
    price: "Rp 59.000",
    comparePrice: "Rp 350.000",
    logo: "/images/app-claude.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    slug: "gemini",
    name: "Gemini",
    description: "Multimodal, nyambung ke Google.",
    price: "Rp 78.000",
    comparePrice: "Rp 309.000",
    logo: "/images/app-gemini.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    slug: "canva",
    name: "Canva",
    description: "Desain presentasi, poster, dan feed.",
    price: "Rp 49.000",
    comparePrice: "Rp 350.000",
    logo: "/images/app-canva.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "desain" as const,
  },
  {
    slug: "capcut",
    name: "CapCut",
    description: "Edit video tugas dan konten singkat.",
    price: "Rp 59.000",
    comparePrice: "Rp 350.000",
    logo: "/images/app-capcut.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "video" as const,
  },
  {
    slug: "spotify",
    name: "Spotify",
    description: "Dengar musik sambil ngerjain tugas.",
    price: "Rp 45.000",
    comparePrice: "Rp 350.000",
    logo: "/images/app-spotify.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "produktivitas" as const,
  },
]

export type CheckoutSection = {
  title: string
  items: { title?: string; body: string }[]
}

export type MarketplaceCheckout = {
  slug: string
  name: string
  logo: string
  monthly: number
  compare: number
  packages: string[]
  sections: CheckoutSection[]
}

const durations = [
  { id: "1", label: "1 Bulan", months: 1 },
  { id: "6", label: "6 Bulan", months: 6 },
  { id: "12", label: "12 Bulan", months: 12 },
]

export { durations as checkoutDurations }

export const checkoutTypes = ["Private", "Sharing"]

const warranty: CheckoutSection = {
  title: "Garansi",
  items: [
    {
      body: "Produk ini dilengkapi dengan garansi selama durasi paket masih aktif. Jika terjadi kendala akses, tim Ngampus akan membantu pengecekan dan memberikan solusi sesuai kebijakan garansi yang berlaku.",
    },
    {
      body: "Solusi garansi dapat berupa perbaikan akses, penggantian akun, penggantian akses, atau refund apabila kendala tidak dapat diselesaikan berdasarkan hasil pengecekan tim Ngampus.",
    },
  ],
}

function descriptionSection(name: string, price: string): CheckoutSection {
  return {
    title: "Deskripsi",
    items: [
      {
        title: "Harga Lebih Hemat",
        body: `Nikmati akses ${name} dengan harga lebih terjangkau mulai dari ${price}/bulan, cocok untuk kamu yang ingin menggunakan AI premium tanpa harus membayar harga langganan resmi penuh.`,
      },
      {
        title: "Tersedia Pilihan Private & Sharing",
        body: `Pilih paket sesuai kebutuhan. Private cocok untuk penggunaan yang lebih personal, sedangkan Sharing Account cocok untuk kamu yang ingin akses ${name} dengan harga lebih hemat.`,
      },
    ],
  }
}

function parseAmount(price: string) {
  return Number(price.replace(/\D/g, ""))
}

export function getMarketplaceCheckout(slug: string) {
  const app = marketplaceApps.find((item) => item.slug === slug)
  if (!app) return

  const monthly = parseAmount(app.price)
  const compare = parseAmount(app.comparePrice)
  const packages =
    app.slug === "chatgpt"
      ? ["ChatGPT Plus", "ChatGPT Pro"]
      : [app.name, `${app.name} Pro`]

  return {
    slug: app.slug,
    name: app.name,
    logo: app.logo,
    monthly,
    compare: compare > monthly ? compare : monthly,
    packages,
    sections: [descriptionSection(app.name, app.price), warranty],
  } satisfies MarketplaceCheckout
}
