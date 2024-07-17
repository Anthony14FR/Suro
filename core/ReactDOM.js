import generateStructure from "./generateStructure.js";
import dispatcher from "./Dispatcher.js";

class ReactDOM {
  render(component, container) {
    dispatcher.addEventListener(this.updateComponent.bind(this));
    const structure = component.render();
    const element = generateStructure(structure);
    container.appendChild(element);
    component.componentDidMount();
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
  
    // Préserver les références aux éléments qui ne doivent pas être réinitialisés
    this.preserveElementReferences(oldElement, newElement, component);
  
    oldElement.replaceWith(newElement);
    component.element = newElement;
  }
  
  preserveElementReferences(oldElement, newElement, component) {
    if (typeof component.getPreservedElements === 'function') {
      const preservedElements = component.getPreservedElements();
      preservedElements.forEach(selector => {
        const oldPreservedElement = oldElement.querySelector(selector);
        if (oldPreservedElement) {
          const newPreservedElement = newElement.querySelector(selector);
          if (newPreservedElement) {
            newPreservedElement.replaceWith(oldPreservedElement);
          }
        }
      });
    }
  }
}

export default new ReactDOM();
