import Logo from "../src/assets/images/logo.png";
import { HistoryLink as Link } from "../components/HistoryRouter.js";

export default function Navbar() {
  const nav = document.createElement("div");
  nav.className = "navbar bg-base-100";

  const flex1 = document.createElement("div");
  flex1.className = "flex-1";

  const logoLink = document.createElement("a");
  logoLink.href = "/";
  const logoImg = document.createElement("img");
  logoImg.src = Logo;
  logoImg.alt = "Logo";
  logoLink.appendChild(logoImg);
  flex1.appendChild(logoLink);

  const flexNone = document.createElement("div");
  flexNone.className = "flex-none space-x-5";

  const menu = document.createElement("ul");
  menu.className = "menu menu-horizontal px-1 space-x-5";

  const linkItemHome = document.createElement("li");
  const linkToHome = Link("/", "Home");
  linkToHome.className = "text-base-content";
  linkItemHome.appendChild(linkToHome);


  const linkItemDiscover = document.createElement("li");
  const linkToDiscover = Link("/discover", "Discover");
  linkToDiscover.className = "text-base-content";
  linkItemDiscover.appendChild(linkToDiscover);


  const linkItemSpots = document.createElement("li");
  const linkToSpots = Link("/spots", "Spots");
  linkToSpots.className = "text-base-content";
  linkItemSpots.appendChild(linkToSpots);


  const linkItemMap = document.createElement("li");
  const linkToMap = Link("/map", "Map");
  linkToMap.className = "text-base-content";
  linkItemMap.appendChild(linkToMap);

  menu.appendChild(linkItemHome);
  menu.appendChild(linkItemDiscover);
  menu.appendChild(linkItemSpots);
  menu.appendChild(linkItemMap);

  const themeController = document.createElement("input");
  themeController.type = "checkbox";
  themeController.value = "dark";
  themeController.className = "toggle theme-controller";

  themeController.addEventListener("click", function () {
    const html = document.querySelector("html");
    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  });

  const html = document.querySelector("html");
  if (html.getAttribute("data-theme") === "dark") {
    themeController.checked = true;
  }

  flexNone.appendChild(menu);
  flexNone.appendChild(themeController);

  nav.appendChild(flex1);
  nav.appendChild(flexNone);

  return nav;
}
