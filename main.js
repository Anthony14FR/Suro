import HistoryRouter from "./components/HistoryRouter.js";
import HomeStructure from "./lib/HomeStructure.js";
import generatePage from "./lib/utils/generatePage.js";
import About from "./pages/About.js";
import Discover from "./pages/Discover.js";
import Spots from "./pages/Spots.js";
import Map from "./pages/Map.js";
import Page404 from "./pages/Page404.js";
import { loadTranslations } from "./lib/i18n.js";
import { initializeScraping, destroyScraping } from "./components/Scraping.js";
import { showLoader, hideLoader } from "./components/Loader.js";

const root = document.getElementById("root");
root.className = "mx-auto xl:px-28 px-4";

const routes = {
  "/": () => generatePageWithLoader(HomeStructure(getLanguage())),
  "/about": About,
  "/discover": () => generatePageWithLoader(Discover(getLanguage(), initializeScraping)),
  "/spots": Spots,
  "/map": Map,
  "*": Page404,
};

document.addEventListener("DOMContentLoaded", async () => {
  showLoader();
  await loadTranslations("en");
  await loadTranslations("fr");
  await loadTranslations("es");
  await loadTranslations("de");
  await loadTranslations("ja");
  await loadTranslations("ga");

  window.addEventListener("popstate", destroyScraping);
  window.addEventListener("pushstate", destroyScraping);

  HistoryRouter(routes, root);
  hideLoader();
});

function getLanguage() {
  return localStorage.getItem("language") || "en";
}

function generatePageWithLoader(structure) {
  showLoader();
  const page = generatePage(structure);
  hideLoader();
  return page;
}
