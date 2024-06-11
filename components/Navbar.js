import LanguageSelector from "../components/LanguageSelector.js";
import { HistoryLink as Link } from "../components/HistoryRouter.js";
import { t } from "../lib/i18n.js"; 

export default function Navbar() {
  const nav = document.createElement("div");
  nav.className = "navbar bg-base-100 mt-5 2xl:container mx-auto px-0 2xl:px-44";

  const flex1 = document.createElement("div");
  flex1.className = "flex-1";

  const logoLink = document.createElement("a");
  logoLink.href = "/";
  const logoImg = document.createElement("img");
  logoImg.src = "/src/assets/images/logo.png";
  logoImg.alt = "Logo";
  logoImg.className = "w-full h-full";
  logoLink.appendChild(logoImg);
  flex1.appendChild(logoLink);

  const flexNone = document.createElement("div");
  flexNone.className = "flex-none space-x-5";

  const menu = document.createElement("ul");
  menu.className = "menu menu-horizontal px-1 space-x-5 hidden md:flex";

  const linkItemHome = document.createElement("li");
  const linkToHome = Link("/", t("home"));
  linkToHome.className = "text-base-content";
  linkItemHome.appendChild(linkToHome);

  const linkItemDiscover = document.createElement("li");
  const linkToDiscover = Link("/discover", t("discover"));
  linkToDiscover.className = "text-base-content";
  linkItemDiscover.appendChild(linkToDiscover);

  const linkItemMap = document.createElement("li");
  const linkToMap = Link("/map", t("map"));
  linkToMap.className = "text-base-content";
  linkItemMap.appendChild(linkToMap);

  menu.appendChild(linkItemHome);
  menu.appendChild(linkItemDiscover);
  menu.appendChild(linkItemMap);

  const mobileMenu = document.createElement("ul");
  mobileMenu.className = "menu menu-vertical px-1 space-y-2 md:hidden hidden absolute bg-base-100 shadow-lg rounded-md mt-48 right-5 z-40";

  const mobileLinkItemHome = document.createElement("li");
  const mobileLinkToHome = Link("/", t("home"));
  mobileLinkToHome.className = "text-base-content";
  mobileLinkItemHome.appendChild(mobileLinkToHome);

  const mobileLinkItemDiscover = document.createElement("li");
  const mobileLinkToDiscover = Link("/discover", t("discover"));
  mobileLinkToDiscover.className = "text-base-content";
  mobileLinkItemDiscover.appendChild(mobileLinkToDiscover);

  const mobileLinkItemMap = document.createElement("li");
  const mobileLinkToMap = Link("/map", t("map"));
  mobileLinkToMap.className = "text-base-content";
  mobileLinkItemMap.appendChild(mobileLinkToMap);

  mobileMenu.appendChild(mobileLinkItemHome);
  mobileMenu.appendChild(mobileLinkItemDiscover);
  mobileMenu.appendChild(mobileLinkItemMap);

  const menuButton = document.createElement("button");
  menuButton.className = "btn md:hidden";
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const themeController = document.createElement("input");
  themeController.type = "checkbox";
  themeController.value = "dark";
  themeController.className = "toggle theme-controller";

  themeController.addEventListener("click", function () {
    const html = document.querySelector("html");
    if (html.getAttribute("data-theme") === "night") {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-theme", "night");
      html.classList.add("dark");
      localStorage.setItem("theme", "night");
    }
  });

  const html = document.querySelector("html");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "night") {
    themeController.checked = true;
    html.setAttribute("data-theme", "night");
    html.classList.add("dark");
  } else {
    html.setAttribute("data-theme", "light");
    html.classList.remove("dark");
  }

  flexNone.appendChild(menu);
  flexNone.appendChild(themeController);
  flexNone.appendChild(menuButton);
  nav.appendChild(flex1);
  nav.appendChild(flexNone);
  nav.appendChild(mobileMenu);
  const langSelector = LanguageSelector();
  nav.appendChild(langSelector);

  return nav;
}
