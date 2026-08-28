self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // هذا الكود الخفيف ضروري لكي يقبل المتصفح تثبيت التطبيق
});
