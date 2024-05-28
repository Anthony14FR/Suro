import { HistoryLink as Link } from "../components/HistoryRouter.js";

export default function Page404() {
  const div = document.createElement("div");
  div.appendChild(Link("/", "Home"));
  div.appendChild(Link("/About", "About"));
  const h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Page 404"));
  div.appendChild(h1);
  return div;
}
