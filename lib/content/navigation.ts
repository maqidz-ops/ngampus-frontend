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
  { type: "link", label: "Marketplace Account", href: "/marketplace" },
  { type: "link", label: "Plagiarisme Checker", href: "/cek-plagiarisme" },
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
  { type: "link", label: "Riwayat Pesanan", href: "/riwayat-pesanan" },
  { type: "link", label: "Ngampus Creator", href: "/creator" },
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
      { label: "Riwayat Pesanan", href: "/riwayat-pesanan" },
      { label: "Ngampus Creator", href: "/creator" },
      { label: "Blog & Berita", href: "/blog" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
  },
  {
    title: "LAYANAN",
    links: [
      { label: "Marketplace Account", href: "/marketplace" },
      { label: "Plagiarisme Checker", href: "/cek-plagiarisme" },
      { label: "File Tools", href: "/file-tools" },
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
        label: "cs@ngampus.co.id",
        href: "mailto:cs@ngampus.co.id",
        icon: "email",
      },
      { label: "@ngampus.co.id", href: tiktokUrl, icon: "tiktok" },
      { label: "@ngampusapp", href: instagramUrl, icon: "instagram" },
    ],
  },
]
