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
import Footer from "../components/Footer.js";

export default function Map() {
  let sites = [];
  let map;

  const div = document.createElement("div");
  div.appendChild(Navbar());

  const mainContent = document.createElement("div");
  mainContent.className = "p-4 h-[700px] flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44";

  const filterBar = FilterBar(
    (sortType) => handleSortChange(sites, sortType, updateView, map, cardContainer),
    (gameType) => handleFilterChange(sites, gameType, updateView, map, cardContainer),
    (sport) => handleSportChange(sites, sport, updateView, map, cardContainer),
    showAll
  );
  const content = document.createElement("div");
  content.className = "flex gap-4 h-full xl:flex-row flex-col xl:flex-1 flex-1";

  const cardContainer = document.createElement("div");
  cardContainer.className = "w-full xl:overflow-y-scroll h-[700px] xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden xl:h-full pr-4 xl:w-3/5 flex xl:flex-col space-x-5 xl:space-x-0";

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
        addUserLocation(map);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 0);

  function addUserLocation(map) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const userIcon = L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color:blue;width:20px;height:20px;border-radius:50%;"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            popupAnchor: [0, -10],
          });

          L.marker([userLat, userLng], { icon: userIcon }).addTo(map)
            .bindPopup(`<b>Your Location</b>`);
          map.setView([userLat, userLng], 12);
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showAll() {
    updateView(sites, map, cardContainer);
  }

  div.appendChild(Footer());

  return div;
}
