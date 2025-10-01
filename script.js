let map = L.map("map").setView([48.8566, 2.3522], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.marker([48.8566, 2.3522])
  .addTo(map)
  .bindPopup("Bienvenue sur ta carte sensorielle 👁️👃🏻🫳🏻👂🏻")
  .openPopup();

let circle = L.circle([48.8453, 2.3522], {
  color: "purple",
  fillColor: "rgba(194, 125, 237, 1)",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

function onMapClick(event) {
  alert("Tu as cliqué sur la carte aux coordonnées " + event.latlng);
}
map.on("click", onMapClick);

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

let pinkIcon = L.icon({
  iconUrl: "/assets/images/pin-fill-sharp-circle-635-svgrepo-com.svg",
  iconSize: [40, 70], // size of the icon
  iconAnchor: [20, 10], // point of the icon which will correspond to marker's location
});

L.marker([48.855053, 2.272801], { icon: pinkIcon })
  .addTo(map)
  .bindPopup("Café tranquille ☕️")
  .openPopup();
