import { getCurrentLang, setLanguage } from '../lib/i18n.js';

const langOptions = {
  en: { name: "English", flag: "/src/assets/images/country_flag/United_States.png" },
  fr: { name: "Français", flag: "/src/assets/images/country_flag/France.png" },
  es: { name: "Español", flag: "/src/assets/images/country_flag/Espagne.png" },
  de: { name: "Deutsch", flag: "/src/assets/images/country_flag/Allemagne.png" },
  ja: { name: "日本語", flag: "/src/assets/images/country_flag/Japan.png" },
  ga: { name: "Gaeilge", flag: "/src/assets/images/country_flag/Ireland.png" }
};

function createLanguageSwitcher() {
  const currentLang = getCurrentLang();
  const currentOption = langOptions[currentLang];

  if (!currentOption) {
    console.error(`Language option for ${currentLang} not found.`);
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switcher ml-5";
  switcher.innerHTML = `
    <details class="dropdown">
      <summary class="m-1 btn">
        <img class="w-7 h-5" src="${currentOption.flag}" alt="${currentOption.name} Flag" class="flag-icon" /> ${currentOption.name}
      </summary>
      <ul class="p-2 shadow menu dropdown-content z-[999] bg-base-100 rounded-box w-52 right-0">
        ${Object.entries(langOptions).map(([lang, { name, flag }]) => `
          <li>
            <a class="language-option" data-lang="${lang}">
              <img class="w-7 h-5" src="${flag}" alt="${name} Flag" class="flag-icon" /> ${name}
            </a>
          </li>
        `).join('')}
      </ul>
    </details>
  `;

  const languageOptions = switcher.querySelectorAll(".language-option");
  languageOptions.forEach(option => {
    if (option.getAttribute('data-lang') === currentLang) {
      option.classList.add('selected');
    }
    option.addEventListener("click", (event) => {
      event.preventDefault();
      setLanguage(option.getAttribute('data-lang'));
    });
  });

  return switcher;
}

export default createLanguageSwitcher;
