import { getCurrentLang, setLanguage } from '../lib/i18n.js';
import United_States from "../src/assets/images/country_flag/United_States.png";
import France from "../src/assets/images/country_flag/France.png";
import Spain from "../src/assets/images/country_flag/Espagne.png";
import Germany from "../src/assets/images/country_flag/Allemagne.png";
import Japan from "../src/assets/images/country_flag/Japan.png";
import Ireland from "../src/assets/images/country_flag/Ireland.png";
import Saudi_Arabia from "../src/assets/images/country_flag/Saudi_Arabia.webp";

const langOptions = {
  en: { name: "English", flag: United_States },
  fr: { name: "Français", flag: France },
  es: { name: "Español", flag: Spain },
  de: { name: "Deutsch", flag: Germany },
  ja: { name: "日本語", flag: Japan },
  ga: { name: "Gaeilge", flag: Ireland }
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
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 right-0">
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
