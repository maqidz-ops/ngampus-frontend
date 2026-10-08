# Ngampus Frontend

Frontend Ngampus untuk marketplace, plagiarisme, file tools, blog, akun, creator, dan klaim garansi. Menggunakan Next.js 16, React 19, TypeScript, Tailwind CSS 4, serta shadcn/Radix.

## Mulai

Gunakan Node.js 20.9+ dan jalankan:

```bash
npm ci
npm run dev
```

Buka http://localhost:3000. Untuk pemeriksaan:

```bash
npm run lint
npm run typecheck
npm run test:features
npm run format:check
npm run build
```

`npm run start` menjalankan build produksi. Build menggunakan font Google melalui `next/font` dan memerlukan akses jaringan ketika font belum tersedia.

## Struktur

```text
app/                  Rute, metadata, layout, dan komposisi halaman
features/
  auth/               Form daftar, masuk, dan lupa password
  blog/               Artikel, daftar, filter, dan pembacaan konten
  creator/            Kampanye, dashboard, submit, withdraw, sesi demo
  file-tools/         Pilihan merge, kompres, dan konversi
  home/               Bagian beranda
  legal/              Halaman syarat dan privasi
  marketplace/        Katalog, pilihan produk, harga, dan checkout
  payment/            Konfirmasi, QRIS, dan status pembayaran pratinjau
  orders/             Pencarian riwayat pesanan
  plagiarism/         Katalog layanan dan form pemeriksaan
  warranty/           Form dan daftar klaim garansi
components/
  ui/                 Primitif UI shadcn
  layout/             Navbar, footer, breadcrumb, dan kerangka halaman
  shared/             Komponen presentasi lintas fitur
config/               Navigasi, kontak, dan konten situs bersama
lib/                  Utilitas lintas fitur
public/               Aset statis
scripts/              Pemeriksaan regresi data fitur
docs/                Panduan arsitektur, integrasi backend, dan branch
```

Setiap fitur memakai `components/` untuk UI, `data/` untuk konten lokal, `types.ts` untuk tipe domain bila diperlukan, `services/` untuk pembacaan data atau adapter, dan `hooks/` untuk state yang dipakai bersama. Folder hanya dibuat bila ada implementasinya.

- [Arsitektur dan aturan dependensi](docs/architecture.md)
- [Peta integrasi backend](docs/backend-integration.md)
- [Alur pembayaran frontend](docs/payment-flow.md)
- [Alur kerja branch](docs/git-workflow.md)

## Status integrasi

Backend produksi belum terhubung. Checkout menyediakan alur pembayaran pratinjau (konfirmasi, QRIS, proses, selesai), tanpa transaksi nyata; autentikasi umum belum aktif, dan riwayat belum membaca pesanan asli. Creator memakai sesi demo di `sessionStorage`; itu bukan autentikasi. Data contoh Creator dan garansi diberi nama `demo-*`. File Tools saat ini hanya menyediakan pemilihan file.

URL publik tetap: `/`, `/marketplace`, `/marketplace/[slug]`, `/cek-plagiarisme`, `/cek-plagiarisme/[slug]`, `/file-tools`, `/blog`, `/blog/[slug]`, `/riwayat-pesanan`, `/klaim-garansi`, `/daftar`, `/masuk`, `/lupa-password`, `/creator` beserta halaman turunannya, `/syarat-ketentuan`, dan `/kebijakan-privasi`. `/ugc-campaign` mengarah ke `/creator`.

Tidak ada variabel lingkungan wajib untuk frontend saat ini. `.env*` diabaikan Git. Konfigurasi hosting tetap mengikuti pengaturan proyek Vercel.
