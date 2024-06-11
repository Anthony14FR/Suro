import loadSpots from "../api/loadSpots.js";
import generatePage from "../lib/utils/generatePage.js";
import SpotsStructure from "../lib/SpotsStruct.js";
import { createElement, getElem, appendChildren } from '../lib/utils/utils.js';

export default function Spots() {
  const eventData = JSON.parse(localStorage.getItem("eventData"));
  const codeSite = localStorage.getItem("codeSite");
  const { name, sports, startDate, endDate, lat, lng } = eventData;

  const viewMyPositionHandler = () => {
    if (userMarker) {
      map.setView(userMarker.getLatLng(), 15);
    } else {
      alert("User position not available.");
    }
  };

  const page = generatePage(SpotsStructure({ name, sports, startDate, endDate, viewMyPositionHandler }));

  const mapContainer = getElem("#map", page);
  const spotsList = getElem("#spotsList", page);

  let userMarker;
  let map;

  setTimeout(() => {
    map = L.map(mapContainer.id).setView([lat, lng], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const eventMarker = L.marker([lat, lng]).addTo(map);
    eventMarker.bindPopup(`<b>${name}</b>`);

    const spotIcon = L.icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });

    loadSpots().then(spotsData => {
      const spots = spotsData[codeSite] || [];
      spots.forEach(spot => {
        const spotLat = typeof spot.latitude === 'string' ? parseFloat(spot.latitude.replace(",", ".")) : spot.latitude;
        const spotLng = typeof spot.longitude === 'string' ? parseFloat(spot.longitude.replace(",", ".")) : spot.longitude;

        const spotMarker = L.marker([spotLat, spotLng], { icon: spotIcon }).addTo(map);
        spotMarker.bindPopup(`
        <div class="flex flex-col">
          <b>${spot.nom}</b><br>${spot.description}
          <button class="btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${spotLat},${spotLng}', '_blank')"><i class="fas fa-directions"></i> Itinerary</button>
        </div>
        `);

        const spotCard = createElement("div", { class: "spot-card min-w-[350px] bg-white dark:bg-base-300 dark:border-2 dark:border-white/20 shadow-md rounded-md flex flex-col gap-2" });

        const spotImg = createElement("img", { class: "w-full h-5 object-cover rounded-t-md", src: "/src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg" });

        const spotContent = createElement("div", { class: "p-4 h-full flex justify-between flex-col" });

        const spotTitle = createElement("h4", { class: "text-xl font-semibold mb-2" },
          createElement("i", { class: "fas fa-map-marker-alt" }), ` ${spot.nom}`);
        const spotAddress = createElement("p", { class: "text-sm mb-1" },
          createElement("i", { class: "fas fa-map-pin" }), ` Address: ${spot.adresse}`);
        const spotDescription = createElement("p", { class: "text-sm mb-2" },
          createElement("i", { class: "fas fa-info-circle" }), ` Description: ${spot.description}`);

        const btnContainer = createElement("div", { class: "flex justify-end mt-2" });

        const viewOnMapButton = createElement("button", { class: "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center mt-3", onClick: () => map.setView([spotLat, spotLng], 15) },
          createElement("i", { class: "fas fa-map" }), " View on Map");

        const directionsButton = createElement("button", { class: "btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3", onClick: () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${spotLat},${spotLng}`;
                window.open(googleMapsUrl, "_blank");
              },
              (error) => {
                console.error("Error getting user location", error);
              }
            );
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        } }, createElement("i", { class: "fas fa-directions" }), " Itinerary");

        appendChildren(btnContainer, viewOnMapButton, directionsButton);
        appendChildren(spotContent, spotTitle, spotAddress, spotDescription, btnContainer);
        appendChildren(spotCard, spotImg, spotContent);
        spotsList.appendChild(spotCard);
      });
    }).catch(error => {
      console.error('Error loading spots:', error);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const userIcon = L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color:blue;width:15px;height:15px;border-radius:50%;"></div>',
            iconSize: [15, 15],
            iconAnchor: [7, 7],
            popupAnchor: [0, -7],
          });
          userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(map)
            .bindPopup("<b>Your Position</b>");
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, 0);

  return page;
}
