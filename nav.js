/* ============================================================
   Shared navigation for dbranson-exo.github.io
   Hosted at: https://dbranson-exo.github.io/nav.js
   Add this to every GitHub Pages project:
     <script src="https://dbranson-exo.github.io/nav.js" defer></script>
   ============================================================ */

(function () {
    // ── Page registry ────────────────────────────────────────
    // Add new projects here. They'll appear in the nav on every page.
    const pages = [
        {
            name: 'Home',
            url: 'https://dbranson-exo.github.io/'
        },
        {
            name: 'Word Password Generator',
            url: 'https://dbranson-exo.github.io/word-password-generator/'
        },
    ];

    // ── Active page detection ────────────────────────────────
    function isActive(pageUrl) {
        const current = window.location.href.split('?')[0].split('#')[0];
        const normalized = current.endsWith('/') ? current : current + '/';
        const target = pageUrl.endsWith('/') ? pageUrl : pageUrl + '/';

        if (target === 'https://dbranson-exo.github.io/') {
            // Home is only active when exactly on the root
            return normalized === target;
        }
        return normalized.startsWith(target);
    }

    // ── Build nav ────────────────────────────────────────────
    const nav = document.createElement('nav');
    nav.className = 'site-nav';

    const inner = document.createElement('div');
    inner.className = 'site-nav-inner';

    const brand = document.createElement('a');
    brand.className = 'site-nav-brand';
    brand.href = 'https://dbranson-exo.github.io/';
    brand.textContent = "Dave's Utilities";

    const links = document.createElement('div');
    links.className = 'site-nav-links';

    pages.forEach(function (page) {
        const a = document.createElement('a');
        a.href = page.url;
        a.textContent = page.name;
        if (isActive(page.url)) {
            a.className = 'active';
        }
        links.appendChild(a);
    });

    inner.appendChild(brand);
    inner.appendChild(links);
    nav.appendChild(inner);

    // Insert as the very first element in <body>
    document.body.insertBefore(nav, document.body.firstChild);
})();
