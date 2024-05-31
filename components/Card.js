import OlympicImg from "../src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg";

export default function Card(title, sports, startDate, endDate, buttonText, onButtonClick, lat, lng) {
  const card = document.createElement("div");
  card.className = "card xl:w-full xl-h-auto bg-base-100 dark:bg-base-300 shadow-md mb-4 animate__animated animate__fadeIn";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header bg-cover bg-center h-8 rounded-t-xl shadow-md";
  cardHeader.style.backgroundImage = `url(${OlympicImg})`;
  card.appendChild(cardHeader);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body xl:w-full w-[350px] flex justify-between xl:flex-col ";

  const cardTitle = document.createElement("div");
  cardTitle.className = "card-title text-lg font-semibold flex items-center text-green-400 dark:text-white";
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
