let map = L.map('map').setView([48.8566, 2.3522], 13)
L.tileLayer('https://{s}.tile.openstreetmap.org/2/2/1.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);