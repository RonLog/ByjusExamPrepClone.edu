var cacheName = 'pwa';
var filesToCache = [
    './',
    './index.html',
    './byjusClassRoom.html',
    './byjusPractice.html',
    './byjusTestSeries.html',
    './css/style.css',
    './css/byjusClassRoom.css',
    './css/byjusPractice.css',
    './css/byjusTestSeries.css',
    'https://kit.fontawesome.com/a131e7076c.js',
    'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
