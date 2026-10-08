export const marketplaceCategories = [
  { id: "semua", label: "Semua" },
  { id: "ai-productivity", label: "AI & Productivity" },
  { id: "design-creative", label: "Design & Creative" },
  { id: "entertainment", label: "Entertainment" },
  { id: "learning", label: "Learning" },
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
    category: "ai-productivity" as const,
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
    category: "ai-productivity" as const,
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
    category: "ai-productivity" as const,
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
    category: "design-creative" as const,
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
    category: "design-creative" as const,
  },
  {
    slug: "alight-motion",
    name: "Alight Motion",
    description: "Edit video, animasi, dan efek visual di mobile.",
    price: "Rp 6.000",
    comparePrice: "Rp 588.000",
    logo: "/images/app-alight-motion.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "design-creative" as const,
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
    category: "entertainment" as const,
  },
  {
    slug: "youtube",
    name: "YouTube",
    description: "Nonton tanpa iklan, termasuk YouTube Music.",
    price: "Rp 10.000",
    comparePrice: "Rp 139.000",
    logo: "/images/app-youtube.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "entertainment" as const,
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    description: "Riset cepat, jawabannya lengkap dengan sumber.",
    price: "Rp 25.000",
    comparePrice: "Rp 70.000",
    logo: "/images/app-perplexity.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-productivity" as const,
  },
  {
    slug: "duolingo",
    name: "Duolingo",
    description: "Belajar bahasa tiap hari, tanpa batas hati.",
    price: "Rp 5.000",
    comparePrice: "Rp 40.000",
    logo: "/images/app-duolingo.jpg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "learning" as const,
  },
  {
    slug: "disney-plus",
    name: "Disney+",
    description: "Film dan serial, dari Marvel sampai animasi.",
    price: "Rp 29.000",
    comparePrice: "Rp 119.000",
    logo: "/images/app-disney.jpg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "entertainment" as const,
  },
  {
    slug: "loklok",
    name: "Loklok",
    description: "Film, serial, drama, dan anime dari berbagai negara.",
    price: "Rp 20.000",
    comparePrice: "Rp 49.000",
    logo: "/images/app-loklok.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "entertainment" as const,
  },
  {
    slug: "netflix",
    name: "Netflix",
    description: "Film dan serial, siap nemenin nugas.",
    price: "Rp 22.000",
    comparePrice: "Rp 186.000",
    logo: "/images/app-netflix.jpg",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "entertainment" as const,
  },
  {
    slug: "zoom",
    name: "Zoom",
    description: "Meeting kuliah dan kelompok, tanpa batas 40 menit.",
    price: "Rp 6.000",
    comparePrice: "Rp 67.500",
    logo: "/images/app-zoom.png",
    logoBordered: false,
    cta: "Beli Sekarang",
    category: "ai-productivity" as const,
  },
]

export const marketplaceOrderSteps = [
  {
    title: "Pilih Produk",
    body: "Cari dan pilih akun yang kamu butuhkan.",
  },
  {
    title: "Cek Detail Produk",
    body: "Baca detail akun, pilihan paket, garansi, dan ketentuan penggunaan sebelum melanjutkan.",
  },
  {
    title: "Isi Data & Bayar",
    body: "Masukkan data yang diperlukan, lalu lakukan pembayaran dengan metode yang tersedia.",
  },
  {
    title: "Terima Akun",
    body: "Setelah pembayaran terverifikasi, detail akun akan segera dikirimkan ke data yang kamu berikan.",
  },
]

export const marketplaceWarrantyBanner = {
  title: ["Akun bermasalah?", "Klaim garansi di sini"],
  description:
    "Kalau akun yang kamu terima tidak sesuai ketentuan, ajukan klaim dengan bukti pembelian. Tim Ngampus bantu cek dan kasih solusi.",
  cta: "Klaim Garansi",
  href: "/klaim-garansi",
}

