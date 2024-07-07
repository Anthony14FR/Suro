import generateStructure from "./generateStructure.js";
import dispatcher from "./Dispatcher.js";

class ReactDOM {
  render(component, container) {
    dispatcher.addEventListener(this.updateComponent.bind(this));
    const structure = component.render();
    const element = generateStructure(structure);
    container.appendChild(element);
    component.element = element;
  }

  updateComponent(component) {
    const oldElement = component.element;
    if (!oldElement) {
      console.error("oldElement is undefined, cannot update component");
      return;
    }
    const newStructure = component.render();
    const newElement = generateStructure(newStructure);
    oldElement.replaceWith(newElement);
    component.element = newElement;
  }
}

export default new ReactDOM();
