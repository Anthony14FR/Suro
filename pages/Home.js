import { HistoryLink as Link } from "../components/HistoryRouter.js";
import Navbar from "../components/Navbar.js";

export default function Home() {
  const div = document.createElement("div");
  div.appendChild(Navbar());

  const mainContent = document.createElement("div");
  mainContent.className = "container mx-auto p-4";

  const heading = document.createElement("h1");
  heading.className = "text-3xl font-bold";
  heading.textContent = "Welcome to the Home Page";
  mainContent.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.className = "mt-4 text-lg";
  paragraph.textContent = "This is the home page of our simple application.";
  mainContent.appendChild(paragraph);

  const linkToAbout = Link("/About", "Go to About Page");
  linkToAbout.className = "mt-4 text-blue-500 hover:underline";
  mainContent.appendChild(linkToAbout);

  div.appendChild(mainContent);
  return div;
}
