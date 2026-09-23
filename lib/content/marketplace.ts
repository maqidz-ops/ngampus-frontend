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
    name: "ChatGPT",
    description: "Asisten nulis, riset, dan brainstorm.",
    price: "Rp 49.000/bln",
    logo: "/images/app-chatgpt.png",
    logoBordered: true,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    name: "Claude",
    description: "Baca dokumen panjang, analisis rapi.",
    price: "Rp 59.000/bln",
    logo: "/images/app-claude.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    name: "Gemini",
    description: "Multimodal, nyambung ke Google.",
    price: "Rp 45.000/bln",
    logo: "/images/app-gemini.png",
    logoBordered: true,
    cta: "Beli Sekarang",
    category: "ai-chat" as const,
  },
  {
    name: "Canva",
    description: "Desain presentasi, poster, dan feed.",
    price: "Rp 49.000/bln",
    logo: "/images/app-canva.svg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "desain" as const,
  },
  {
    name: "CapCut",
    description: "Edit video tugas dan konten singkat.",
    price: "Rp 59.000/bln",
    logo: "/images/app-capcut.svg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "video" as const,
  },
  {
    name: "Spotify",
    description: "Dengar musik sambil ngerjain tugas.",
    price: "Rp 45.000/bln",
    logo: "/images/app-spotify.svg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "produktivitas" as const,
  },
]
