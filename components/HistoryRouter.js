import generatePage from "../lib/generatePage.js";

export function HistoryLink(path, title) {
  const link = document.createElement("a");
  link.href = path;
  link.appendChild(document.createTextNode(title));
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.history.pushState({}, undefined, path);
    window.dispatchEvent(new Event("pushstate"));
  });
  return link;
}

export default function HistoryRouter(routes, rootElement) {
  function manageRoute() {
    let path = window.location.pathname;
    if (!routes[path]) path = "*";

    const page = routes[path];
    const pageGenerator = typeof page === "function" ? page : () => generatePage(page);
    const newPageElement = pageGenerator();
    
    if (!(newPageElement instanceof Node)) {
      console.error("The page generator did not return a DOM Node:", newPageElement);
      throw new TypeError("pageGenerator must return a DOM Node");
    }

    const existingChild = rootElement.childNodes[0];
    if (existingChild) {
      rootElement.replaceChild(newPageElement, existingChild);
    } else {
      rootElement.appendChild(newPageElement);
    }
  }

  window.addEventListener("popstate", manageRoute);
  window.addEventListener("pushstate", manageRoute);
  manageRoute();
}
