const CACHE_NAME = 'imedcalc-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('ფაილების ქეშირება:', urlsToCache);
                return cache.addAll(urlsToCache).catch(err => {
                    console.error('ქეშის addAll ფუნქციის შეცდომა:', err);
                });
            })
            .catch(err => {
                console.error('ქეშის გახსნის შეცდომა:', err);
            })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch(err => {
                    console.error('Fetch-ის შეცდომა:', err);
                    return new Response('ოფლაინ: რესურსის ჩატვირთვა შეუძლებელია.', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
            .catch(err => {
                console.error('ქეშის match ფუნქციის შეცდომა:', err);
            })
    );
});