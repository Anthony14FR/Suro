import { createElement, getElem, appendChildren } from '/lib/utils/utils.js';

export function showLoader() {
    const overlay = createElement("div", {
        class: "w-screen h-screen fixed overflow-hidden top-0 left-0 bg-base-100 z-999 flex justify-center items-center",
        id: "Loader"
    });

    const loader = createElement("span", {
        class: "loading loading-ring loading-lg text-primary"
    });

    appendChildren(overlay, loader);

    document.body.appendChild(overlay);
}

export function hideLoader() {
  const loader = getElem("#Loader");
  loader.remove();
}