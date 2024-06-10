import { t } from '../lib/i18n.js';

const MapStructure = {
  type: "div",
  children: [
    { type: "Navbar" },
    {
      type: "div",
      attributes: {
        class: "p-4 xl:h-[700px] h-[1260px] flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44"
      },
      children: [
        { type: "div", attributes: { id: "filterBarContainer" } },
        {
          type: "div",
          attributes: { class: "flex gap-4 h-full xl:flex-row flex-col xl:flex-1 flex-1" },
          children: [
            { type: "div", attributes: { class: "w-full xl:overflow-y-scroll h-[700px] xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden xl:h-full pr-4 xl:w-3/5 flex xl:flex-col space-x-5 xl:space-x-0", id: "cardContainer" } },
            { type: "div", attributes: { class: "h-full w-full border-4 border-gray-300 rounded-md", id: "map" } }
          ]
        }
      ]
    },
    { type: "Footer" }
  ]
};

export default MapStructure;
