/**
 * Creates a filter bar component.
 * @param {Object} handlers - The event handlers for the filter bar.
 * @returns {HTMLElement} The filter bar element.
 */
export default function FilterBar(handlers) {
  const { onSortChange, onFilterChange, onSportChange, onDateFilterChange, onShowAll } = handlers;

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

  // Ajouter les événements aux boutons de filtre
  if (onSortChange) {
    sortRecentBtn.addEventListener("click", () => {
      onSortChange("recent");
      updateActiveButton(sortRecentBtn);
    });

    sortOldestBtn.addEventListener("click", () => {
      onSortChange("oldest");
      updateActiveButton(sortOldestBtn);
    });
  }

  if (onFilterChange) {
    paraGamesBtn.addEventListener("click", () => {
      onFilterChange("paralympic");
      updateActiveButton(paraGamesBtn);
    });

    olympicGamesBtn.addEventListener("click", () => {
      onFilterChange("olympic");
      updateActiveButton(olympicGamesBtn);
    });
  }

  if (onShowAll) {
    showAllBtn.addEventListener("click", () => {
      onShowAll();
      updateActiveButton(showAllBtn);
    });
  }

  if (onSportChange) {
    sportSelect.addEventListener("change", (event) => {
      onSportChange(event.target.value);
      updateActiveButton(null);
    });
  }

  if (onDateFilterChange) {
    dateInput.addEventListener("change", (event) => {
      onDateFilterChange(event.target.value);
      updateActiveButton(null);
    });
  }

  filtersContainer.appendChild(sortRecentBtn);
  filtersContainer.appendChild(sortOldestBtn);
  filtersContainer.appendChild(paraGamesBtn);
  filtersContainer.appendChild(olympicGamesBtn);
  filtersContainer.appendChild(showAllBtn);
  filtersContainer.appendChild(sportSelect);
  filtersContainer.appendChild(dateInput);

  filterBar.appendChild(toggleButton);
  filterBar.appendChild(filtersContainer);

  /**
   * Creates a filter button element.
   * @param {string} text - The text content of the button.
   * @param {string} iconClass - The class name for the button icon.
   * @param {string} className - The class name for the button.
   * @returns {HTMLElement} The filter button element.
   */
  function createFilterButton(text, iconClass, className) {
    const button = document.createElement("button");
    button.className = className;
    button.innerHTML = `<i class="${iconClass}"></i> ${text}`;
    return button;
  }

  /**
   * Updates the active button style.
   * @param {HTMLElement} activeButton - The active button element.
   */
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

  return filterBar;
}
