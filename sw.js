const CACHE_NAME = "dino-pro-v1";

const urlsToCache = [
  "./",
  "./index.html",

  "./fundo1.png",
  "./dino1.png",
  "./dinoacocado1.png",

  "./dinorosanew.png",
  "./dinoacocadorosanew.png",

  "./dinoazulnew.png",
  "./dinoazulacocadonew.png",

  "./cacto1.png",
  "./cacto2.png",
  "./voador.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});