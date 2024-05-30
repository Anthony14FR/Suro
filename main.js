import HistoryRouter from "./components/HistoryRouter.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Discover from "./pages/Discover.js";
import Spots from "./pages/Spots.js";
import Map from "./pages/Map.js";
import Page404 from "./pages/Page404.js";
import Navbar from "./components/Navbar.js";


const root = document.getElementById("root");
root.className = " mx-auto xl:px-28 px-4";

const routes = {
  "/": Home,
  "/about": About,
  "/discover": Discover,
  "/spots": Spots,
  "/map": Map,
  "*": Page404,
};

HistoryRouter(routes, root);
