// Listen for install event, set callback
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/DoL/index.html',
          '/DoL/main.js',
          '/DoL/service-worker.js',
          '/DoL/manifest.json',
          '/DoL/icon-192.png',
          '/DoL/icon-512.png',
          '/DoL/favicon.ico',
          '/DoL/DolSettingsExport.json',
          '/DoL/style.css'
        ]
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  // Perform some task
});