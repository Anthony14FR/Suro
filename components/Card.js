export default function Card(name, sports, startDate, endDate, lat, lng, map) {
  const card = document.createElement("div");
  card.className = "card card-side bg-base-100 shadow-xl mb-4";

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"; // Utiliser une image par défaut
  img.alt = "Event";
  figure.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.textContent = name;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = `Sports: ${sports}\nFrom: ${startDate}\nTo: ${endDate}`;

  const cardActions = document.createElement("div");
  cardActions.className = "card-actions justify-end";

  const viewButton = document.createElement("button");
  viewButton.className = "btn btn-primary";
  viewButton.textContent = "View on Map";
  viewButton.addEventListener("click", () => {
    map.setView([lat, lng], 15);
  });

  const detailsButton = document.createElement("button");
  detailsButton.className = "btn btn-secondary";
  detailsButton.textContent = "View Details";

  cardActions.appendChild(viewButton);
  cardActions.appendChild(detailsButton);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardActions);

  card.appendChild(figure);
  card.appendChild(cardBody);

  return card;
}
