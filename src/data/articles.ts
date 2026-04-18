import aiImg from "@/assets/article-ai.jpg";
import creatorImg from "@/assets/article-creator.jpg";
import startupImg from "@/assets/article-startup.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  cover: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "peluang-bisnis-ai-mahasiswa",
    title: "5 Peluang Bisnis Berbasis AI yang Bisa Dimulai Mahasiswa Hari Ini",
    excerpt:
      "Dari jasa otomasi hingga produk SaaS mikro—AI membuka pintu yang dulu hanya bisa dibuka korporasi besar. Berikut peluang konkret yang bisa kamu eksekusi dari kos.",
    category: "AI & Bisnis",
    readTime: "7 menit",
    date: "12 April 2026",
    cover: aiImg,
    content: [
      "Beberapa tahun lalu, memulai bisnis berbasis kecerdasan buatan terdengar seperti mimpi yang hanya bisa diwujudkan tim engineer Silicon Valley. Hari ini, dengan ChatGPT, Claude, Gemini, dan ratusan API terbuka, mahasiswa dengan laptop sederhana pun bisa membangun produk yang dulu butuh modal miliaran. Pertanyaannya bukan lagi 'bisa atau tidak', tapi 'mau mulai dari mana'.",
      "Pertama, jasa otomasi UMKM. Banyak pelaku usaha kecil di sekitar kampus—warung kopi, laundry, toko online dadakan—yang masih mencatat order di buku tulis. Kamu bisa menawarkan paket otomasi sederhana: bot WhatsApp untuk balas pesanan, dashboard penjualan otomatis dari Google Sheets, hingga generator caption Instagram. Modal: waktu dan satu langganan API. Margin: sehat.",
      "Kedua, produk SaaS mikro untuk niche kecil. Tidak semua produk harus melayani jutaan orang. Tools sederhana seperti generator soal untuk guru les, ringkasan jurnal untuk peneliti pemula, atau asisten skripsi untuk mahasiswa tingkat akhir bisa menghasilkan langganan bulanan yang stabil. Kuncinya: pilih masalah yang kamu alami sendiri.",
      "Ketiga, content engine untuk personal brand. AI mempercepat produksi konten 10x lipat. Banyak profesional dan dosen butuh bantuan menjaga konsistensi LinkedIn, blog, atau newsletter mingguan. Posisikan dirimu sebagai 'ghostwriter berbantu AI' dengan editorial sentuhan manusia.",
      "Keempat, kursus dan template digital. Setelah kamu menguasai satu workflow AI tertentu—misalnya membangun chatbot custom—kemas pengalaman itu menjadi kursus singkat atau template Notion berbayar. Skala marginalnya nol, pendapatannya pasif.",
      "Kelima, konsultasi adopsi AI untuk komunitas lokal. Banyak organisasi mahasiswa, koperasi kampus, bahkan UKM di sekitar Universitas Amikom Yogyakarta (www.amikom.ac.id) yang ingin mengadopsi AI tapi bingung mulai dari mana. Workshop singkat 2 jam dengan harga terjangkau bisa menjadi pintu masuk yang menguntungkan kedua belah pihak.",
      "Yang membedakan mahasiswa yang berhasil dengan yang sekadar berwacana bukanlah ide—melainkan kecepatan eksekusi. Mulai kecil, rilis cepat, dengarkan pengguna pertama, lalu iterasi. Peluang ini tidak akan menunggu sampai kamu lulus.",
    ],
  },
  {
    slug: "creator-economy-era-digital",
    title: "Creator Economy: Mengubah Hobi Mahasiswa Menjadi Penghasilan Nyata",
    excerpt:
      "Lebih dari 50 juta orang di dunia menyebut diri mereka kreator. Bagaimana mahasiswa Indonesia bisa ikut ambil bagian tanpa harus menjadi selebgram?",
    category: "Digital Era",
    readTime: "6 menit",
    date: "8 April 2026",
    cover: creatorImg,
    content: [
      "Istilah 'creator economy' sering disalahartikan sebagai 'jadi influencer'. Padahal, lapisan paling menarik dari ekonomi ini justru ada di luar sorotan kamera—pada kreator niche, edukator mikro, dan builder yang membagikan proses, bukan hanya hasil.",
      "Untuk mahasiswa, ini kabar baik. Kamu tidak perlu jutaan follower untuk menghasilkan uang. Yang kamu butuhkan adalah 1.000 penggemar sejati, meminjam istilah Kevin Kelly. Seribu orang yang benar-benar peduli pada apa yang kamu buat dan bersedia membayar.",
      "Mulai dari topik yang membuatmu rela begadang tanpa dibayar. Suka membongkar gadget? Bangun TikTok review komponen kecil. Suka mengajar adik tingkat? Jual playlist YouTube terstruktur. Suka menulis? Mulai newsletter mingguan di Substack atau blog pribadi yang dimonetisasi via afiliasi dan sponsor.",
      "Kunci kedua adalah konsistensi yang manusiawi. Algoritma platform manapun memberi imbalan pada kreator yang muncul rutin selama 6–12 bulan pertama. Banyak mahasiswa menyerah di bulan ketiga karena membandingkan dirinya dengan kreator yang sudah berjalan tiga tahun. Jangan.",
      "Ketiga, diversifikasi pendapatan sejak awal. Jangan bergantung hanya pada AdSense atau endorse. Bangun produk turunan: ebook, template, kursus, komunitas berbayar, sesi konsultasi 1-on-1. Satu video viral bisa menghidupi satu produk selama berbulan-bulan.",
      "Yang sering dilupakan: kreator juga adalah bisnis. Pisahkan rekening, catat pengeluaran (kamera, software, listrik), dan pelajari dasar pajak. Mahasiswa yang memperlakukan channel-nya seperti perusahaan kecil sejak awal akan jauh lebih siap saat penghasilannya melonjak.",
      "Era ini memberi kesempatan yang tidak dimiliki generasi sebelumnya: membangun karier sambil kuliah, dari kamar kos, modal awal di bawah satu juta. Pertanyaannya, kapan kamu mulai upload yang pertama?",
    ],
  },
  {
    slug: "membangun-startup-dari-kampus",
    title: "Membangun Startup dari Kampus: Pelajaran dari Founder Muda Indonesia",
    excerpt:
      "Tidak ada waktu yang lebih murah untuk gagal selain saat masih kuliah. Panduan realistis membangun startup tanpa mengorbankan IPK.",
    category: "Startup",
    readTime: "8 menit",
    date: "2 April 2026",
    cover: startupImg,
    content: [
      "Setiap kali ada cerita founder sukses yang drop out, kita lupa pada ribuan founder lain yang justru menyelesaikan kuliahnya sambil membangun startup. Faktanya, kampus adalah inkubator alami—penuh co-founder potensial, mentor murah hati, dan target user yang terjangkau.",
      "Langkah pertama bukan menulis business plan 50 halaman. Langkah pertama adalah menemukan masalah yang kamu dan teman-temanmu alami berulang. Sulit cari kos? Bingung jadwal kuliah pengganti? Ribet bagi tagihan kontrakan? Setiap keluhan harian adalah bibit startup.",
      "Kedua, validasi sebelum membangun. Ngobrol dengan minimal 20 calon pengguna sebelum menulis baris kode pertama. Banyak mahasiswa terjebak membangun aplikasi 6 bulan, lalu kaget saat tidak ada yang mau pakai. Validasi murah, kode mahal.",
      "Ketiga, manfaatkan ekosistem kampus secara serius. Banyak universitas—termasuk Amikom Yogyakarta—memiliki inkubator, kompetisi bisnis, hibah PMW, dan akses ke jaringan alumni. Sumber daya ini sering kosong karena mahasiswanya tidak tahu atau malu mendaftar.",
      "Keempat, bentuk tim kecil tapi komplementer. Aturan praktisnya: satu orang yang bisa membangun produk, satu yang bisa menjual, satu yang bisa mengelola. Hindari tim berisi tiga programmer atau tiga marketer. Keseimbangan keterampilan menentukan kecepatan eksekusi.",
      "Kelima, sadari bahwa startup adalah maraton, bukan sprint. Idemu akan berubah, co-founder bisa pergi, traction akan datang lebih lambat dari ekspektasi. Yang menentukan bukan kecerdasan, melainkan ketahanan emosional untuk tetap muncul setiap minggu meski tidak ada yang bersorak.",
      "Terakhir: jangan abaikan kuliah. Banyak founder hebat justru menjadikan kampus sebagai 'safety net' yang membuat mereka berani ambil risiko. IPK yang layak dan startup yang berjalan bukan dua hal yang saling meniadakan—keduanya adalah bukti bahwa kamu bisa multitasking di bawah tekanan, kemampuan langka di pasar kerja manapun.",
      "Kalau kamu menunggu 'siap' untuk mulai, kamu tidak akan pernah mulai. Buka dokumen kosong sekarang, tulis satu masalah yang menyebalkanmu minggu ini, dan ajak satu teman ngobrol besok. Itulah hari pertama startup-mu.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
