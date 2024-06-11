import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

const componentsMap = {
  Navbar,
  Footer,
};

export default function generatePage(structure) {
  if (typeof structure === "string") {
    const div = document.createElement("div");
    div.innerHTML = structure;
    return div.firstElementChild;
  }

  const element = document.createElement(structure.type);
  if (structure.attributes) {
    for (let attrName in structure.attributes) {
      if (/on[A-Z]/.test(attrName)) {
        element.addEventListener(
          attrName.replace("on", "").toLowerCase(),
          structure.attributes[attrName]
        );
      } else if (/data[A-Z]/.test(attrName)) {
        element.dataset[attrName.replace("data", "").toLowerCase()] =
          structure.attributes[attrName];
      } else {
        element.setAttribute(attrName, structure.attributes[attrName]);
      }
    }
  }
  if (structure.children) {
    for (let child of structure.children) {
      let subElement;
      if (typeof child === "string") {
        
        // Vérifie si la chaîne contient des balises HTML
        if (child.includes("<") && child.includes(">")) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = child;
          while (tempDiv.firstChild) {
            element.appendChild(tempDiv.firstChild);
          }
        } else {
          subElement = document.createTextNode(child);
          element.appendChild(subElement);
        }
      } else if (typeof child === "function") {
        subElement = child();
        element.appendChild(subElement);
      } else if (typeof child.type === "string" && componentsMap[child.type]) {
        subElement = componentsMap[child.type]();
        element.appendChild(subElement);
      } else {
        subElement = generatePage(child);
        element.appendChild(subElement);
      }
    }
  }

  return element;
}
