import { getCurrentLang, setLanguage } from '../lib/i18n.js';

function createLanguageSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.innerHTML = `
    <select id="language-select" class="language-select">
      <option value="en" ${getCurrentLang() === 'en' ? 'selected' : ''}>English</option>
      <option value="fr" ${getCurrentLang() === 'fr' ? 'selected' : ''}>Français</option>
    </select>
  `;

  const selectElement = switcher.querySelector("#language-select");
  selectElement.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });

  return switcher;
}

export default createLanguageSwitcher;
