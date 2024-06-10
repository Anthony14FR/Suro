import { HistoryLink as Link } from "../components/HistoryRouter.js";
import { t } from "../lib/i18n.js"; // Import the translation function

export default function Footer() {
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  footerContainer.className = "2xl:container mx-auto px-0 2xl:px-44 xl:mt-28 mt-0";
  footer.className = "footer footer-center p-5 mt-24 bg-blue-primary text-white rounded";

  const nav = document.createElement("nav");
  nav.className = "grid grid-flow-col gap-4";

  const language = localStorage.getItem("language") || "en"; // Get the current language

  const links = [
    { key: "home", href: "/" },
    { key: "map", href: "/map" },
    { key: "discover", href: "/discover" },
  ];

  links.forEach((link) => {
    const a = Link(link.href, t(link.key, language)); // Use translation function for link text
    a.className = "link link-hover";
    nav.appendChild(a);
  });

  const aside = document.createElement("aside");
  const p = document.createElement("p");
  p.textContent = t("footer_copyright", language);
  aside.appendChild(p);

  footer.appendChild(nav);
  footer.appendChild(aside);

  footerContainer.appendChild(footer);

  return footerContainer;
}
