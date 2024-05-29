import Navbar from "../components/Navbar.js";
import loadSpots from "../api/loadSpots.js";

export default function Spots() {
  const div = document.createElement("div");
  div.appendChild(Navbar());

  const mainContent = document.createElement("div");
  mainContent.className = "container mx-auto p-4 flex flex-col gap-4";

  const queryParams = new URLSearchParams(window.location.search);
  const codeSite = queryParams.get('codeSite');
  const name = queryParams.get('name');
  const lat = parseFloat(queryParams.get('lat').replace(",", "."));
  const lng = parseFloat(queryParams.get('lng').replace(",", "."));
  const sports = queryParams.get('sports');
  const startDate = queryParams.get('startDate');
  const endDate = queryParams.get('endDate');

  const eventDetails = document.createElement("div");
  eventDetails.className = "event-details mb-4";
  const eventTitle = document.createElement("h2");
  eventTitle.textContent = name;
  const eventSports = document.createElement("p");
  eventSports.textContent = `Sports: ${sports}`;
  const eventDates = document.createElement("p");
  eventDates.textContent = `From: ${startDate} To: ${endDate}`;
  eventDetails.appendChild(eventTitle);
  eventDetails.appendChild(eventSports);
  eventDetails.appendChild(eventDates);

  const mapContainer = document.createElement("div");
  mapContainer.className = "h-full w-full border-4 border-gray-300 rounded-md mb-4";
  mapContainer.id = "map";
  mapContainer.style.height = "500px";

  const spotsList = document.createElement("div");
  spotsList.className = "spots-list";

  mainContent.appendChild(eventDetails);
  mainContent.appendChild(mapContainer);
  mainContent.appendChild(spotsList);
  div.appendChild(mainContent);

  setTimeout(() => {
    const map = L.map(mapContainer.id).setView([lat, lng], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Add the event marker with the default icon
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<b>${name}</b>`);

    // Create a custom icon for the spot markers
    const spotIcon = L.divIcon({
      className: 'custom-div-icon',
      html: '<div style="background-color:green;width:10px;height:10px;border-radius:50%;"></div>',
      iconSize: [10, 10],
      iconAnchor: [5, 5],
      popupAnchor: [0, -5],
    });

    loadSpots().then(spotsData => {
      const spots = spotsData[codeSite] || [];
      spots.forEach(spot => {
        const spotLat = parseFloat(spot.latitude.replace(",", "."));
        const spotLng = parseFloat(spot.longitude.replace(",", "."));
        L.marker([spotLat, spotLng], { icon: spotIcon }).addTo(map)
          .bindPopup(`<b>${spot.nom}</b><br>${spot.description}`);
        
        const spotDetails = document.createElement("div");
        spotDetails.className = "spot-details mt-4";
        const spotTitle = document.createElement("h3");
        spotTitle.className = "text-lg font-semibold";
        spotTitle.textContent = spot.nom;
        const spotAddress = document.createElement("p");
        spotAddress.textContent = `Address: ${spot.adresse}`;
        const spotDescription = document.createElement("p");
        spotDescription.textContent = `Description: ${spot.description}`;
        
        const viewOnMapButton = document.createElement("button");
        viewOnMapButton.className = "btn btn-primary mt-2";
        viewOnMapButton.textContent = "View on Map";
        viewOnMapButton.addEventListener("click", () => {
          map.setView([spotLat, spotLng], 15);
        });

        const directionsButton = document.createElement("button");
        directionsButton.className = "btn btn-secondary mt-2 ml-2";
        directionsButton.textContent = "Itinéraire";
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

        spotDetails.appendChild(spotTitle);
        spotDetails.appendChild(spotAddress);
        spotDetails.appendChild(spotDescription);
        spotDetails.appendChild(viewOnMapButton);
        spotDetails.appendChild(directionsButton);
        spotsList.appendChild(spotDetails);
      });
    }).catch(error => {
      console.error('Error loading spots:', error);
    });
  }, 0);

  return div;
}
