export const warrantyClaimsPage = {
  title: "Pusat Klaim Garansi Marketplace Ngampus",
  description:
    "Ada produk yang tidak sesuai ketentuan? Ajukan klaim di sini, dan kami bantu proses sesuai ketentuan garansi produkmu",
  cta: "Ajukan Klaim",
}

export const warrantyClaimFilters = [
  { id: "semua", label: "Semua Klaim" },
  { id: "dalam-proses", label: "Dalam Proses" },
  { id: "selesai", label: "Selesai" },
  { id: "ditolak", label: "Ditolak" },
] as const

export type WarrantyClaimStatus = "dalam-proses" | "selesai" | "ditolak"

export type WarrantyClaim = {
  id: string
  orderId: string
  product: string
  reason: string
  status: WarrantyClaimStatus
  submittedAt: string
}

export const warrantyClaimStatusLabel: Record<WarrantyClaimStatus, string> = {
  "dalam-proses": "Dalam Proses",
  selesai: "Selesai",
  ditolak: "Ditolak",
}

export const warrantyClaimOrders = [
  {
    id: "ORD-2026-9781",
    product: "YouTube Premium & Music (3 Bulan Invite)",
  },
  {
    id: "ORD-2026-9804",
    product: "Netflix Premium Ultra HD (1 Profil 1 User)",
  },
  {
    id: "ORD-2026-9710",
    product: "ChatGPT Plus (1 Bulan Privat)",
  },
]

export const warrantyClaimCategories = [
  "Akun Ter-logout Otomatis",
  "Password Berubah",
  "Limit Tercapai",
]

export const warrantyClaims: WarrantyClaim[] = [
  {
    id: "CLM-2026-188",
    orderId: "ORD-2026-9781",
    product: "YouTube Premium & Music (3 Bulan Invite)",
    reason: "Password Berubah",
    status: "dalam-proses",
    submittedAt: "2026-10-01 16:50:53",
  },
  {
    id: "CLM-2026-104",
    orderId: "ORD-2026-9804",
    product: "Netflix Premium Ultra HD (1 Profil 1 User)",
    reason: "Password Berubah",
    status: "dalam-proses",
    submittedAt: "2026-09-27 10:14:00",
  },
  {
    id: "CLM-2026-098",
    orderId: "ORD-2026-9710",
    product: "ChatGPT Plus (1 Bulan Privat)",
    reason: "Limit Tercapai",
    status: "selesai",
    submittedAt: "2026-09-15 08:30:00",
  },
]

export const warrantyClaimForm = {
  title: "Pengajuan Klaim Garansi Baru",
  description:
    "Isi rincian kendala lisensi untuk verifikasi oleh tim support",
  orderLabel: "ID / Nomor Faktur Pesanan",
  orderPlaceholder: "Masukkan ID atau nomor faktur pesananmu",
  categoryLabel: "Kategori Kendala",
  categoryPlaceholder: "Apa Kendala yang Kamu Alami?",
  detailLabel: "Ceritakan Kendalamu",
  detailPlaceholder:
    "Jelaskan kendala yang kamu alami secara detail, termasuk kapan kendala terjadi dan pesan error jika ada…",
  proofLabel: "Bukti Screenshot",
  proofTitle: "Upload Bukti Screenshot",
  proofHint:
    "Lampirkan screenshot yang menunjukkan kendala pada akun atau produkmu",
  proofButton: "Upload Screenshot",
  cancel: "Batal",
  submit: "Kirim Pengajuan Klaim",
}
