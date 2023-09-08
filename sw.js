// //self es como 'this' pero de los service workers 
// const VERSION = "v1";

// self.addEventListener('install', event => {
//     event.waitUntil(precache());
// })

// self.addEventListener('fetch', event => {
//     const request = event.request;
//     //get
//     if (request.method !== "GET") {
//         return;
//     }
//     //Buscar en el caché
//     event.respondWith(cachedResponse(request));

//     //catch&network, actualizar el caché
//     event.waitUntil(updateCache(request)) 

// });

// async function precache() {
//     const cache = await caches.open(VERSION);
//     return cache.addAll([
//         // '/',
//         // '/index.html',
//         // '/assets/index.js',
//         // '/assets/MediaPlayer.mjs',
//         // '/assets/plugins/AutoPlay.mjs',
//         // '/assets/plugins/AutoPause.mjs',
//         // '/assets/index.css',
//         // '/assets/BigBuckBunny.mp4',
//     ])
// }

// async function cachedResponse(request) {
//     const cache = await caches.open(VERSION);
//     const response = await cache.match(request);
//     return response || fetch(request);
// }

// async function updateCache(request) {
//     const cache = await caches.open(VERSION);
//     const response = await fetch(request);
//     return cache.put(request, response);
// }