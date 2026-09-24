# Ngampus Frontend

Frontend [ngampus.id](https://ngampus.id), platform tools kuliah untuk mahasiswa Indonesia. Situs ini menampilkan layanan cek plagiasi, akses aplikasi premium, file tools, blog, kampanye UGC, serta halaman akun.

Repositori ini hanya berisi antarmuka. Tidak ada backend, autentikasi sungguhan, pembayaran, atau penyimpanan pesanan. Tombol seperti **Bayar Sekarang**, **Masuk**, **Daftar**, dan **Cari** menampilkan status bahwa layanan itu belum tersedia.

## Stack

| Bagian | Pakai |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript |
| UI | React 19, Tailwind CSS 4, shadcn (Radix) |
| Ikon | Lucide |
| Font | Inter (teks), Geist Mono (mono) |
| Bahasa halaman | `lang="id"` |

Node.js 20.9 atau lebih baru.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Untuk port lain:

```bash
npm run dev -- -p 3100
```

Perintah lain:

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | ESLint |
| `npm run format` | Format seluruh proyek dengan Prettier |
| `npm run format:check` | Cek format tanpa mengubah file |

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Beranda: pengumuman WhatsApp, hero, kategori tools, marketplace, harga, testimoni, FAQ |
| `/marketplace` | Katalog aplikasi, pencarian, dan filter kategori |
| `/marketplace/[slug]` | Checkout produk: data pembeli, paket, tipe, durasi, ringkasan harga |
| `/cek-plagiarisme` | Form cek plagiasi, filter, dan kode promo |
| `/file-tools` | Gabung, kompres, dan convert PDF. Tool aktif lewat `?tool=merge`, `?tool=kompres`, atau `?tool=convert` |
| `/blog` | Daftar artikel, filter kategori, dan halaman. Query: `?kategori=` dan `?halaman=` |
| `/blog/[slug]` | Detail artikel |
| `/ugc-campaign` | Syarat dan alur UGC Campaign |
| `/riwayat-pesanan` | Pencarian pesanan (belum terhubung ke data pesanan) |
| `/daftar`, `/masuk`, `/lupa-password` | Form akun. Navbar dan footer disembunyikan di ketiga rute ini |
| `/syarat-ketentuan` | Syarat dan ketentuan |
| `/kebijakan-privasi` | Kebijakan privasi |

Slug marketplace yang ada: `chatgpt`, `claude`, `gemini`, `canva`, `capcut`, `spotify`.

Navigasi desktop memakai label **Cek Plagiarisme**. **Daftar** adalah tombol sekunder dan **Masuk** adalah tombol utama. Bilah pengumuman WhatsApp hanya tampil di beranda.

## Struktur

```text
app/                  Rute App Router dan layout
components/layout/    Navbar, footer, breadcrumb, chrome situs
components/sections/  Bagian halaman (beranda, katalog, checkout, blog tools)
components/auth/      Kerangka dan form akun
components/ui/        Komponen shadcn
lib/content/          Teks, harga, navigasi, dan data halaman
lib/utils.ts          Helper `cn`
public/images/        Logo, maskot, dan logo aplikasi
```

Alias impor: `@/` mengarah ke root proyek.

Konten yang sering diubah ada di `lib/content/`, bukan di dalam komponen:

| File | Isi |
| --- | --- |
| `home.ts` | Hero, kategori, alasan, harga, FAQ, CTA, deskripsi footer |
| `navigation.ts` | Menu, footer, tautan WhatsApp, TikTok, Instagram |
| `marketplace.ts` | Katalog, harga, dan data checkout produk |
| `plagiarism.ts` | Salinan dan harga halaman cek plagiasi |
| `blog.ts` | Artikel, kategori, dan format tanggal |
| `campaign.ts` | Salinan UGC Campaign |
| `legal.ts` | Syarat dan kebijakan privasi |
| `file-tools.ts` | Salinan file tools |

Harga checkout produk dihitung dari harga katalog dikali durasi 1, 6, atau 12 bulan. Pilihan paket dan tipe (Private / Sharing) tidak mengubah angka. **Bayar Sekarang** tidak memproses pembayaran.

## Tampilan

Warna utama ada di `app/globals.css`:

| Token | Nilai | Pemakaian |
| --- | --- | --- |
| `--color-orange-600` | `#FE4411` | Oranye merek |
| `--color-orange-500` | `#FF612A` | Tombol utama |
| `--color-plum-900` | `#3C1B2C` | Teks gelap |
| `--color-surface` | `#FAFAFA` | Latar permukaan dan footer |

Radius 12px ditulis `rounded-[12px]`. `rounded-xl` mengikuti token radius dan bukan 12px.

## Yang belum dihubungkan

- Pendaftaran, masuk, dan reset password tidak membuat atau memeriksa akun.
- Pembayaran marketplace, paket harga, dan kode promo tidak memotong saldo atau mengubah harga.
- Riwayat pesanan tidak mencari order sungguhan.
- File tools tidak memproses file di server.
- Halaman submit konten UGC belum dibuat. Langkahnya hanya tertulis di salinan kampanye.

## Deploy

Build standar Next.js, misalnya di Vercel:

```bash
npm run build
npm run start
```

Tidak ada variabel lingkungan yang wajib. Jangan memasukkan rahasia ke repositori. `.env*` sudah diabaikan Git.
