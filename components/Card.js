export default function Card(title, sports, startDate, endDate, buttonText, onButtonClick, lat, lng) {
  const card = document.createElement("div");
  card.className = "card w-full h-auto bg-base-100 shadow-md border-2 dark:border-white/20 border-grey-300 mb-4";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("div");
  cardTitle.className = "card-title text-lg font-semibold flex items-center";
  const titleIcon = document.createElement("i");
  titleIcon.className = "fas fa-heading fa-lg mr-2";
  cardTitle.appendChild(titleIcon);
  cardTitle.appendChild(document.createTextNode(title));

  const cardSports = document.createElement("div");
  cardSports.className = "flex items-center text-sm";
  const sportsIcon = document.createElement("i");
  sportsIcon.className = "fas fa-futbol mr-2";
  cardSports.appendChild(sportsIcon);
  cardSports.appendChild(document.createTextNode(`Sports: ${sports}`));

  const cardDates = document.createElement("div");
  cardDates.className = "flex items-center text-sm";
  const datesIcon = document.createElement("i");
  datesIcon.className = "fas fa-calendar-alt mr-2";
  cardDates.appendChild(datesIcon);
  cardDates.appendChild(document.createTextNode(`From: ${startDate} To: ${endDate}`));

  const cardActions = document.createElement("div");
  cardActions.className = "card-actions justify-end";

  const viewButton = document.createElement("button");
  viewButton.className = "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center mt-3";
  const viewIcon = document.createElement("i");
  viewIcon.className = "fas fa-map-marker-alt mr-2";
  viewButton.appendChild(viewIcon);
  viewButton.appendChild(document.createTextNode(buttonText));
  if (onButtonClick) {
    viewButton.addEventListener("click", onButtonClick);
  }

  const directionsButton = document.createElement("button");
  directionsButton.className = "btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3";
  const directionsIcon = document.createElement("i");
  directionsIcon.className = "fas fa-directions fa-lg";
  directionsButton.appendChild(directionsIcon);
  directionsButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}`;
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

  cardActions.appendChild(viewButton);
  cardActions.appendChild(directionsButton);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSports);
  cardBody.appendChild(cardDates);
  cardBody.appendChild(cardActions);
  card.appendChild(cardBody);

  return card;
}
