const CACHE_NAME = 'pokerogue-assets-v2';
const POKEROGUE_CDN = 'https://pokerogue.online';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const pathname = url.pathname;

  const isPokemonAsset = pathname.includes('/images/pokemon/') || pathname.includes('/audio/cry/');
  if (!isPokemonAsset) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // 1. Check persistent cache
    try {
      const cached = await cache.match(req);
      if (cached) return cached;
    } catch (e) {}

    // 2. Try fetching from original request (local or remote)
    try {
      const res = await fetch(req);
      if (res && res.ok) {
        // Cache successful response (only if basic or cors)
        if (res.type === 'basic' || res.type === 'cors') {
          cache.put(req, res.clone()).catch(() => {});
        }
        return res;
      }
    } catch (e) {}

    // 3. If local request returned 404/failed, fetch from official online CDN
    if (url.origin === self.location.origin) {
      const idx = pathname.indexOf('/images/pokemon/') !== -1 
        ? pathname.indexOf('/images/pokemon/') 
        : pathname.indexOf('/audio/cry/');
      const relPath = pathname.substring(idx);
      const cdnUrl = POKEROGUE_CDN + relPath;

      try {
        const cdnRes = await fetch(cdnUrl, { mode: 'cors' });
        if (cdnRes && cdnRes.ok) {
          cache.put(req, cdnRes.clone()).catch(() => {});
          return cdnRes;
        }
      } catch (e) {}
    }

    // 4. Safe offline / network failure fallback so battle never freezes
    try {
      let fallbackPath = './images/pokemon/1.png';
      if (pathname.endsWith('.json')) {
        fallbackPath = pathname.includes('/back/') ? './images/pokemon/back/7.json' : './images/pokemon/1.json';
      } else if (pathname.endsWith('.m4a') || pathname.includes('/audio/cry/')) {
        fallbackPath = './audio/cry/1.m4a';
      } else if (pathname.includes('/back/')) {
        fallbackPath = './images/pokemon/back/7.png';
      }
      const fallbackRes = await fetch(fallbackPath);
      if (fallbackRes && fallbackRes.ok) return fallbackRes;
    } catch (e) {}

    return new Response(new Blob([]), {
      status: 200,
      headers: { 'Content-Type': 'application/octet-stream' }
    });
  })());
});
