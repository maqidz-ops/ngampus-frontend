export const plagiarismCheckout = {
  priceLabel: "Rp 15.000",
  summaryTitle: "Ringkasan Pesanan",
  summaryDescription: "Cek similarity untuk satu dokumen.",
  uploadTitle: "Upload Dokumen",
  uploadDescription: "PDF, DOCX, atau TXT.",
  emptyFile: "Belum ada dokumen",
  payLabel: "Bayar Sekarang",
  howTo: {
    title: "Cara pakai",
    description: "Tiga langkah. Gak perlu nunggu operator.",
  },
}

export const plagiarismFilters = [
  {
    id: "sumber-kutipan",
    title: "Sumber Kutipan",
    description: "Teks yang merupakan kutipan langsung",
    defaultChecked: true,
  },
  {
    id: "daftar-pustaka",
    title: "Daftar Pustaka",
    description: "Teks bagian referensi dan daftar pustaka",
    defaultChecked: false,
  },
  {
    id: "daftar-pustaka-2",
    title: "Daftar Pustaka",
    description: "Teks bagian referensi dan daftar pustaka",
    defaultChecked: false,
  },
] as const

export const plagiarismSteps = [
  {
    title: "Upload dokumen",
    description: "Kirim file tugas, skripsi, atau artikel.",
    icon: "upload" as const,
  },
  {
    title: "Bayar pakai QRIS",
    description: "Scan, bayar, langsung diproses otomatis.",
    icon: "qris" as const,
  },
  {
    title: "Terima di WhatsApp",
    description: "Laporan masuk ke nomormu, hitungan menit.",
    icon: "whatsapp" as const,
  },
]
