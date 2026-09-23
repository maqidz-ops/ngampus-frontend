export const hero = {
  title: ["Dari tugas sampai skripsi,", "semua tools ada di sini."],
  description:
    "Semua tools yang kamu butuh selama kuliah, kumpul di satu tempat. Dari AI, urusan akademik, sampai file.",
}

export const trustedBy = {
  title: "TELAH DIPERCAYA 50.000+ MAHASISWA",
  logos: Array.from({ length: 10 }, (_, i) => ({
    id: `campus-${i}`,
    name: "Universitas Sebelas Maret",
    src: "/images/logo-campus.png",
  })),
}

export const toolCategories = {
  title: ["Tools kuliah,", "lengkap di satu tempat"],
  description:
    "Ngampus.id bantu dari tugas, skripsi, tesis, sampai artikel ilmiah — cek plagiasi, AI, dan urusan file.",
  items: [
    {
      title: "Akses AI populer",
      description:
        "ChatGPT, Claude, Gemini, Canva, dan tools favorit mahasiswa lainnya.",
      href: "/marketplace",
      cta: "Beli Sekarang",
    },
    {
      title: "Cek Plagiarisme",
      description:
        "Cek plagiasi, deteksi AI, parafrase, grammar, dan kebutuhan akademik lain.",
      href: "/cek-plagiarisme",
      cta: "Cek Sekarang",
    },
    {
      title: "File tools",
      description: "Kompres, convert, gabung, dan rapikan file. Gratis.",
      href: "/file-tools",
      cta: "Coba Sekarang",
    },
  ],
}

export const whyNgampus = {
  title: "Kenapa mahasiswa pilih Ngampus",
  description: "Cek plagiasi resmi, hasil cepat, dokumenmu tetap aman.",
  items: [
    {
      title: "Platform resmi",
      description:
        "Cek plagiasi pakai platform yang kredibel dan sudah dipakai luas di kampus.",
    },
    {
      title: "Akses 24 jam",
      description:
        "Siap kapan pun. Tengah malam atau mepet deadline, langsung bisa jalan.",
    },
    {
      title: "Selesai dalam menit",
      description:
        "Gak perlu nunggu lama. Dokumen diproses otomatis, hasilnya dalam hitungan menit.",
    },
    {
      title: "Privasi terjaga",
      description:
        "File tidak disimpan permanen. Data dihapus otomatis setelah proses selesai.",
    },
    {
      title: "Tidak masuk repository",
      description:
        "Dokumenmu tidak masuk repository permanen, jadi tidak mengganggu cek plagiasi kampus nanti.",
    },
    {
      title: "Laporan lengkap",
      description:
        "Dapat laporan PDF dengan persentase similarity dan sumber yang terdeteksi, rinci.",
    },
  ],
}

export const marketplace = {
  title: "Beli Aplikasi Premium",
  description:
    "ChatGPT, Claude, dan Gemini. Langganan bulanan, harga mahasiswa.",
  items: [
    {
      name: "ChatGPT",
      description: "Asisten nulis, riset, dan brainstorm.",
      price: "Rp 49.000/bln",
      logo: "/images/app-chatgpt.png",
      logoBordered: true,
      cta: "Beli Sekarang",
    },
    {
      name: "Claude",
      description: "Baca dokumen panjang, analisis rapi.",
      price: "Rp 59.000/bln",
      logo: "/images/app-claude.png",
      logoBordered: false,
      cta: "Beli Sekarang",
    },
    {
      name: "Gemini",
      description: "Multimodal, nyambung ke Google.",
      price: "Rp 45.000/bln",
      logo: "/images/app-gemini.png",
      logoBordered: true,
      cta: "Beli Sekarang",
    },
  ],
}

export const pricing = {
  title: "Paket langganan",
  description:
    "Akses cek plagiasi dan tools akademik, dengan harga yang masuk akal.",
  cta: "Pilih paket",
  plans: [
    {
      name: "Starter",
      price: "Rp 24.000",
      description: "Coba dulu. Pas untuk tugas singkat.",
      features: ["3x cek plagiasi", "Laporan hasil PDF", "Notifikasi WhatsApp"],
    },
    {
      name: "Standar",
      price: "Rp 24.000",
      description: "Paling dipilih. Pas buat skripsi.",
      features: [
        "10x cek plagiasi",
        "Prioritas antrian",
        "Notifikasi WhatsApp",
      ],
    },
    {
      name: "Premium",
      price: "Rp 24.000",
      description: "Kuota lebih besar, prioritas lebih tinggi.",
      features: [
        "25x cek plagiasi",
        "Prioritas antrian",
        "Notifikasi WhatsApp",
      ],
    },
  ],
}

export const faq = {
  title: "Pertanyaan umum",
  description: "Jawaban singkat soal Ngampus. Masih bingung? Chat admin kami.",
  items: [
    {
      question: "Apa itu Ngampus?",
      answer:
        "Ngampus adalah platform AI untuk penulisan akademik. Dari parafrase, rapikan teks AI, cek plagiasi, sampai persiapan publikasi jurnal — semua di satu tempat.",
    },
    {
      question: "Siapa yang cocok memakai Ngampus?",
      answer:
        "Mahasiswa D3, S1, S2, sampai S3 yang sedang mengerjakan tugas, skripsi, tesis, disertasi, atau artikel ilmiah.",
    },
    {
      question: "Fitur apa saja yang tersedia di Ngampus?",
      answer:
        "Cek plagiasi, deteksi AI, parafrase, grammar checker, akses aplikasi AI premium, serta file tools seperti kompres, convert, gabung, dan split file.",
    },
    {
      question: "Bagaimana cara memakai Ngampus?",
      answer:
        "Daftar akun, pilih layanan atau paket yang kamu butuhkan, unggah dokumen, lalu tunggu hasilnya. Notifikasi dikirim lewat WhatsApp.",
    },
    {
      question: "Berapa lama prosesnya?",
      answer:
        "Sebagian besar dokumen selesai diproses dalam hitungan menit, tergantung panjang dokumen dan antrian.",
    },
  ],
}

export const cta = {
  title: ["Cek plagiasimu,", "hasil dalam menit."],
  button: "Mulai sekarang",
  href: "/#harga",
}

export const footer = {
  description:
    "Jasa cek plagiasi alternatif Turnitin dan AI Detector No Repository terpercaya, aman, dan aktif 24 jam. Proses otomatis dengan hasil cepat dan akurat.",
}
