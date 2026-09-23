export type NavLink = {
  label: string
  href: string
  description?: string
  icon?: "phone" | "email" | "tiktok" | "instagram"
  tool?: "merge" | "kompres" | "convert"
}

export type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "menu"; label: string; items: NavLink[] }

export const mainNav: NavItem[] = [
  { type: "link", label: "Marketplace", href: "/marketplace" },
  { type: "link", label: "Cek Plagiarisme", href: "/cek-plagiarisme" },
  {
    type: "menu",
    label: "File Tools",
    items: [
      {
        label: "Kompres PDF",
        href: "/file-tools?tool=kompres",
        description: "Perkecil ukuran file tanpa mengurangi kualitas.",
        tool: "kompres",
      },
      {
        label: "Convert File",
        href: "/file-tools?tool=convert",
        description: "Ubah PDF, Word, dan gambar ke format lain.",
        tool: "convert",
      },
      {
        label: "Gabung PDF",
        href: "/file-tools?tool=merge",
        description: "Satukan beberapa PDF jadi satu dokumen.",
        tool: "merge",
      },
    ],
  },
  { type: "link", label: "Harga", href: "/#harga" },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "Kontak Kami", href: "/#kontak" },
]

export const whatsappChannelUrl =
  "https://whatsapp.com/channel/0029Vb8T6U2KGGGEX7gFIJ2i"

export const tiktokUrl =
  "https://www.tiktok.com/@ngampus.co.id?_r=1&_t=ZS-99ravhrtkKC"

export const instagramUrl = "https://www.instagram.com/ngampusapp/"

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "MENU",
    links: [
      { label: "Halaman Utama", href: "/" },
      { label: "Riwayat Pesanan", href: "/#" },
      { label: "Campaign", href: "/#" },
      { label: "Blog & Berita", href: "/blog" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
  },
  {
    title: "LAYANAN",
    links: [
      { label: "Akses AI populer", href: "/marketplace" },
      { label: "Cek Plagiarisme", href: "/cek-plagiarisme" },
      { label: "File tools", href: "/file-tools" },
    ],
  },
  {
    title: "KONTAK KAMI",
    links: [
      {
        label: "+62 819-1868-5172",
        href: "tel:+6281918685172",
        icon: "phone",
      },
      {
        label: "support@ngampus.co.id",
        href: "mailto:support@ngampus.co.id",
        icon: "email",
      },
      { label: "TikTok", href: tiktokUrl, icon: "tiktok" },
      { label: "Instagram", href: instagramUrl, icon: "instagram" },
    ],
  },
]
