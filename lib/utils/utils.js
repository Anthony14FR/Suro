// utils.js
export function createElement(type, attributes = {}, ...children) {
  const element = document.createElement(type);
  
  for (const [attr, value] of Object.entries(attributes)) {
    if (attr.startsWith('on') && typeof value === 'function') {
      element.addEventListener(attr.slice(2).toLowerCase(), value);
    } else if (attr.startsWith('data')) {
      element.dataset[attr.slice(4).toLowerCase()] = value;
    } else {
      element.setAttribute(attr, value);
    }
  }
  
  for (const child of children) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  }
  
  return element;
}

export function createButton(text, iconClass, className, onClick) {
  return createElement(
    'button',
    { class: className, onClick },
    createElement('i', { class: iconClass }),
    ` ${text}`
  );
}

export function createSelect(options, attributes = {}) {
  const select = createElement('select', attributes);
  for (const optionText of options) {
    const option = createElement('option', {}, optionText);
    select.appendChild(option);
  }
  return select;
}

export function createInput(attributes = {}) {
  return createElement('input', attributes);
}

export function getElem(selectorOrId, parent = document, method = 'auto') {
  if (!selectorOrId) {
    throw new Error('Selector or ID must be provided');
  }

  if (method === 'getElementById' || (method === 'auto' && typeof selectorOrId === 'string' && !selectorOrId.startsWith('#') && !selectorOrId.startsWith('.'))) {
    return parent.getElementById(selectorOrId);
  } else if (method === 'querySelector' || (method === 'auto' && (selectorOrId.startsWith('#') || selectorOrId.startsWith('.')))) {
    return parent.querySelector(selectorOrId);
  } else if (method === 'querySelectorAll') {
    return parent.querySelectorAll(selectorOrId);
  } else if (method === 'getElementsByClassName') {
    return parent.getElementsByClassName(selectorOrId);
  } else if (method === 'getElementsByTagName') {
    return parent.getElementsByTagName(selectorOrId);
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }
}

export function appendChildren(parent, ...children) {
  children.forEach(child => parent.appendChild(child));
}
