import HistoryRouter from "./components/HistoryRouter.js";
import HomeStructure from "./lib/HomeStructure.js";
import generatePage from "./lib/generatePage.js";
import About from "./pages/About.js";
import Discover from "./pages/Discover.js";
import Spots from "./pages/Spots.js";
import Map from "./pages/Map.js";
import Page404 from "./pages/Page404.js";

const root = document.getElementById("root");
root.className = "mx-auto xl:px-28 px-4";

const routes = {
  "/": () => generatePage(HomeStructure),
  "/about": About,
  "/discover": Discover,
  "/spots": Spots,
  "/map": Map,
  "*": Page404,
};

document.addEventListener("DOMContentLoaded", () => {
  HistoryRouter(routes, root);
});
