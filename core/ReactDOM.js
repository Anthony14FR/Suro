import generateStructure from "./generateStructure.js";
import dispatcher from "./Dispatcher.js";

class ReactDOM {
  render(component, container) {
    dispatcher.addEventListener(this.updateComponent.bind(this));
    const element = generateStructure(component);
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

    if(component.componentDidUpdate){
      setTimeout(() => component.componentDidUpdate(),0);
    }
    component.childComponents.forEach(child => {
      if(child.componentDidUpdate){
        setTimeout(() => child.componentDidUpdate(),0);
      }
    });
  }
}

export default new ReactDOM();
