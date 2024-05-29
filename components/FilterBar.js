export default function FilterBar(onSortChange, onFilterChange, onSportChange, onShowAll) {
  const filterBar = document.createElement("div");
  filterBar.className = "flex gap-4 mb-4";

  // Création des boutons de filtre
  const sortRecentBtn = createFilterButton("Sort by Recent", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const sortOldestBtn = createFilterButton("Sort by Oldest", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const paraGamesBtn = createFilterButton("Paralympic Games", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const olympicGamesBtn = createFilterButton("Olympic Games", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");
  const showAllBtn = createFilterButton("Show All", "btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black");

  // Création du sélecteur de sport
  const sportSelect = document.createElement("select");
  sportSelect.className = "select select-bordered";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a sport";
  sportSelect.appendChild(defaultOption);

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
    updateActiveButton(null); // Aucune bordure active pour le sélecteur
  });

  // Ajouter les éléments au filterBar
  filterBar.appendChild(sortRecentBtn);
  filterBar.appendChild(sortOldestBtn);
  filterBar.appendChild(paraGamesBtn);
  filterBar.appendChild(olympicGamesBtn);
  filterBar.appendChild(showAllBtn);
  filterBar.appendChild(sportSelect);

  // Fonction pour créer un bouton de filtre
  function createFilterButton(text, className) {
    const button = document.createElement("button");
    button.className = className;
    button.textContent = text;
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
