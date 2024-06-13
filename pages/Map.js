/*
import generatePage from "../lib/utils/generatePage.js";
import MapStructure from "../lib/MapStruct.js";
import {
  handleSortChange,
  handleFilterChange,
  handleSportChange,
  handleDateFilterChange,
  updateView,
  getSportsList
} from "../lib/MapUtils.js";
import fetchParis2024Sites from "../api/fetchParis2024Sites.js";
import FilterBar from "../components/FilterBar.js";

export default function Map() {
  let sites = [];
  let map;

  const handlers = {
    onSortChange: (sortType) => handleSortChange(sites, sortType, updateView, map, document.getElementById("cardContainer")),
    onFilterChange: (gameType) => handleFilterChange(sites, gameType, updateView, map, document.getElementById("cardContainer")),
    onSportChange: (sport) => handleSportChange(sites, sport, updateView, map, document.getElementById("cardContainer")),
    onDateFilterChange: (selectedDate) => handleDateFilterChange(sites, selectedDate, updateView, map, document.getElementById("cardContainer")),
    onShowAll: () => updateView(sites, map, document.getElementById("cardContainer"))
  };

  const page = generatePage(MapStructure);

  const filterBarContainer = page.querySelector("#filterBarContainer");
  const filterBar = FilterBar(handlers);
  filterBarContainer.appendChild(filterBar);

  const mapContainer = page.querySelector("#map");
  const cardContainer = page.querySelector("#cardContainer");

  setTimeout(() => {
    map = L.map(mapContainer).setView([48.8566, 2.3522], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    fetchParis2024Sites()
      .then((data) => {
        sites = data;
        updateView(sites, map, cardContainer);
        const sportsList = getSportsList(sites);
        const sportSelect = filterBar.querySelector("select");
        sportSelect.innerHTML = sportsList.map(sport => `<option value="${sport}">${sport}</option>`).join('');
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

  return page;
}
*/
