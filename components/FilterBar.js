export default function FilterBar(onSortChange, onFilterChange, onSportChange, onShowAll) {
  const filterBar = document.createElement("div");
  filterBar.className = "flex flex-col xl:flex-row gap-4 mb-4";

  const toggleButton = document.createElement("button");
  toggleButton.className = "btn border-1 border-gray-300 w-36 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black xl:hidden";
  toggleButton.innerHTML = '<i class="fas fa-filter"></i> Show Filters';

  const filtersContainer = document.createElement("div");
  filtersContainer.className = "hidden xl:flex flex-col xl:flex-row gap-4 mt-4 xl:mt-0";

  // Création des boutons de filtre
  const sortRecentBtn = createFilterButton("Sort by Recent", "fas fa-sort-amount-down", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const sortOldestBtn = createFilterButton("Sort by Oldest", "fas fa-sort-amount-up", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const paraGamesBtn = createFilterButton("Paralympic Games", "fas fa-wheelchair", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const olympicGamesBtn = createFilterButton("Olympic Games", "fas fa-trophy", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const showAllBtn = createFilterButton("Show All", "fas fa-eye", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");

  // Création du sélecteur de sport
  const sportSelect = document.createElement("select");
  sportSelect.className = "select select-bordered xl:w-full";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a sport";
  sportSelect.appendChild(defaultOption);

  // Gestion des clics des boutons de filtre
  sortRecentBtn.addEventListener("click", () => {
    console.log("Sort by Recent clicked");
    onSortChange("recent");
    updateActiveButton(sortRecentBtn);
  });

  sortOldestBtn.addEventListener("click", () => {
    console.log("Sort by Oldest clicked");
    onSortChange("oldest");
    updateActiveButton(sortOldestBtn);
  });

  paraGamesBtn.addEventListener("click", () => {
    console.log("Paralympic Games clicked");
    onFilterChange("paralympic");
    updateActiveButton(paraGamesBtn);
  });

  olympicGamesBtn.addEventListener("click", () => {
    console.log("Olympic Games clicked");
    onFilterChange("olympic");
    updateActiveButton(olympicGamesBtn);
  });

  showAllBtn.addEventListener("click", () => {
    console.log("Show All clicked");
    onShowAll();
    updateActiveButton(showAllBtn);
  });

  sportSelect.addEventListener("change", (event) => {
    console.log("Sport changed to:", event.target.value);
    onSportChange(event.target.value);
    updateActiveButton(null); // Aucune bordure active pour le sélecteur
  });

  // Ajouter les éléments au filtersContainer
  filtersContainer.appendChild(sortRecentBtn);
  filtersContainer.appendChild(sortOldestBtn);
  filtersContainer.appendChild(paraGamesBtn);
  filtersContainer.appendChild(olympicGamesBtn);
  filtersContainer.appendChild(showAllBtn);
  filtersContainer.appendChild(sportSelect);

  // Toggle display of filters on small screens
  toggleButton.addEventListener("click", () => {
    if (filtersContainer.classList.contains("hidden")) {
      filtersContainer.classList.remove("hidden");
      filtersContainer.classList.add("flex");
    } else {
      filtersContainer.classList.remove("flex");
      filtersContainer.classList.add("hidden");
    }
  });

  // Ajouter le bouton et le conteneur de filtres au filterBar
  filterBar.appendChild(toggleButton);
  filterBar.appendChild(filtersContainer);

  // Fonction pour créer un bouton de filtre
  function createFilterButton(text, iconClass, className) {
    const button = document.createElement("button");
    button.className = className;
    button.innerHTML = `<i class="${iconClass}"></i> ${text}`;
    return button;
  }

  function updateActiveButton(activeButton) {
    const buttons = [sortRecentBtn, sortOldestBtn, paraGamesBtn, olympicGamesBtn, showAllBtn];
    buttons.forEach(button => {
      if (button === activeButton) {
        button.classList.add("border-2", "bg-black", "text-white", "dark:bg-white", "dark:text-black");
        button.classList.remove("bg-transparent");
      } else {
        button.classList.remove("border-2", "bg-black", "text-white", "dark:bg-white", "dark:text-black");
        button.classList.add("bg-transparent");
      }
    });
  }

  return filterBar;
}
