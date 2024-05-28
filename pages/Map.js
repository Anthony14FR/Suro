import Navbar from "../components/Navbar.js";

export default function Map() {
  const div = document.createElement("div");
  div.appendChild(Navbar());

  const mainContent = document.createElement("div");
  mainContent.className = "container mx-auto p-4";

  const heading = document.createElement("h1");
  heading.className = "text-3xl font-bold";
  heading.textContent = "Map";
  mainContent.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.className = "mt-4 text-lg";
  paragraph.textContent = "Welcome to the Map page.";
  mainContent.appendChild(paragraph);

  div.appendChild(mainContent);
  return div;
}