export const marketplaceBenefits = [
  {
    title: "Akun Lengkap, Harga Ramah",
    body: "Berbagai akun digital untuk kebutuhan kuliah, desain, sampai hiburan tersedia di satu tempat dengan harga yang ramah buat kantong kamu!",
  },
  {
    title: "Proses Mudah & Nggak Ribet",
    body: "Cari akun, cek detailnya, isi data, lalu bayar. Setelah pembayaran terverifikasi, pesananmu segera kami proses",
  },
  {
    title: "Ada Garansi, Jadi Lebih Tenang",
    body: "Setiap produk punya ketentuan garansi yang jelas. Kalau produk yang kamu terima tidak sesuai ketentuan, kamu bisa ajukan klaim melalui Ngampus",
  },
]

export type CheckoutSection = {
  title: string
  items: { title?: string; body: string }[]
}

export type CheckoutOffer = {
  plan: string
  warranty: string
  duration: string
  price: number
  official: number
}

export type MarketplaceCheckout = {
  slug: string
  name: string
  logo: string
  monthly: number
  compare: number
  packages: string[]
  offers?: CheckoutOffer[]
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

const checkoutCatalog: Record<
  string,
  { name: string; paragraphs: string[]; offers: CheckoutOffer[] }
> = {
  gemini: {
    name: "Gemini AI Pro",
    paragraphs: [
      "Gemini AI Pro adalah layanan kecerdasan buatan dari Google yang dapat membantu pengguna mencari informasi, membuat tulisan, menganalisis dokumen, menghasilkan ide, serta menyelesaikan berbagai pekerjaan berbasis AI.",
      "Gemini AI Pro cocok digunakan untuk kebutuhan belajar, riset, pekerjaan, coding, brainstorming, hingga meningkatkan produktivitas sehari-hari.",
    ],
    offers: [
      {
        plan: "Invite / Family",
        warranty: "6 Bulan",
        duration: "12 Bulan",
        price: 35000,
        official: 300000,
      },
      {
        plan: "Link Redeem",
        warranty: "6 Bulan",
        duration: "12 Bulan",
        price: 35000,
        official: 300000,
      },
      {
        plan: "Link Redeem",
        warranty: "6 Bulan",
        duration: "18 Bulan",
        price: 45000,
        official: 300000,
      },
    ],
  },
  canva: {
    name: "Canva",
    paragraphs: [
      "Canva Pro adalah layanan premium dari Canva yang menyediakan berbagai template, aset desain, fitur AI, serta tools profesional untuk membuat desain dengan mudah.",
      "Canva Pro dapat digunakan untuk membuat presentasi, poster, konten media sosial, CV, banner, logo, video, undangan, hingga berbagai kebutuhan desain pribadi maupun profesional.",
    ],
    offers: [
      {
        plan: "Member",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 7000,
        official: 39000,
      },
      {
        plan: "Member",
        warranty: "3 Bulan",
        duration: "3 Bulan",
        price: 15000,
        official: 117000,
      },
      {
        plan: "Member",
        warranty: "6 Bulan",
        duration: "6 Bulan",
        price: 20000,
        official: 234000,
      },
      {
        plan: "Member",
        warranty: "12 Bulan",
        duration: "12 Bulan",
        price: 30000,
        official: 468000,
      },
      {
        plan: "Designer",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 9000,
        official: 39000,
      },
      {
        plan: "Designer",
        warranty: "3 Bulan",
        duration: "3 Bulan",
        price: 17000,
        official: 117000,
      },
      {
        plan: "Designer",
        warranty: "6 Bulan",
        duration: "6 Bulan",
        price: 22000,
        official: 234000,
      },
      {
        plan: "Designer",
        warranty: "12 Bulan",
        duration: "12 Bulan",
        price: 32000,
        official: 468000,
      },
      {
        plan: "Admin",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 30000,
        official: 95000,
      },
    ],
  },
  capcut: {
    name: "CapCut",
    paragraphs: [
      "CapCut Pro adalah versi premium dari aplikasi editing video CapCut yang menyediakan berbagai fitur, efek, template, dan tools editing tambahan untuk membuat konten secara lebih profesional.",
      "CapCut Pro cocok digunakan untuk membuat TikTok, Instagram Reels, YouTube Shorts, video promosi, maupun berbagai konten kreatif lainnya.",
    ],
    offers: [
      {
        plan: "Private",
        warranty: "7 Hari",
        duration: "7 Hari",
        price: 10000,
        official: 36000,
      },
      {
        plan: "Private",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 35000,
        official: 144000,
      },
      {
        plan: "Sharing",
        warranty: "7 Hari",
        duration: "7 Hari",
        price: 7000,
        official: 36000,
      },
      {
        plan: "Sharing",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 25000,
        official: 144000,
      },
    ],
  },
  claude: {
    name: "Claude AI",
    paragraphs: [
      "Claude adalah asisten kecerdasan buatan dari Anthropic yang dapat membantu pengguna dalam menulis, menganalisis dokumen, brainstorming, coding, dan mengolah berbagai informasi.",
      "Claude cocok digunakan untuk kebutuhan akademik, pekerjaan profesional, programming, penulisan, hingga aktivitas produktivitas yang membutuhkan bantuan AI.",
    ],
    offers: [
      {
        plan: "Private",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 400000,
        official: 499000,
      },
      {
        plan: "Sharing",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 100000,
        official: 299000,
      },
    ],
  },
  chatgpt: {
    name: "ChatGPT",
    paragraphs: [
      "ChatGPT adalah asisten kecerdasan buatan dari OpenAI yang dapat membantu pengguna dalam mencari informasi, belajar, menulis, brainstorming, coding, analisis data, dan berbagai pekerjaan lainnya.",
      "ChatGPT cocok digunakan oleh pelajar, mahasiswa, programmer, content creator, pelaku bisnis, maupun pekerja profesional untuk membantu meningkatkan produktivitas sehari-hari.",
    ],
    offers: [
      {
        plan: "Sharing",
        warranty: "14 Hari",
        duration: "14 Hari",
        price: 40000,
        official: 99000,
      },
      {
        plan: "Sharing",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 70000,
        official: 179000,
      },
      {
        plan: "Private",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 190000,
        official: 349000,
      },
    ],
  },
  spotify: {
    name: "Spotify",
    paragraphs: [
      "Spotify Premium adalah layanan berlangganan musik yang memberikan akses ke jutaan lagu, album, playlist, dan podcast dari berbagai musisi dan kreator di seluruh dunia.",
      "Dengan Spotify Premium, pengguna dapat menikmati musik tanpa iklan, memilih lagu dengan lebih bebas, serta mengunduh konten tertentu untuk didengarkan secara offline.",
    ],
    offers: [
      {
        plan: "Indplan",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 25000,
        official: 59900,
      },
      {
        plan: "Famplan",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 30000,
        official: 119900,
      },
    ],
  },
  netflix: {
    name: "Netflix",
    paragraphs: [
      "Netflix adalah layanan streaming digital yang menyediakan berbagai pilihan film, serial, dokumenter, anime, dan tayangan hiburan dari berbagai negara. Netflix dapat digunakan melalui smartphone, tablet, laptop, komputer, hingga Smart TV.",
      "Dengan Netflix, pengguna dapat menikmati berbagai tayangan favorit secara praktis dalam satu platform, mulai dari Netflix Original hingga berbagai film dan serial populer.",
    ],
    offers: [
      {
        plan: "Sharing 1P2U",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 22000,
        official: 186000,
      },
      {
        plan: "Sharing 1P1U",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 37000,
        official: 186000,
      },
      {
        plan: "Sharing",
        warranty: "2 Bulan",
        duration: "2 Bulan",
        price: 72000,
        official: 186000,
      },
      {
        plan: "Sharing",
        warranty: "3 Bulan",
        duration: "3 Bulan",
        price: 106000,
        official: 186000,
      },
      {
        plan: "Private",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 165000,
        official: 186000,
      },
    ],
  },
  zoom: {
    name: "Zoom",
    paragraphs: [
      "Zoom adalah platform komunikasi online yang digunakan untuk meeting, video conference, kelas online, webinar, dan berbagai kegiatan kolaborasi jarak jauh.",
      "Zoom cocok digunakan oleh pelajar, mahasiswa, perusahaan, organisasi, maupun pengguna individu yang membutuhkan komunikasi dan pertemuan online secara praktis.",
    ],
    offers: [
      {
        plan: "Private",
        warranty: "7 Hari",
        duration: "7 Hari",
        price: 6000,
        official: 67500,
      },
      {
        plan: "Private",
        warranty: "14 Hari",
        duration: "14 Hari",
        price: 8000,
        official: 135000,
      },
      {
        plan: "Private",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 15000,
        official: 270000,
      },
    ],
  },
  youtube: {
    name: "YouTube",
    paragraphs: [
      "YouTube Premium adalah layanan berlangganan premium dari YouTube yang memberikan pengalaman menonton dengan lebih nyaman, termasuk fitur bebas iklan, background play, dan akses ke YouTube Music Premium.",
      "Layanan ini cocok untuk pengguna yang sering menggunakan YouTube untuk hiburan, musik, podcast, pembelajaran, maupun berbagai konten lainnya.",
    ],
    offers: [
      {
        plan: "Invite / Family",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 10000,
        official: 139000,
      },
      {
        plan: "Akun admin",
        warranty: "25 Hari",
        duration: "1 Bulan",
        price: 20000,
        official: 139000,
      },
    ],
  },
  perplexity: {
    name: "Perplexity AI",
    paragraphs: [
      "Perplexity AI adalah platform pencarian berbasis kecerdasan buatan yang membantu pengguna menemukan dan memahami informasi dari berbagai sumber dengan lebih cepat.",
      "Perplexity AI cocok digunakan untuk riset, mencari referensi, merangkum informasi, mempelajari suatu topik, hingga membantu pekerjaan akademik dan profesional.",
    ],
    offers: [
      {
        plan: "Sharing",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 25000,
        official: 70000,
      },
    ],
  },
  duolingo: {
    name: "Duolingo",
    paragraphs: [
      "Duolingo adalah platform pembelajaran bahasa yang menggunakan metode interaktif dan gamifikasi untuk membuat proses belajar menjadi lebih menarik dan mudah diikuti.",
      "Duolingo dapat digunakan untuk meningkatkan kosakata, kemampuan membaca, menulis, mendengarkan, dan memahami berbagai bahasa secara bertahap.",
    ],
    offers: [
      {
        plan: "Private",
        warranty: "7 Hari",
        duration: "7 Hari",
        price: 5000,
        official: 40000,
      },
    ],
  },
  "alight-motion": {
    name: "Alight Motion",
    paragraphs: [
      "Alight Motion adalah aplikasi editing video dan motion graphics yang memungkinkan pengguna membuat animasi, efek visual, transisi, dan berbagai video kreatif melalui perangkat mobile.",
      "Alight Motion cocok digunakan oleh content creator dan editor video yang membutuhkan fitur seperti keyframe animation, multi-layer editing, dan berbagai efek visual.",
    ],
    offers: [
      {
        plan: "Private [andro]",
        warranty: "6 Bulan",
        duration: "12 Bulan",
        price: 6000,
        official: 588000,
      },
      {
        plan: "Private [ios]",
        warranty: "6 Bulan",
        duration: "12 Bulan",
        price: 6000,
        official: 588000,
      },
    ],
  },
  loklok: {
    name: "Loklok",
    paragraphs: [
      "LOKLOK adalah platform hiburan digital yang menyediakan berbagai pilihan film, serial, drama, anime, dan konten video dari berbagai negara.",
      "LOKLOK cocok digunakan bagi pengguna yang ingin menikmati berbagai jenis tayangan hiburan secara praktis melalui perangkat mobile.",
    ],
    offers: [
      {
        plan: "Private",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 40000,
        official: 99000,
      },
      {
        plan: "Sharing",
        warranty: "1 Bulan",
        duration: "1 Bulan",
        price: 20000,
        official: 49000,
      },
    ],
  },
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
  const catalog = checkoutCatalog[app.slug]
  const packages = catalog
    ? [...new Set(catalog.offers.map((offer) => offer.plan))]
    : app.slug === "chatgpt"
      ? ["ChatGPT Plus", "ChatGPT Pro"]
      : [app.name, `${app.name} Pro`]

  return {
    slug: app.slug,
    name: catalog?.name ?? app.name,
    logo: app.logo,
    monthly,
    compare: compare > monthly ? compare : monthly,
    packages,
    offers: catalog?.offers,
    sections: [
      catalog
        ? {
            title: "Deskripsi",
            items: catalog.paragraphs.map((body) => ({ body })),
          }
        : descriptionSection(app.name, app.price),
      warranty,
    ],
  } satisfies MarketplaceCheckout
}
