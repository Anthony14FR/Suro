import { HistoryLink as Link } from "../components/HistoryRouter.js";
import Navbar from "../components/Navbar.js";

export default function About() {
  const div = document.createElement("div");
  div.appendChild(Navbar());

  const mainContent = document.createElement("div");
  mainContent.className = "p-5";

  const heading = document.createElement("h1");
  heading.className = "text-3xl font-bold";
  heading.textContent = "About Us";
  mainContent.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.className = "mt-4 text-lg";
  paragraph.textContent = "This is the about page where we describe our application.";
  mainContent.appendChild(paragraph);

  const linkToHome = Link("/", "Go to Home Page");
  linkToHome.className = "mt-4 text-blue-500 hover:underline";
  mainContent.appendChild(linkToHome);

  div.appendChild(mainContent);
  return div;
}
