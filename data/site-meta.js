// Helper for applying site/page metadata and branding
(function(){
  function applySiteMeta(pageKey){
    window.SITE_DATA = window.SITE_DATA || {};
    const site = window.SITE_DATA.site || {};
    if (!site.ogImage) {
      site.ogImage = 'asset/og-image.png';
    }
    const page = window.SITE_DATA.pages?.[pageKey] || {};
    const origin = window.location.origin !== 'null' ? window.location.origin : window.location.href.replace(/\/[^^\/]*$/, '');
    const resolvePlaceholder = value => {
      if(!value) return '';
      return value.replace(/\{URL_WEBSITE\}/g, origin).replace(/\{URL_TESTIMONI\}/g, window.SITE_DATA.testimoniLink || '');
    };

    const title = page.title || site.title || document.title;
    const description = page.description || site.description || '';
    const ogTitle = page.ogTitle || title;
    const ogUrl = resolvePlaceholder(page.url || site.url) || window.location.href;
    const ogImage = resolvePlaceholder(page.ogImage || site.ogImage) || site.ogImage;
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
        ? `<span class="dot"></span> <a href="${homeHref}">${window.SITE_DATA.brand}</a><span class="mono" style="color:var(--muted); font-weight:400;">.store</span>`
        : `<span class="dot"></span> ${window.SITE_DATA.brand}<span class="mono" style="color:var(--muted); font-weight:400;">.store</span>`;
      el.innerHTML = brandText;
    });

    document.querySelectorAll('footer #brandFooter').forEach(el => {
      el.textContent = window.SITE_DATA.brand;
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

  window.applySiteMeta = applySiteMeta;
})();
