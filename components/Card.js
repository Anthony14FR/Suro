export default function Card(title, description, buttonText, onButtonClick) {
  const card = document.createElement("div");
  card.className = "card w-full h-auto bg-base-100 shadow-xl mb-4";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;

  const cardActions = document.createElement("div");
  cardActions.className = "card-actions justify-end";

  const button = document.createElement("button");
  button.className = "btn btn-primary";
  button.textContent = buttonText;
  if (onButtonClick) {
    button.addEventListener("click", onButtonClick);
  }

  cardActions.appendChild(button);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardActions);
  card.appendChild(cardBody);

  return card;
}
