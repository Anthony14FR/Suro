import Navbar from "../components/Navbar.js";
import fetchParis2024Sites from "../api/fetchParis2024Sites.js";
import FilterBar from "../components/FilterBar.js";
import {
  handleSortChange,
  handleFilterChange,
  handleSportChange,
  updateView,
  getSportsList
} from "../lib/MapUtils.js";

export default function Map() {
  let sites = [];
  let map;

  const div = document.createElement("div");
  div.appendChild(Navbar());
  div.className = "flex flex-col h-[700px]";

  const mainContent = document.createElement("div");
  mainContent.className = "p-4 h-full flex flex-col gap-4";

  const filterBar = FilterBar(
    (sortType) => handleSortChange(sites, sortType, updateView, map, cardContainer),
    (gameType) => handleFilterChange(sites, gameType, updateView, map, cardContainer),
    (sport) => handleSportChange(sites, sport, updateView, map, cardContainer),
    showAll
  );
  const content = document.createElement("div");
  content.className = "flex gap-4 h-full";

  const cardContainer = document.createElement("div");
  cardContainer.className = "w-3/5 overflow-y-scroll h-full pr-4";

  const mapContainer = document.createElement("div");
  mapContainer.className = "h-full w-full border-4 border-gray-300 rounded-md";
  mapContainer.id = "map";

  content.appendChild(cardContainer);
  content.appendChild(mapContainer);
  mainContent.appendChild(filterBar);
  mainContent.appendChild(content);
  div.appendChild(mainContent);

  setTimeout(() => {
    map = L.map(mapContainer.id).setView([48.8566, 2.3522], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    fetchParis2024Sites()
      .then((data) => {
        sites = data;
        updateView(sites, map, cardContainer);
        const sportsList = getSportsList(sites);
        filterBar.querySelector('select').innerHTML = sportsList.map(sport => `<option value="${sport}">${sport}</option>`).join('');
      })
      .catch((error) => {
        console.error(error);
      });
  }, 0);

  function showAll() {
    updateView(sites, map, cardContainer);
  }

  return div;
}
