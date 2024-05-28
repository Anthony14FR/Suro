import HistoryRouter from "./components/HistoryRouter.js";
import Page404 from "./pages/Page404.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./pages/Home.js";
import About from "./pages/About.js";

const root = document.getElementById("root");

const routes = {
  "/": Home,
  "/About": About,
  "*": Page404,
};

HistoryRouter(routes, root);
