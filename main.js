import { loadTranslations } from "./lib/i18n.js";
import { initializeScraping, destroyScraping } from "/components/Scraping.js";
import routes from "./routes.js";
import BrowserRouter from "./components/BrowserRouter.js";

const root = document.getElementById("root");
root.className = "mx-auto xl:px-28 px-4";


document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations("en");
  await loadTranslations("fr");
  await loadTranslations("es");
  await loadTranslations("de");
  await loadTranslations("ja");
  await loadTranslations("ga");

  window.addEventListener('popstate', destroyScraping);
  window.addEventListener('pushstate', destroyScraping);

  BrowserRouter(document.getElementById("root"), routes);
});

export function getLanguage() {
  return localStorage.getItem("language") || "en";
}