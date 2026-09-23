export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  paragraphs: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cek-plagiasi-sebelum-kumpulin-skripsi",
    title: "Cek plagiasi sebelum kumpulin skripsi",
    excerpt: "Kirim file tugas, skripsi, atau artikel.",
    date: "12 September 2026",
    paragraphs: [
      "Skripsi yang sudah beres tetap perlu dicek sebelum dikumpulin. Similarity yang tinggi sering datang dari kutipan yang belum diparafrase, daftar pustaka yang ikut terhitung, atau bagian metode yang mirip dengan jurnal acuan.",
      "Unggah dokumen di Ngampus, tunggu hasilnya beberapa menit, lalu baca laporan PDF-nya. Persentase similarity dan sumber yang terdeteksi membantu kamu merapikan bagian yang memang perlu diubah.",
      "Dokumen tidak masuk repository permanen, jadi cek ini tidak mengganggu pengecekan resmi kampus nanti.",
    ],
  },
  {
    slug: "beda-cek-plagiasi-dan-deteksi-ai",
    title: "Beda cek plagiasi dan deteksi AI",
    excerpt: "Dua pemeriksaan, dua hasil yang berbeda.",
    date: "8 September 2026",
    paragraphs: [
      "Cek plagiasi membandingkan tulisanmu dengan sumber yang sudah ada. Deteksi AI memperkirakan apakah sebuah teks terlihat seperti hasil generator.",
      "Keduanya tidak saling menggantikan. Tulisan bisa lolos plagiasi tetapi tetap terdeteksi sebagai teks AI, atau sebaliknya.",
      "Pakai keduanya sebelum bimbingan. Rapikan kalimat yang terlalu kaku, lalu cek ulang similarity-nya.",
    ],
  },
  {
    slug: "cara-baca-laporan-similarity",
    title: "Cara baca laporan similarity",
    excerpt: "Persentase saja tidak cukup. Lihat sumbernya.",
    date: "2 September 2026",
    paragraphs: [
      "Laporan PDF menampilkan persentase similarity dan daftar sumber yang terdeteksi. Angka tinggi belum tentu berarti menyalin, kalau sebagian besar berasal dari daftar pustaka atau kutipan yang sudah ditandai.",
      "Buka setiap sorotan. Ubah bagian yang memang mirip dengan sumber, dan biarkan kutipan yang sudah kamu tandai dengan benar.",
      "Simpan laporannya. Beberapa dosen meminta bukti cek, bukan hanya angka di chat.",
    ],
  },
  {
    slug: "file-pdf-kegedean",
    title: "File PDF kegedean sebelum dikumpulin",
    excerpt: "Kompres dulu, baru unggah ke kampus.",
    date: "28 Agustus 2026",
    paragraphs: [
      "Portal kampus sering menolak file di atas batas ukuran. Gambar di dalam skripsi biasanya penyebabnya.",
      "Kompres PDF di file tools Ngampus tanpa mengubah isi halaman. Setelah ukurannya muat, baru unggah.",
      "Kalau masih terlalu besar, pisahkan lampiran jadi file kedua, lalu gabungkan lagi saat sudah perlu.",
    ],
  },
  {
    slug: "parafrase-tanpa-mengubah-makna",
    title: "Parafrase tanpa mengubah makna",
    excerpt: "Tulis ulang kalimat, jangan hanya ganti kata.",
    date: "21 Agustus 2026",
    paragraphs: [
      "Parafrase yang baik mengubah susunan kalimat, bukan hanya sinonimnya. Makna dan data harus tetap sama dengan sumber.",
      "Tetap cantumkan sitasi. Parafrase bukan alasan untuk menghilangkan rujukan.",
      "Setelah dirapikan, cek plagiasi sekali lagi supaya bagian yang masih mirip ketahuan sebelum bimbingan.",
    ],
  },
  {
    slug: "dokumen-tidak-masuk-repository",
    title: "Dokumenmu tidak masuk repository",
    excerpt: "Cek di Ngampus tidak mengganggu cek kampus.",
    date: "15 Agustus 2026",
    paragraphs: [
      "Banyak mahasiswa takut cek plagiasi di luar kampus karena dokumennya bisa masuk repository dan terdeteksi sebagai sumber dirinya sendiri.",
      "Di Ngampus, file tidak disimpan permanen. Data dihapus setelah proses selesai, dan dokumen tidak masuk repository yang dipakai kampus.",
      "Kamu tetap mendapat laporan lengkap, tanpa mengunci naskahmu untuk pengecekan resmi nanti.",
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
