// Initialisation de la carte centrée sur Paris
let map = L.map("map").setView([48.8566, 2.3522], 13);

// Ajout du fond de carte CartoDB Positron
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
}).addTo(map);

// Définition de l’icône personnalisée pour le marqueur "Ma position"
let pinkIcon = L.icon({
  iconUrl: "/images/pin-fill-sharp-circle-635-svgrepo-com.svg",
  iconSize: [40, 70],
  iconAnchor: [20, 10],
});

// Marqueur principal (Ma position) avec icône personnalisée
L.marker([48.8566, 2.3522], { icon: pinkIcon })
  .addTo(map)
  .bindPopup("Ma position")
  .openPopup();

// Cercle violet pour une zone
let circle = L.circle([48.8453, 2.3522], {
  color: "purple",
  fillColor: "rgba(194, 125, 237, 1)",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

// Gestion du clic sur la carte (popup coordonnées)
function onMapClick(event) {
  alert("Tu as cliqué sur la carte aux coordonnées " + event.latlng);
}
map.on("click", onMapClick);

// Popup dynamique sur clic
let popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      "Tu as cliqué sur la carte aux coordonnées " + e.latlng.toString()
    )
    .openOn(map);
}

map.on("click", onMapClick);

// Marqueur Café Joyeux (St-Augustin) (icône par défaut)
L.marker([48.8686, 2.3359])
  .addTo(map)
  .bindPopup("☕️ Café Joyeux (St-Augustin)")
  .openPopup();

// Marqueur Café Tranquille (icône par défaut)
L.marker([48.8765, 2.3562])
  .addTo(map)
  .bindPopup("☕️ Café Tranquille")
  .openPopup();

// Marqueur Musée du quai Branly (icône par défaut)
L.marker([48.8606, 2.2976])
  .addTo(map)
  .bindPopup("🏛️ Musée du quai Branly")
  .openPopup();

// Marqueur Le Musée en Herbe (icône par défaut)
L.marker([48.8617, 2.3435])
  .addTo(map)
  .bindPopup("🏛️ Le Musée en Herbe")
  .openPopup();

// Marqueur Musée de poche (icône par défaut)
L.marker([48.8707, 2.3702])
  .addTo(map)
  .bindPopup(
    '<a href="https://museedepoche.fr" target="_blank">🏛️ Musée de poche</a>'
  )
  .openPopup();

// Bouton de recentrage sur "Ma position"
document.getElementById("recenter-btn").addEventListener("click", function () {
  map.setView([48.8566, 2.3522], 13);
});

map.on("click", function (e) {
  // Ajoute un marqueur à l'endroit du clic
  L.marker(e.latlng)
    .addTo(map)
    .bindPopup("Nouveau marqueur<br>Coordonnées : " + e.latlng.toString())
    .openPopup();
});
