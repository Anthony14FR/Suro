import { HistoryLink as Link } from "../components/HistoryRouter.js";
import Navbar from "../components/Navbar.js";

export default function Home() {
  const div = document.createElement("div");
  div.className = "py-5";
  div.appendChild(Navbar());

  // const mainContent = document.createElement("div");
  // mainContent.className = "p-5";

  // const heading = document.createElement("h1");
  // heading.className = "text-3xl font-bold";
  // heading.textContent = "Welcome to the Home Page";
  // mainContent.appendChild(heading);

  // const paragraph = document.createElement("p");
  // paragraph.className = "mt-4 text-lg";
  // paragraph.textContent = "This is the home page of our simple application.";
  // mainContent.appendChild(paragraph);

  // div.appendChild(mainContent);
  return div;
}
