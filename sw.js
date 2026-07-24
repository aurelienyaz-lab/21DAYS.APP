// 21 DAYS · Service Worker
// Simple "cache-first, network-fallback" strategy — l'app fonctionne 100% hors ligne
// une fois installée.

const CACHE_NAME = '21days-v4-2026-07-24';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/apple-touch-icon-180.png',
  './icons/apple-touch-icon-167.png',
  './icons/apple-touch-icon-152.png',
  './icons/apple-touch-icon-120.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png'
];

// Install: pré-cacher tous les assets de base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        console.warn('Cache prime failed:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: purge des vieux caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, puis network, avec mise en cache silencieuse des nouveaux GET
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache les ressources externes (fonts Google) de manière opportuniste
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone).catch(() => {});
          });
        }
        return response;
      }).catch(() => {
        // Offline sans fallback disponible — retourne juste l'erreur réseau
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
