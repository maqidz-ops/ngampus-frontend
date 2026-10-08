# Peta integrasi backend

Dokumen ini menunjukkan lokasi penggantian implementasi lokal. Belum ada backend, skema database, endpoint, atau provider yang dipilih.

| Fitur        | Kondisi sekarang                                            | Titik integrasi berikutnya                                                                                         |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Auth         | Form menampilkan status belum tersedia                      | `features/auth/components/auth-forms.tsx`: pindahkan submit ke layanan auth; validasi server, sesi, reset password |
| Marketplace  | Katalog lokal dan model checkout dari `services/catalog.ts` | Ganti sumber katalog dengan adapter API; server menghitung ulang harga berdasarkan ID varian dan durasi            |
| Pembayaran   | Submit checkout hanya menampilkan pesan                     | Buat order dan pembayaran di server; status dibaca melalui order, diverifikasi lewat webhook provider              |
| Plagiarism   | Katalog dan form lokal                                      | Upload dokumen, buat job pemeriksaan, baca status dan hasil di `features/plagiarism`                               |
| Orders       | Pencarian hanya mengubah state tampilan                     | Implementasikan layanan pencarian dengan verifikasi akses; jangan jadikan nomor WhatsApp saja sebagai otorisasi    |
| Creator      | Sesi `sessionStorage`, dashboard contoh, form lokal         | Ganti adapter sesi demo dengan sesi server; layanan submission, saldo, dan withdrawal pada fitur Creator           |
| Warranty     | Klaim dan order contoh, perubahan dalam state UI            | Ganti `data/demo-claims.ts` dengan layanan klaim; validasi kepemilikan order, bukti, dan masa garansi di server    |
| Blog         | Artikel lokal, filter lewat `services/posts.ts`             | Adapter CMS/API; pertahankan mapping ke model artikel                                                              |
| File Tools   | Memilih file, belum memproses                               | Tambahkan processor browser atau layanan job di `features/file-tools` setelah strategi dipilih                     |
| Home / Legal | Konten statis                                               | CMS opsional; tidak wajib backend                                                                                  |

## Pola integrasi

- Simpan akses HTTP, mapping respons, dan penanganan kegagalan dalam `features/<fitur>/services/`. Komponen bertanggung jawab pada input, loading, error, dan hasil.
- Endpoint API ditentukan bersama backend. Jangan menambahkan URL tebakan, kredensial, atau respons sukses palsu.
- Harga, saldo, reward, refund, hak akses, dan keputusan garansi harus dihitung/divalidasi server. Tampilan frontend bukan sumber kebenaran.
- Tipe TypeScript bukan validasi runtime. Validasi data API dan input pengguna di boundary server.
- File rahasia/server tidak boleh diimpor modul dengan `"use client"`; konfigurasi publik dan rahasia harus terpisah.
- Hook `useCreatorSession` saat ini hanya menyinkronkan sesi demo. Redirect UI di dashboard tidak melindungi data backend.

## Urutan pekerjaan yang disarankan

1. Sepakati model pengguna, sesi, produk/varian, order, dan status pembayaran.
2. Hubungkan auth dan katalog; lanjutkan pembuatan order dan pembayaran.
3. Hubungkan riwayat pesanan dan klaim garansi.
4. Hubungkan submission Creator, verifikasi, ledger saldo, dan withdrawal.
5. Hubungkan job plagiarisme serta strategi pemrosesan file.

Saat sebuah fitur terhubung, hapus data demo yang tidak lagi digunakan dan perbarui status README. Tambahkan tes adapter untuk error, data kosong, izin, dan respons invalid.
