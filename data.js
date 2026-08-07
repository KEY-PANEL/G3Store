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

  brand: "StarDev",

  site: {
    title: "StarDev // Script & App Store",
    description: "Script otomasi, aplikasi Android, sampai tools digital custom — tinggal chat, langsung kirim.",
    url: "{URL_WEBSITE}/",
    ogImage: "{URL_WEBSITE}/assets/og-image.png",
    twitterCard: "summary_large_image",
    footerText: "status: open for orders",
    nav: {
      katalog: "Katalog",
      panduan: "Panduan",
      kontak: "Cara Beli"
    }
  },

  pages: {
    home: {
      title: "StarDev // Script & App Store",
      description: "Script otomasi, aplikasi Android, sampai tools digital custom — tinggal chat, langsung kirim.",
      url: "{URL_WEBSITE}/"
    },
    katalog: {
      title: "Katalog // StarDev",
      description: "Lihat semua produk StarDev — script, app, dan tools lainnya lengkap dengan fitur & harga.",
      url: "{URL_WEBSITE}/katalog.html"
    },
    kontak: {
      title: "Cara Beli // StarDev",
      description: "Hubungi admin StarDev lewat Telegram buat proses pembelian.",
      url: "{URL_WEBSITE}/kontak.html"
    },
    panduan: {
      title: "Panduan // StarDev",
      description: "Video pemasangan dan langkah-langkah penggunaan untuk script maupun app dari StarDev.",
      url: "{URL_WEBSITE}/panduan.html"
    },
    produk: {
      title: "Produk // StarDev",
      description: "Detail produk StarDev — paket harga, cara pakai, dan fitur lengkap.",
      url: "{URL_WEBSITE}/produk.html"
    }
  },

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
      id: "gold-glory-cheats",
      nama: "Gold & Glory Cheats",
      kategori: "Game Cheat / Android App",
      deskripsi: "Compatible with Root or Non-Root. Risiko ban ada, jadi gunakan dengan bijak.",
      gambar: "asset/gold-glory-cheats.png",
      kontak: [
        { nama: "Heya", link: "https://t.me/OnlyHeya", owner: true },
        { nama: "Duxess", link: "https://t.me/DuxessV3", owner: false },
        { nama: "Gerrek", link: "https://t.me/GerrekG3", owner: false },
        { nama: "Lulu", link: "https://t.me/Yt_Lulu", owner: false },
        { nama: "Sall", link: "https://t.me/SallTmlss", owner: false }
      ],
      paket: [
        { nama: "3 Hari", durasi: "3 Hari", harga: "$4 / Rp 70.000", best: false },
        { nama: "5 Hari", durasi: "5 Hari", harga: "$6 / Rp 105.000", best: false },
        { nama: "10 Hari", durasi: "10 Hari", harga: "$8 / Rp 140.000", best: false },
        { nama: "1 Bulan", durasi: "1 Bulan", harga: "$15 / Rp 250.000", best: true }
      ],
      cara_pakai: {
        video_url: "",
        langkah: [
          "Hubungi admin untuk memastikan versi yang sesuai device kamu.",
          "Lakukan pembayaran sesuai paket yang dipilih.",
          "Terima file/akses dan ikuti instruksi instalasi.",
          "Gunakan dengan hati-hati dan tetap patuhi aturan game."
        ],
        catatan: "No refund for any transactions. Buy = Understand, please be smart."
      },
      fitur: [
        {
          icon: "⚔️",
          nama: "Combat",
          deskripsi: "Fitur pertarungan dan kontrol pergerakan",
          sub: [
            { judul: "Aim Settings", detail: "Draw Fov, Draw Line, Draw Dot, Fov Value, Smart Aim Target, Silent Aim, Auto Headshot, Silent Skill, Arrow Trace" },
            { judul: "Jump Settings", detail: "Enable High Jump, Jump Mode, High Jump v1/v2, Disable Jump Animation, Gravity Value" },
            { judul: "Player Settings", detail: "Spoof Nickname, Player Level, No Collision, Anti Stun, Player Height" },
            { judul: "Motion", detail: "Enable Gravity, Gravity On First Jump, Gravity After First Jump, Speed Mode, Fly Speed" }
          ]
        },
        {
          icon: "👁️",
          nama: "Visual",
          deskripsi: "Deteksi pemain, monster, chest, dan objek visual lainnya",
          sub: [
            { judul: "Chams", detail: "Shader, Visible Color, Occluded Color" },
            { judul: "ESP", detail: "Player ESP, Monster ESP, Chest ESP, Box, Name, Line, Health, Dot, Distance" },
            { judul: "Camera", detail: "Camera FOV, Camera FOV Value, Object Scanner" }
          ]
        },
        {
          icon: "🛠️",
          nama: "Misc",
          deskripsi: "Fitur utilitas, kontrol akun, dan manajemen item",
          sub: [
            { judul: "Item", detail: "Skip Search, Auto Loot, Auto Drop, Show Ground/Inventory Item, Owner Filter, Quality Filter, Item Table" },
            { judul: "Guest", detail: "Save Guest, Load Guest, Reset Guest" },
            { judul: "Other", detail: "Emote List, Player Table, Il2Cpp Dump, Exit Match, Force Exit, Fix Screen Coordinate, Unban Account, Reset Banned Reminder" }
          ]
        },
        {
          icon: "⚙️",
          nama: "Settings",
          deskripsi: "Kustomisasi menu dan tampilan",
          sub: [
            { judul: "Menu Interface", detail: "Target FPS, Menu Scale, Font Scale, Scrollbar Size, Grab Size, Sidebar Width, Save Config, Load Config" },
            { judul: "Theme", detail: "Neon Accent, Background" }
          ]
        }
      ]
    },
    {
      id: "roblox-script",
      nama: "Roblox Script",
      kategori: "Roblox Script",
      deskripsi: "Tersedia script untuk Grow a Garden Pet System, Kayak & Craft. Bisa request fitur lain sesuai kebutuhan.",
      gambar: "asset/roblox-script.png",
      kontak: [
        { nama: "Yt_Lulu", link: "https://t.me/Yt_Lulu", owner: true }
      ],
      paket: [
        { nama: "Custom Request", durasi: "Sesuaikan", harga: "Hubungi admin", best: false }
      ],
      cara_pakai: {
        video_url: "",
        langkah: [
          "Chat admin untuk menentukan script yang diinginkan.",
          "Sebutkan map atau fitur yang ingin ditambahkan.",
          "Lakukan transaksi dan terima script sesuai permintaan.",
          "Gunakan fitur yang realistis dan sesuai batasan game."
        ],
        catatan: "Only normal and realistic features are accepted. Please don't request features that are impossible or beyond the scope of the game."
      },
      fitur: [
        {
          icon: "🎮",
          nama: "Available Scripts",
          deskripsi: "Script yang saat ini tersedia",
          sub: [
            { judul: "Grow a Garden", detail: "Pet System" },
            { judul: "Kayak & Craft", detail: "Script untuk fitur map yang tersedia" }
          ]
        },
        {
          icon: "✨",
          nama: "Custom Request",
          deskripsi: "Bisa request script untuk map lain",
          sub: [
            { judul: "Request Fitur", detail: "Sebutkan fitur yang ingin ditambahkan, admin akan menyesuaikan." }
          ]
        }
      ]
    },
    {
      id: "keyless-panel",
      nama: "Keyless Panel",
      kategori: "Admin Panel / Tool",
      deskripsi: "Tersedia untuk Roblox script, fake lib, dan mod APK. Memiliki admin panel, bot Telegram/Discord, serta sistem keamanan.",
      gambar: "asset/keyless-panel.png",
      kontak: [
        { nama: "Yt_Lulu", link: "https://t.me/Yt_Lulu", owner: true }
      ],
      paket: [
        { nama: "Custom Panel", durasi: "Sesuaikan", harga: "Hubungi admin", best: true }
      ],
      cara_pakai: {
        video_url: "",
        langkah: [
          "Diskusikan kebutuhan panel dan bot dengan admin.",
          "Pilih fitur panel yang ingin dipakai.",
          "Lakukan pembayaran dan terima akses panel.",
          "Gunakan panel sesuai kebutuhan project atau produk."
        ],
        catatan: "Security system currently only available on fake lib/mod APK."
      },
      fitur: [
        {
          icon: "🧩",
          nama: "Admin Panel",
          deskripsi: "Panel kontrol untuk berbagai kebutuhan produk",
          sub: [
            { judul: "Panel Management", detail: "Tersedia untuk Roblox script, fake lib, dan mod APK" }
          ]
        },
        {
          icon: "🤖",
          nama: "Bot",
          deskripsi: "Dukungan bot untuk Discord atau Telegram",
          sub: [
            { judul: "Bot Support", detail: "Bisa dipasang untuk notifikasi atau kontrol otomatis" }
          ]
        },
        {
          icon: "🔐",
          nama: "Security",
          deskripsi: "Sistem keamanan untuk perlindungan produk",
          sub: [
            { judul: "Security System", detail: "Saat ini tersedia khusus untuk fake lib/mod APK" }
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
      { nama: "OnlyHeya", link: "https://t.me/OnlyHeya", owner: true },
      { nama: "OnlyHeya", link: "https://t.me/OnlyHeya", owner: false },
      { nama: "Yt_Lulu", link: "https://t.me/Yt_Lulu", owner: false }
    ]
  },

  // ------------------------------------------------------
  // TESTIMONI - link ke tempat testimoni/bukti transaksi kamu
  // (channel Telegram, grup Discord, halaman review, dsb — bebas)
  // ------------------------------------------------------
  testimoniLink: "{URL_TESTIMONI}",

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

function applySiteMeta(pageKey){
  const site = SITE_DATA.site || {};
  const page = SITE_DATA.pages?.[pageKey] || {};
  const origin = window.location.origin !== 'null' ? window.location.origin : window.location.href.replace(/\/[^\/]*$/, '');
  const resolvePlaceholder = value => {
    if(!value) return '';
    return value.replace(/\{URL_WEBSITE\}/g, origin).replace(/\{URL_TESTIMONI\}/g, SITE_DATA.testimoniLink || '');
  };

  const title = page.title || site.title || document.title;
  const description = page.description || site.description || '';
  const ogTitle = page.ogTitle || title;
  const ogUrl = resolvePlaceholder(page.url || site.url) || window.location.href;
  const ogImage = resolvePlaceholder(page.ogImage || site.ogImage) || '';
  const twitterCard = site.twitterCard || 'summary_large_image';

  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', ogUrl);
  document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', twitterCard);

  document.querySelectorAll('nav .brand').forEach(el => {
    const anchor = el.querySelector('a');
    const homeHref = anchor ? anchor.getAttribute('href') : 'index.html';
    const brandText = anchor
      ? `<span class="dot"></span> <a href="${homeHref}">${SITE_DATA.brand}</a><span class="mono" style="color:var(--muted); font-weight:400;">.store</span>`
      : `<span class="dot"></span> ${SITE_DATA.brand}<span class="mono" style="color:var(--muted); font-weight:400;">.store</span>`;
    el.innerHTML = brandText;
  });

  document.querySelectorAll('footer #brandFooter').forEach(el => {
    el.textContent = SITE_DATA.brand;
  });

  document.querySelectorAll('footer .footer-text').forEach(el => {
    if(site.footerText) el.textContent = site.footerText;
  });

  const setNavText = (href, text) => {
    const anchor = document.querySelector(`nav .links a[href="${href}"]`);
    if(anchor && text) anchor.textContent = text;
  };
  setNavText('katalog.html', site.nav?.katalog);
  setNavText('panduan.html', site.nav?.panduan);
  setNavText('kontak.html', site.nav?.kontak);
}
