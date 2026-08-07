(function () {
  const defaults = {
    brand: 'StarDev',
    site: {},
    pages: {},
    hero: {},
    produk: [],
    kontak: { telegram: [] },
    faq: [],
    testimoniLink: ''
  };

  function loadJSON(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    if (xhr.status !== 200 && xhr.status !== 0) {
      throw new Error('Gagal memuat ' + url + ' (' + xhr.status + ')');
    }
    return JSON.parse(xhr.responseText);
  }

  function formatPrice(item) {
    if (!item) return 'Hubungi admin';
    if (typeof item.harga === 'string' && item.harga.trim()) return item.harga;

    const parts = [];
    if (typeof item.priceUSD !== 'undefined' && item.priceUSD !== null) {
      parts.push(`$${item.priceUSD}`);
    }
    if (typeof item.priceIDR !== 'undefined' && item.priceIDR !== null) {
      parts.push(`Rp ${item.priceIDR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`);
    }
    if (parts.length) return parts.join(' / ');
    return item.telegramText || item.price || item.label || 'Hubungi admin';
  }

  function normalizePricing(pricing) {
    if (!Array.isArray(pricing)) return [];
    return pricing.map(item => ({
      nama: item.label || item.nama || item.durasi || '',
      durasi: item.label || item.durasi || item.nama || '',
      harga: formatPrice(item),
      best: !!item.best
    }));
  }

  function normalizeContacts(product) {
    if (Array.isArray(product.kontak) && product.kontak.length) return product.kontak;

    const contacts = [];
    if (product.reseller && product.reseller.username) {
      const username = product.reseller.username.replace(/^@/, '');
      contacts.push({ nama: username, link: `https://t.me/${username}`, owner: true });
    }
    if (product.supportContact) {
      const username = String(product.supportContact).replace(/^@/, '');
      if (!contacts.some(c => c.nama.toLowerCase() === username.toLowerCase())) {
        contacts.push({ nama: username, link: `https://t.me/${username}`, owner: false });
      }
    }
    return contacts;
  }

  function normalizeFeatures(features) {
    if (!features || typeof features !== 'object') return [];
    const iconMap = {
      Combat: '⚔️',
      Visual: '👁️',
      Misc: '🛠️',
      Settings: '⚙️',
      License: '🧾',
      Security: '🔐',
      'Admin Panel': '🧩',
      'Key Management': '🔑',
      'HWID Management': '🛡️',
      'Telegram Bot': '🤖',
      Integration: '🔗',
      Customization: '🎨',
      Compatibility: '⚙️'
    };

    return Object.entries(features).map(([category, content]) => {
      const icon = iconMap[category] || '✨';
      let sub = [];

      if (Array.isArray(content)) {
        sub = [{ judul: category, detail: content.join(', ') }];
      } else if (content && typeof content === 'object') {
        sub = Object.entries(content).flatMap(([subTitle, value]) => {
          if (Array.isArray(value)) {
            return [{ judul: subTitle, detail: value.join(', ') }];
          }
          if (value && typeof value === 'object') {
            return Object.entries(value).map(([nestedTitle, nestedValue]) => ({
              judul: `${subTitle} / ${nestedTitle}`,
              detail: Array.isArray(nestedValue) ? nestedValue.join(', ') : String(nestedValue)
            }));
          }
          return [{ judul: subTitle, detail: String(value) }];
        });
      } else {
        sub = [{ judul: category, detail: String(content) }];
      }

      return {
        icon,
        nama: category,
        deskripsi: '',
        sub
      };
    });
  }

  function normalizeProduct(product) {
    const description = product.deskripsi || product.shortDesc || '';
    const compatibility = product.compatibility ? ` (${product.compatibility})` : '';

    return {
      id: product.id,
      nama: product.nama || product.name || '',
      kategori: product.kategori || product.category || '',
      deskripsi: `${description}${compatibility}`.trim(),
      gambar: product.gambar || product.image || '',
      kontak: normalizeContacts(product),
      paket: product.paket || normalizePricing(product.pricing),
      cara_pakai: product.cara_pakai || {
        video_url: '',
        langkah: [],
        catatan: product.note || product.disclaimer || ''
      },
      fitur: product.fitur || normalizeFeatures(product.features)
    };
  }

  try {
    const products = loadJSON('data/products.json');
    const texts = loadJSON('data/texts.json');
    const rawProducts = products.produk || products.products || [];
    const normalizedProduk = Array.isArray(rawProducts)
      ? rawProducts.map(normalizeProduct)
      : [];

    window.SITE_DATA = {
      ...defaults,
      ...texts,
      produk: normalizedProduk,
      kontak: texts.kontak || { telegram: [] },
      adminContact: products.adminContact || ''
    };
  } catch (error) {
    console.warn('Data JSON gagal dimuat, pakai fallback kosong.', error);
    window.SITE_DATA = window.SITE_DATA || defaults;
  }
})();
