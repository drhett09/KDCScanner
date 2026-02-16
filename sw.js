const CACHE_NAME="scanner-cache-v1";
const urls=["index.html","jspdf.umd.min.js","tesseract.min.js","manifest.json"];

self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urls))); });

self.addEventListener("fetch",e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
