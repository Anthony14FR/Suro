//Create stack
const stack = {
  current: undefined,
  items: [],
  push(value) {
    this.current = value;
    this.items.push(value)
  },
  pop(){
    this.items.pop();
    this.current = this.items[this.items.length -1];
  }
}

export default function generateStructure(structure, parent) {
  if (!structure || !structure.tag) {
    throw new Error(`Invalid structure: ${JSON.stringify(structure)}`);
  }

  let elem;
  let instance;

  if (typeof structure.tag === "string") {
    elem = document.createElement(structure.tag);
  } else if (typeof structure.tag === "function") {
    instance = new structure.tag(structure.props);
    setTimeout(() => instance.componentDidMount(), 0);
    if (stack.current) stack.current.childComponents.push(instance);
    stack.push(instance);
    instance.element = generateStructure(instance.render());
    stack.pop();
    return instance.element;
  } else {
    throw new Error(`Invalid tag type: ${typeof structure.tag}`);
  }

  if (structure.props) {
    for (const propName in structure.props) {
      if (propName === "innerHTML") {
        elem.innerHTML = structure.props[propName];
      } else if (/^on[A-Z]/.test(propName)) {
        elem.addEventListener(
          propName.slice(2).toLowerCase(),
          structure.props[propName]
        );
      } else if (/^data[A-Z]/.test(propName)) {
        elem.dataset[propName.slice(4).toLowerCase()] =
          structure.props[propName];
      } else {
        elem.setAttribute(propName, structure.props[propName]);
      }
    }
  }

  if (structure.children) {
    for (const child of structure.children) {
      let subChild;
      if (typeof child === "function") {
        subChild = generateStructure(child());
      } else if (typeof child === "string") {
        subChild = document.createTextNode(child);
      } else if (typeof child === "object") {
        if (typeof child.tag === "function") {
          subChild = generateStructure(child);
        } else {
          subChild = generateStructure(child);
        }
      } else {
        throw new Error("Invalid child type");
      }
      elem.appendChild(subChild);
    }
  }

  return elem;
}