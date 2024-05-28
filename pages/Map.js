import Navbar from "../components/Navbar.js";
import fetchParis2024Sites from "../api/fetchParis2024Sites.js";
import Card from "../components/Card.js";

export default function Map() {
  const div = document.createElement("div");
  div.appendChild(Navbar());
  div.className = "h-[768px]";

  const mainContent = document.createElement("div");
  mainContent.className = "p-4 flex gap-4 h-full";

  const cardContainer = document.createElement("div");
  cardContainer.className = "w-3/5 overflow-y-scroll overflow-y-scroll pr-4";

  const mapContainer = document.createElement("div");
  mapContainer.className = "h-full w-full";
  mapContainer.id = "map";

  mainContent.appendChild(cardContainer);
  mainContent.appendChild(mapContainer);
  div.appendChild(mainContent);


  setTimeout(() => {

    const map = L.map(mapContainer.id).setView([48.8566, 2.3522], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);


    fetchParis2024Sites()
      .then((data) => {
        data.forEach((record) => {
          const { nom_site: name, sports, start_date: startDate, end_date: endDate, latitude, longitude } = record;
          const lat = parseFloat(latitude.replace(",", "."));
          const lng = parseFloat(longitude.replace(",", "."));


          const marker = L.marker([lat, lng]).addTo(map);
          marker.bindPopup(`<b>${name}</b>`);


          const card = Card(name, sports, startDate, endDate, lat, lng, map);
          cardContainer.appendChild(card);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, 0);

  return div;
}
