import { t } from "/lib/i18n.js";

const Discover = (language, onRender) => ({
  type: "div",
  children: [
    { type: "Navbar" },
    {
      type: "div",
      attributes: { class: "container mx-auto p-5" },
      children: [
        {
          type: "h1",
          attributes: { class: "text-3xl font-bold text-center" },
          children: [t("discover", language)],
        },
        {
          type: "p",
          attributes: { class: "text-center text-base-content" },
          children: [t("discover-description", language)],
        },
        {
          type: "div",
          attributes: { id: "content", class: "rounded-lg shadow-md mt-5 2xl:container mx-auto px-0 2xl:px-44 py-2" },
          children: [],
        },
        {
          type: "div",
          attributes: { id: "article-content", class: "container mx-auto my-8 p-4 rounded-lg shadow-md hidden" },
          children: [],
        },
      ],
    },
    { type: "Footer" },
  ],
  onRender: () => {
    if (typeof onRender === "function") {
      onRender();
    }
  },
});

export default Discover;
