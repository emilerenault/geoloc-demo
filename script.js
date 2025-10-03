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

// Fonction pour afficher le popup personnalisé
function showCustomPopup({ name, image, url }) {
  const popup = document.getElementById("custom-popup");
  popup.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="popup-title">${name}</div>
    <a class="popup-link" href="${url}" target="_blank">Voir le site</a>
  `;
  popup.classList.remove("hidden");
}

// Fonction pour masquer le popup personnalisé
function hideCustomPopup() {
  document.getElementById("custom-popup").classList.add("hidden");
}

// Marqueurs avec popup personnalisé
L.marker([48.8686, 2.3359])
  .addTo(map)
  .on("click", function () {
    showCustomPopup({
      name: "☕️ Café Joyeux (St-Augustin)",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNmEM3yyUxVAcIsGCgYyCPqrChzkoVFeWSJTUOq=s1360-w1360-h1020",
      url: "https://www.cafejoyeux.com/fr/content/41-cafe-joyeux-paris-opera",
    });
  });

L.marker([48.8765, 2.3562])
  .addTo(map)
  .on("click", function () {
    showCustomPopup({
      name: "☕️ Café Tranquille",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNJxxh7hzuuTO0VuBCPNvUFKHkgO0BoLg5l90gF=s1360-w1360-h1020",
      url: "https://www.instagram.com/cafetranquille",
    });
  });

L.marker([48.8606, 2.2976])
  .addTo(map)
  .on("click", function () {
    showCustomPopup({
      name: "🏛️ Musée du quai Branly",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMuncpXbWlPpLbu9rK8t3EbsYToaFQnF4e5senZ=s1360-w1360-h1020",
      url: "https://www.quaibranly.fr/",
    });
  });

L.marker([48.8617, 2.3435])
  .addTo(map)
  .on("click", function () {
    showCustomPopup({
      name: "🏛️ Le Musée en Herbe",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipN1opHFTqspUndplnzgwqFataHw9sGQ8bt9cIMb=s1360-w1360-h1020",
      url: "https://www.musee-en-herbe.com/",
    });
  });

L.marker([48.8707, 2.3702])
  .addTo(map)
  .on("click", function () {
    showCustomPopup({
      name: "🏛️ Musée de poche",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipORT7mT8wrTuRp0tB_cR9AKPDSVehIMy1UBzhvH=s1360-w1360-h1020",
      url: "https://museedepoche.fr",
    });
  });

// Masquer le popup si on clique sur la carte ou sur le marqueur principal
map.on("click", function (e) {
  hideCustomPopup();
});

L.marker([48.8566, 2.3522], { icon: pinkIcon })
  .addTo(map)
  .bindPopup("Ma position")
  .openPopup()
  .on("click", function () {
    hideCustomPopup();
  });

// Bouton de recentrage sur "Ma position"
document.getElementById("recenter-btn").addEventListener("click", function () {
  map.setView([48.8566, 2.3522], 13);
});

map.on("click", function (e) {
  // Ajoute un marqueur à l'endroit du clic
  L.marker(e.latlng).addTo(map).bindPopup("Nouveau lieu").openPopup();
});
