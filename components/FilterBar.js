import { createElement, createButton, createSelect, createInput } from '../lib/utils/utils.js';
export default function FilterBar(handlers) {
  const { onSortChange, onFilterChange, onSportChange, onDateFilterChange, onShowAll } = handlers;

  const toggleButton = createButton('Show Filters', 'fas fa-filter', 'btn border-1 border-gray-300 w-36 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black xl:hidden');

  const sortRecentBtn = createButton('Sort by Recent', 'fas fa-sort-amount-down', 'btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black', () => {
    onSortChange('recent');
    updateActiveButton(sortRecentBtn);
  });

  const sortOldestBtn = createButton('Sort by Oldest', 'fas fa-sort-amount-up', 'btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black', () => {
    onSortChange('oldest');
    updateActiveButton(sortOldestBtn);
  });

  const paraGamesBtn = createButton('Paralympic Games', 'fas fa-wheelchair', 'btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black', () => {
    onFilterChange('paralympic');
    updateActiveButton(paraGamesBtn);
  });

  const olympicGamesBtn = createButton('Olympic Games', 'fas fa-trophy', 'btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black', () => {
    onFilterChange('olympic');
    updateActiveButton(olympicGamesBtn);
  });

  const showAllBtn = createButton('Show All', 'fas fa-eye', 'btn border-1 border-gray-300 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black', () => {
    onShowAll();
    updateActiveButton(showAllBtn);
  });

  const sportSelect = createSelect(['Select a sport'], { class: 'select select-bordered xl:w-full', onChange: (event) => {
    onSportChange(event.target.value);
    updateActiveButton(null);
  }});

  const dateInput = createInput({ type: 'date', class: 'input input-bordered p-2 border border-gray-300 rounded-md', onChange: (event) => {
    onDateFilterChange(event.target.value);
    updateActiveButton(null);
  }});

  const filtersContainer = createElement('div', { class: 'hidden xl:flex flex-col xl:flex-row gap-4 mt-4 xl:mt-0' },
    sortRecentBtn, sortOldestBtn, paraGamesBtn, olympicGamesBtn, showAllBtn, sportSelect, dateInput
  );

  const filterBar = createElement('div', { class: 'flex flex-col xl:flex-row gap-4 mb-4' },
    toggleButton, filtersContainer
  );

  function updateActiveButton(activeButton) {
    const buttons = [sortRecentBtn, sortOldestBtn, paraGamesBtn, olympicGamesBtn, showAllBtn];
    buttons.forEach(button => {
      if (button === activeButton) {
        button.classList.add('border-2', 'bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
        button.classList.remove('bg-transparent');
      } else {
        button.classList.remove('border-2', 'bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
        button.classList.add('bg-transparent');
      }
    });
  }

  toggleButton.addEventListener('click', () => {
    filtersContainer.classList.toggle('hidden');
    filtersContainer.classList.toggle('flex');
  });

  return filterBar;
}
