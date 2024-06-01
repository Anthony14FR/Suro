import Navbar from "../components/Navbar.js";
import loadSpots from "../api/loadSpots.js";
import Paris2024 from "../src/assets/images/paris-2024.jpg";
import OlympicImg from "../src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg";
import logo from "../src/assets/images/logo.png";
import Footer from "../components/Footer.js";

export default function Spots() {
  const div = document.createElement("div");
  div.appendChild(Navbar());

  // Banner Section
  const banner = document.createElement("div");
  const bannerContainer = document.createElement("div");
  bannerContainer.className = "2xl:container mx-auto px-0 2xl:px-44 my-10";
  banner.className = "bg-gradient-to-r flex flex-col items-center from-blue-400 to-blue-600 p-2 text-center rounded-md mb-4 text-white";
  const bannerTitle = document.createElement("h1");
  bannerTitle.className = "text-2xl font-bold";
  bannerTitle.textContent = "Discover Event & Spots with ";
  const logoImg = document.createElement("img");
  logoImg.className = "w-[103px] h-[43px]";
  logoImg.src = logo;
  logoImg.alt = "Suro Logo";
  const bannerSubtitle = document.createElement("p");
  bannerSubtitle.className = "text-xs mt-2";
  bannerSubtitle.textContent = "Explore the event details and nearby spots in a beautiful interface";
  banner.appendChild(bannerTitle);
  banner.appendChild(logoImg);
  banner.appendChild(bannerSubtitle);

  bannerContainer.appendChild(banner);
  div.appendChild(bannerContainer);

  const mainContent = document.createElement("div");
  mainContent.className = "flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44";

  const queryParams = new URLSearchParams(window.location.search);
  const codeSite = queryParams.get('codeSite');
  const name = queryParams.get('name');
  const lat = parseFloat(queryParams.get('lat').replace(",", "."));
  const lng = parseFloat(queryParams.get('lng').replace(",", "."));
  const sports = queryParams.get('sports');
  const startDate = queryParams.get('startDate');
  const endDate = queryParams.get('endDate');

  // Main Section: Event Details and Map
  const mainSection = document.createElement("div");
  mainSection.className = "flex flex-col lg:flex-row gap-4";

  const eventDetails = document.createElement("div");
  eventDetails.className = "lg:w-1/3 bg-white dark:bg-base-300 dark:border-2 dark:border-white/30 shadow-lg rounded-md";
  const eventImage = document.createElement("img");
  eventImage.className = "w-full h-24 object-cover rounded-t-sm mb-4";
  eventImage.src = Paris2024;
  eventImage.alt = "Paris 2024";

  const eventContent = document.createElement("div");
  eventContent.className = "p-6 space-y-4 flex flex-col";

  const eventTitle = document.createElement("div");
  eventTitle.className = "text-xl font-bold mb-4";
  eventTitle.innerHTML = `<i class="fas fa-calendar-alt"></i> ${name}`;
  const eventSports = document.createElement("p");
  eventSports.className = "text-md";
  eventSports.innerHTML = `<i class="fas fa-dumbbell"></i> Sports: ${sports}`;
  const eventDates = document.createElement("p");
  eventDates.className = "text-md";
  eventDates.innerHTML = `<i class="fas fa-clock"></i> From: ${startDate} To: ${endDate}`;

  const viewMyPositionButton = document.createElement("button");
  viewMyPositionButton.className = "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center";
  viewMyPositionButton.textContent = "Voir ma position";
  viewMyPositionButton.addEventListener("click", () => {
    if (userMarker) {
      map.setView(userMarker.getLatLng(), 15);
    } else {
      alert("User position not available.");
    }
  });

  eventDetails.appendChild(eventImage);
  eventContent.appendChild(eventTitle);
  eventContent.appendChild(eventSports);
  eventContent.appendChild(eventDates);
  eventContent.appendChild(viewMyPositionButton);
  eventDetails.appendChild(eventContent);

  const mapContainer = document.createElement("div");
  mapContainer.className = "lg:w-2/3 h-96 w-full border-4 border-gray-300 rounded-md";
  mapContainer.id = "map";

  mainSection.appendChild(eventDetails);
  mainSection.appendChild(mapContainer);

  // Spots List Section
  const spotsListSection = document.createElement("div");
  spotsListSection.className = "overflow-x-auto py-4";
  const spotsList = document.createElement("div");
  spotsList.className = "flex gap-4";

  spotsListSection.appendChild(spotsList);

  mainContent.appendChild(mainSection);
  mainContent.appendChild(spotsListSection);
  div.appendChild(mainContent);

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
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
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

        const spotCard = document.createElement("div");
        spotCard.className = "spot-card min-w-[350px] bg-white dark:bg-base-300 dark:border-2 dark:border-white/20 shadow-md rounded-md flex flex-col gap-2";

        const spotImg = document.createElement("img");
        spotImg.className = "w-full h-5 object-cover rounded-t-md";
        spotImg.src = OlympicImg;

        const spotContent = document.createElement("div");
        spotContent.className = "p-4 h-full flex justify-between flex-col";

        const spotTitle = document.createElement("h4");
        spotTitle.className = "text-xl font-semibold mb-2";
        spotTitle.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${spot.nom}`;
        const spotAddress = document.createElement("p");
        spotAddress.className = "text-sm mb-1";
        spotAddress.innerHTML = `<i class="fas fa-map-pin"></i> Address: ${spot.adresse}`;
        const spotDescription = document.createElement("p");
        spotDescription.className = "text-sm mb-2";
        spotDescription.innerHTML = `<i class="fas fa-info-circle"></i> Description: ${spot.description}`;

        const btnContainer = document.createElement("div");
        btnContainer.className = "flex justify-end mt-2";

        const viewOnMapButton = document.createElement("button");
        viewOnMapButton.className = "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center mt-3";
        viewOnMapButton.innerHTML = '<i class="fas fa-map"></i> View on Map';
        viewOnMapButton.addEventListener("click", () => {
          map.setView([spotLat, spotLng], 15);
        });

        const directionsButton = document.createElement("button");
        directionsButton.className = "btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3";
        directionsButton.innerHTML = '<i class="fas fa-directions"></i> Itinerary';
        directionsButton.addEventListener("click", () => {
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
        });

        spotCard.appendChild(spotImg);
        spotContent.appendChild(spotTitle);
        spotContent.appendChild(spotAddress);
        spotContent.appendChild(spotDescription);
        btnContainer.appendChild(viewOnMapButton);
        btnContainer.appendChild(directionsButton);
        spotContent.appendChild(btnContainer);
        spotCard.appendChild(spotContent);
        spotsList.appendChild(spotCard);

      });
    }).catch(error => {
      console.error('Error loading spots:', error);
    });

    // Ajouter la position de l'utilisateur
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

  div.appendChild(Footer());

  return div;
}
