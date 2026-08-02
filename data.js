// ============================================================
//  DATA / VARIABEL TOKO
//  Edit semua isi di sini. Semua halaman (index, katalog,
//  produk, kontak) otomatis baca dari file ini.
//
//  NAMBAH KATALOG BARU: tinggal copy salah satu objek di
//  array "produk" di bawah, paste jadi objek baru, ganti "id"-nya
//  (id dipakai di URL: produk.html?id=id-yang-kamu-isi). Nggak
//  perlu bikin file HTML baru sama sekali.
// ============================================================

const SITE_DATA = {

  brand: "Cdaaptnia",

  hero: {
    headline: "Script & app siap pakai, tinggal chat, langsung kirim.",
    deskripsi: "Kami bikin dan jual tools digital — script otomasi, aplikasi Android, sampai tools kustom."
  },

  // ------------------------------------------------------
  // PRODUK - tambah/hapus objek di array ini sesuka hati
  //
  //  id        : slug unik, huruf/angka tanpa spasi, dipakai di URL
  //              (produk.html?id=gag1)
  //  kategori  : bebas, contoh "Roblox Script" / "Android App" / "Tools"
  //  deskripsi : keterangan singkat yang muncul di kartu katalog
  //  gambar    : opsional, link screenshot/preview UI (kosongkan ""
  //              kalau belum ada, nanti tampil placeholder)
  //
  //  paket     : daftar pilihan harga/durasi. best:true buat kasih
  //              ribbon "BEST VALUE" di salah satu paket
  //
  //  cara_pakai: video_url opsional + langkah-langkah pemakaian +
  //              catatan penting
  //
  //  fitur     : daftar kategori fitur. Tiap kategori punya
  //              icon (emoji), nama, deskripsi singkat, dan sub-list
  //              (judul + detail) buat rincian per fitur
  //
  //  kontak    : OPSIONAL. Isi kalau produk ini mau punya admin/reseller
  //              sendiri (beda dari daftar admin umum di bawah).
  //              Formatnya sama kayak kontak.telegram global:
  //              [{ nama, link, owner }]. Kalau nggak diisi / dihapus,
  //              otomatis pakai daftar admin umum.
  // ------------------------------------------------------
  produk: [
    {
      id: "GnG",
      nama: "GnGMod",
      kategori: "App-Mod",
      deskripsi: "Script otomasi lengkap dengan fitur combat, visual, dan utilitas.",
      gambar: "",
      // kontak: [ { nama: "AdminGAG1", link: "https://t.me/xxxxxxx", owner: true } ],
      paket: [
        { nama: "Paket Hemat", durasi: "3 Hari", harga: "Rp 70.000", best: false },
        { nama: "Paket Reguler", durasi: "5 Hari", harga: "Rp 105.000", best: false },
        { nama: "Paket Populer", durasi: "10 Hari", harga: "Rp 140.000", best: false },
        { nama: "Paket Sultan", durasi: "1 Bulan", harga: "Rp 250.000", best: true }
      ],
      cara_pakai: {
        video_url: "",
        langkah: [
          "Buka executor yang didukung (sesuai info produk).",
          "Copy script/key yang dikirim admin setelah pembayaran.",
          "Paste ke kolom executor, lalu tekan tombol Execute/Inject.",
          "Tunggu UI muncul di layar game, lalu atur fitur sesuai kebutuhan."
        ],
        catatan: "Pastikan game & executor sudah versi terbaru biar script jalan normal."
      },
      fitur: [
        {
          icon: "🎯",
          nama: "Combat Module",
          deskripsi: "Membantu bidikan dan mobilitas bertarung",
          sub: [
            { judul: "Aim Settings", detail: "Draw Fov, Draw Line, Draw Dot, Fov Value, Smart Aim Target, Silent Aim" },
            { judul: "Jump Settings", detail: "Enable High Jump, Jump Mode, Disable Jump Animation, Gravity Value" },
            { judul: "Player Settings", detail: "Spoof Nickname, Player Level, No Collision, Anti Stun" }
          ]
        },
        {
          icon: "👁",
          nama: "Visual & Wallhack",
          deskripsi: "Menembus batas pandangan objek",
          sub: [
            { judul: "Chams", detail: "Shader, Visible Color, Occluded Color" },
            { judul: "ESP", detail: "Box, Name, Line, Health, Dot, Distance untuk Player & Monster" }
          ]
        },
        {
          icon: "🧩",
          nama: "Miscellaneous",
          deskripsi: "Fitur utilitas penunjang kenyamanan",
          sub: [
            { judul: "Item Management", detail: "Skip Search, Show Ground/Inventory Item, Quality Filter, Auto Loot" },
            { judul: "Kontrol Akun", detail: "Save Guest, Load Guest, Reset Guest" }
          ]
        }
      ]
    },
    {
      id: "app1",
      nama: "APP1",
      kategori: "Android App",
      deskripsi: "Aplikasi Android dengan fitur produktivitas / utilitas.",
      gambar: "",
      paket: [
        { nama: "Lisensi Bulanan", durasi: "1 Bulan", harga: "Rp 50.000", best: false },
        { nama: "Lisensi Tahunan", durasi: "12 Bulan", harga: "Rp 400.000", best: true }
      ],
      cara_pakai: {
        video_url: "",
        langkah: [
          "Download file APK yang dikirim lewat channel pembelian.",
          "Aktifkan \"Install dari sumber tidak dikenal\" di pengaturan HP kalau diminta.",
          "Buka file APK dan tekan Install.",
          "Buka aplikasinya, login/aktivasi sesuai instruksi (kalau ada)."
        ],
        catatan: "Aplikasi hanya untuk Android. Update dikirim ulang lewat channel yang sama."
      },
      fitur: [
        {
          icon: "⚙️",
          nama: "Fitur Utama",
          deskripsi: "Fungsi inti aplikasi",
          sub: [
            { judul: "Tema", detail: "Light/Dark mode" },
            { judul: "Performa", detail: "Ringan & hemat memori" }
          ]
        }
      ]
    }
  ],

  // ------------------------------------------------------
  // KONTAK / RESELLER — fokus Telegram
  // owner:true buat kasih badge OWNER di depan nama
  // ------------------------------------------------------
  kontak: {
    telegram: [
      { nama: "OnlyHeya", link: "https://t.me/Yt_Lulu", owner: true },
      { nama: "Admin 2", link: "https://t.me/yyyyyyy", owner: false },
      { nama: "Admin 3", link: "https://t.me/zzzzzzz", owner: false }
    ]
  },

  // ------------------------------------------------------
  // TESTIMONI - tambah/hapus objek sesuka hati, muncul di halaman utama
  // produk: opsional, isi id atau nama produk yang dibeli
  // ------------------------------------------------------
  testimoni: [
    {
      nama: "Pembeli 1",
      produk: "GAG1",
      pesan: "Prosesnya cepat, script langsung jalan begitu di-execute. Recommended."
    },
    {
      nama: "Pembeli 2",
      produk: "APP1",
      pesan: "Adminnya responsif, dibantu sampai bener-bener bisa dipakai."
    },
    {
      nama: "Pembeli 3",
      produk: "GAG1",
      pesan: "Udah beli beberapa kali di sini, selalu aman dan sesuai deskripsi."
    }
  ],

  // ------------------------------------------------------
  // FAQ - tambah/hapus objek sesuka hati, muncul di halaman Cara Beli
  // ------------------------------------------------------
  faq: [
    {
      tanya: "Gimana cara belinya?",
      jawab: "Pilih produk di halaman Katalog, tekan View buat lihat paket & fitur, terus chat admin Telegram sesuai paket yang dipilih."
    },
    {
      tanya: "Pembayaran lewat apa aja?",
      jawab: "Metode pembayaran diinfoin langsung sama admin pas chat, menyesuaikan yang tersedia saat itu."
    },
    {
      tanya: "Berapa lama produk dikirim setelah bayar?",
      jawab: "Umumnya langsung dikirim begitu pembayaran dikonfirmasi admin. Kalau butuh waktu lebih, admin bakal infoin."
    },
    {
      tanya: "Script/app-nya kompatibel di mana aja?",
      jawab: "Cek bagian Fitur di halaman detail tiap produk, atau tanya langsung ke admin sebelum beli kalau masih ragu."
    }
  ]
};
