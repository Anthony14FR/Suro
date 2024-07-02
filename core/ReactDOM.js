import generateStructure from "./generateStructure.js";

class ReactDOM {
  render(component, container) {
    const structure = component.render();
    const element = generateStructure(structure);
    container.appendChild(element);
    component.element = element;
  }

  updateComponent(component) {
    if (component.hasChanged(component.prevProps, component.props, component.prevState, component.state)) {
      const oldElement = component.element;
      const newStructure = component.render();
      const newElement = generateStructure(newStructure);
      oldElement.replaceWith(newElement);
      component.element = newElement;
    }
  }
}

export default ReactDOM;
