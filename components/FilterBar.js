export default function FilterBar(onSortChange, onFilterChange, onSportChange, onDateFilterChange, onShowAll) {
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

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.className = "input input-bordered p-2 border border-gray-300 rounded-md";
  
  // Gestion des clics des boutons de filtre
  sortRecentBtn.addEventListener("click", () => {
    onSortChange("recent");
    updateActiveButton(sortRecentBtn);
  });

  sortOldestBtn.addEventListener("click", () => {
    onSortChange("oldest");
    updateActiveButton(sortOldestBtn);
  });

  paraGamesBtn.addEventListener("click", () => {
    onFilterChange("paralympic");
    updateActiveButton(paraGamesBtn);
  });

  olympicGamesBtn.addEventListener("click", () => {
    onFilterChange("olympic");
    updateActiveButton(olympicGamesBtn);
  });

  showAllBtn.addEventListener("click", () => {
    onShowAll();
    updateActiveButton(showAllBtn);
  });

  sportSelect.addEventListener("change", (event) => {
    onSportChange(event.target.value);
    updateActiveButton(null);
  });

  // Ajouter les éléments au filtersContainer
  dateInput.addEventListener("change", (event) => {
    onDateFilterChange(event.target.value);
    updateActiveButton(null); 
  });

  filtersContainer.appendChild(sortRecentBtn);
  filtersContainer.appendChild(sortOldestBtn);
  filtersContainer.appendChild(paraGamesBtn);
  filtersContainer.appendChild(olympicGamesBtn);
  filtersContainer.appendChild(showAllBtn);
  filtersContainer.appendChild(sportSelect);
  filtersContainer.appendChild(dateInput);

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
