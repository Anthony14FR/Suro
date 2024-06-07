import { HistoryLink as Link } from "../components/HistoryRouter.js"; // Assurez-vous que le chemin est correct

export default function Footer() {
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  footerContainer.className = "2xl:container mx-auto px-0 2xl:px-44 xl:mt-28 mt-0";
  footer.className =
    "footer footer-center p-5 mt-24 bg-blue-primary text-white rounded";

  const nav = document.createElement("nav");
  nav.className = "grid grid-flow-col gap-4";

  const links = [
    { text: "Home", href: "/" },
    { text: "Map", href: "/map" },
    { text: "Discover", href: "/discover" },
  ];

  links.forEach((link) => {
    const a = Link(link.href, link.text);
    a.className = "link link-hover";
    nav.appendChild(a);
  });

  const aside = document.createElement("aside");
  const p = document.createElement("p");
  p.textContent = "Copyright © 2024 - All rights reserved by Suro.";
  aside.appendChild(p);

  footer.appendChild(nav);
  footer.appendChild(aside);

  footerContainer.appendChild(footer);

  return footerContainer;
}
