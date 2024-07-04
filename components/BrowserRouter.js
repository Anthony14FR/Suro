import generateStructure from "../core/generateStructure.js";

export default function BrowserRouter(rootElement, routes) {
  function managePath() {
    const path = window.location.pathname;
    const pageGenerator = routes[path] ?? routes["*"];
    return pageGenerator();
  }

  function renderCurrentPath() {
    const newComponent = managePath();
    if (newComponent && newComponent.render) {
      const newStructure = generateStructure(newComponent.render());
      if (newStructure instanceof Node) {
        if (rootElement.childNodes[0]) {
          rootElement.replaceChild(newStructure, rootElement.childNodes[0]);
        } else {
          rootElement.appendChild(newStructure);
        }
      } else {
        console.error("generateStructure did not return a valid DOM Node.");
      }
    } else {
      console.error("managePath did not return a valid component with render method.");
    }
  }

  window.addEventListener("popstate", renderCurrentPath);
  window.addEventListener("pushstate", renderCurrentPath);

  renderCurrentPath();
}

export function BrowserLink(props) {
  return {
    tag: "a",
    props: {
      href: props.path,
      onClick: (e) => {
        e.preventDefault();
        window.history.pushState({}, null, props.path);
        window.dispatchEvent(new Event("pushstate"));
      },
    },
    children: [props.title],
  };
}
