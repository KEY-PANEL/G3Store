// ============================================================
//  DATA / VARIABEL TOKO
//  Edit semua isi di sini. Semua halaman (index, katalog,
//  panduan, kontak) otomatis baca dari file ini.
// ============================================================

const SITE_DATA = {

  brand: "Cdaaptnia",

  hero: {
    headline: "Script & app siap pakai, tinggal chat, langsung kirim.",
    deskripsi: "Kami bikin dan jual tools digital — script otomasi, aplikasi Android, sampai tools kustom."
  },

  // ------------------------------------------------------
  // PRODUK - tambah/hapus objek di array ini sesuka hati
  // kategori: bebas, contoh "Roblox Script" / "Android App" / "Tools"
  // ------------------------------------------------------
  produk: [
    {
      nama: "Nama Script #1",
      kategori: "Roblox Script",
      deskripsi: "Deskripsi singkat fitur utama script.",
      fitur: ["Fitur otomasi utama 1", "Fitur otomasi utama 2", "UI kustom / mudah diatur", "Update berkala"],
      harga: "Rp 00.000"
    },
    {
      nama: "Nama App #2",
      kategori: "Android App",
      deskripsi: "Aplikasi Android dengan fitur produktivitas / utilitas.",
      fitur: ["Fitur utama app 1", "Fitur utama app 2", "Tema Light/Dark", "Ringan & hemat memori"],
      harga: "Rp 00.000"
    },
    {
      nama: "Nama Script #3",
      kategori: "Roblox Script",
      deskripsi: "Cocok untuk pemain yang butuh efisiensi.",
      fitur: ["Auto farming/otomasi", "Anti-AFK", "Kompatibel executor tertentu"],
      harga: "Rp 00.000"
    },
    {
      nama: "Nama Produk #4",
      kategori: "Tools / Lainnya",
      deskripsi: "Slot buat produk lain — web tool, template, atau custom order.",
      fitur: ["Fitur / cakupan 1", "Fitur / cakupan 2"],
      harga: "Rp 00.000"
    }
  ],

  // ------------------------------------------------------
  // PANDUAN PEMASANGAN
  // video_url: link video pemasangan, boleh dari mana aja
  // (YouTube / Telegram / Drive / dll) — tombol tinggal buka link ini di tab baru
  // ------------------------------------------------------
  panduan: {
    video_url: "{URL_VIDEO_PEMASANGAN}",
    script: {
      judul: "Cara pasang script",
      kategori: "Roblox Script",
      langkah: [
        "Buka executor yang didukung (misalnya Delta / sesuai info produk).",
        "Copy script/key yang dikirim admin setelah pembayaran.",
        "Paste ke kolom executor, lalu tekan tombol Execute/Inject.",
        "Tunggu UI muncul di layar game, lalu atur fitur sesuai kebutuhan."
      ],
      catatan: "Pastikan game & executor sudah versi terbaru biar script jalan normal."
    },
    app: {
      judul: "Cara install app",
      kategori: "Android App",
      langkah: [
        "Download file APK yang dikirim lewat channel pembelian.",
        "Aktifkan \"Install dari sumber tidak dikenal\" di pengaturan HP kalau diminta.",
        "Buka file APK dan tekan Install.",
        "Buka aplikasinya, login/aktivasi sesuai instruksi (kalau ada)."
      ],
      catatan: "Aplikasi hanya untuk Android. Kalau ada update, file baru dikirim ulang lewat channel yang sama."
    }
  },

  // ------------------------------------------------------
  // KONTAK / CARA BELI
  // telegram bisa lebih dari 1 admin, tinggal tambah objek baru di array
  // ------------------------------------------------------
  kontak: {
    whatsapp: {
      nama: "WhatsApp",
      link: "https://wa.me/62xxxxxxxxxx"
    },
    discord: {
      nama: "Discord",
      link: "https://discord.gg/xxxxxxx"
    },
    telegram: [
      { nama: "Admin 1", link: "https://t.me/xxxxxxx" },
      { nama: "Admin 2", link: "https://t.me/yyyyyyy" }
    ]
  }
};
