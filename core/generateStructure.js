export default function generateStructure(structure) {
  if (typeof structure.tag === 'function') {
    const instance = new structure.tag(structure.props);
    const element = generateStructure(instance.render());
    instance.element = element;
    if (structure.ref) {
      structure.ref(instance);
    }
    setTimeout(() => instance.componentDidMount(), 0);
    return element;
  }

  if (!structure || !structure.tag) {
    throw new Error(`Invalid structure: ${JSON.stringify(structure)}`);
  }

  if (structure.ref) {
    if (typeof structure.tag === 'function') {
      structure.ref(instance);
    } else {
      structure.ref(elem);
    }
  }

  let elem;

  if (typeof structure.tag === 'string') {
    elem = document.createElement(structure.tag);
  } else if (typeof structure.tag === 'function') {
    const instance = new structure.tag(structure.props);
    return generateStructure(instance.render());
  } else {
    throw new Error(`Invalid tag type: ${typeof structure.tag}`);
  }

  if (structure.props) {
    for (const propName in structure.props) {
      if (/^on[A-Z]/.test(propName)) {
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
        subChild = generateStructure(child);
      } else {
        throw new Error("Invalid child type");
      }
      elem.appendChild(subChild);
    }
  }

  return elem;
}
