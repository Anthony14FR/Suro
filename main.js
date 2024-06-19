import { loadTranslations } from "./lib/i18n.js";
import { initializeScraping, destroyScraping } from "/components/Scraping.js";
import routes from "./routes.js";
import BrowserRouter from "./components/BrowserRouter.js";
import {showLoader, hideLoader} from "./components/Loader.js";


const root = document.getElementById("root");
root.className = "mx-auto xl:px-28 px-4";


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

  BrowserRouter(document.getElementById("root"), routes);
  hideLoader();
});

export function getLanguage() {
  return localStorage.getItem("language") || "en";
}

function generatePageWithLoader(structure) {
  showLoader();
  const page = generatePage(structure);
  hideLoader();
  return page;
}
