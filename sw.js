const CACHE_NAME = "scanner-cache-v1";

const urlsToCache = [
  "index.html",
  "opencv.js",
  "jspdf.umd.min.js",
  "tesseract.min.js",
  "docx.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
