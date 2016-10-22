console.log("[sw] Code loaded");

this.addEventListener('install', function(event) {
    console.log("[sw] Installed", event);
});

this.addEventListener('activate', function(event) {
    console.log("[sw] activated", event);
});