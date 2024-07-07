import ReactDOM from "../core/ReactDOM.js";

export default function BrowserRouter(rootElement, routes) {
  function managePath() {
    const path = window.location.pathname;
    const PageComponent = routes[path] ?? routes["*"];
    if (typeof PageComponent === 'function') {
      return new PageComponent();
    } else {
      return PageComponent;
    }
  }

  function renderCurrentPath() {
    const newComponent = managePath();
    if (newComponent && typeof newComponent.render === 'function') {
      ReactDOM.render(newComponent, rootElement);
      if (typeof newComponent.componentDidMount === 'function') {
        newComponent.componentDidMount();
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
