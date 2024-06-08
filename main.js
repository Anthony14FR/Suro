import HistoryRouter from "./components/HistoryRouter.js";
import HomeStructure from "./lib/HomeStructure.js";
import generatePage from "./lib/generatePage.js";
import About from "./pages/About.js";
import Discover from "./pages/Discover.js";
import Spots from "./pages/Spots.js";
import Map from "./pages/Map.js";
import Page404 from "./pages/Page404.js";
import { loadTranslations } from "./lib/i18n.js";

const root = document.getElementById("root");
root.className = "mx-auto xl:px-28 px-4";

const routes = {
  "/": () => generatePage(HomeStructure(getLanguage())),
  "/about": About,
  "/discover": Discover,
  "/spots": Spots,
  "/map": Map,
  "*": Page404,
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations("en");
  await loadTranslations("fr");

  const languageSwitcher = createLanguageSwitcher();
  document.body.prepend(languageSwitcher);

  HistoryRouter(routes, root);
});

function getLanguage() {
  return localStorage.getItem("language") || "en";
}

function setLanguage(language) {
  localStorage.setItem("language", language);
  location.reload();
}

function createLanguageSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.innerHTML = `
    <button onclick="setLanguage('en')">English</button>
    <button onclick="setLanguage('fr')">Français</button>
  `;
  return switcher;
}

window.setLanguage = setLanguage;
