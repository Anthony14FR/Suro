// SpotsStruct.js
const SpotsStructure = (params) => ({
    type: "div",
    children: [
      { type: "Navbar" },
      {
        type: "div",
        attributes: { class: "2xl:container mx-auto px-0 2xl:px-44 my-10" },
        children: [
          {
            type: "div",
            attributes: { class: "bg-gradient-to-r flex flex-col items-center from-blue-400 to-blue-600 p-2 text-center rounded-md mb-4 text-white" },
            children: [
              { type: "h1", attributes: { class: "text-2xl font-bold" }, children: ["Discover Event & Spots with "] },
              { type: "img", attributes: { class: "w-[103px] h-[43px]", src: "/src/assets/images/logo.png", alt: "Suro Logo" } },
              { type: "p", attributes: { class: "text-xs mt-2" }, children: ["Explore the event details and nearby spots in a beautiful interface"] }
            ]
          }
        ]
      },
      {
        type: "div",
        attributes: { class: "flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44" },
        children: [
          {
            type: "div",
            attributes: { class: "flex flex-col lg:flex-row gap-4" },
            children: [
              {
                type: "div",
                attributes: { class: "lg:w-1/3 bg-white dark:bg-base-300 dark:border-2 dark:border-white/30 shadow-lg rounded-md" },
                children: [
                  { type: "img", attributes: { class: "w-full h-24 object-cover rounded-t-sm mb-4", src: "/src/assets/images/paris-2024.jpg", alt: "Paris 2024" } },
                  {
                    type: "div",
                    attributes: { class: "p-6 space-y-4 flex flex-col" },
                    children: [
                      { type: "div", attributes: { class: "text-xl font-bold mb-4" }, children: [`${params.name}`] },
                      { type: "p", attributes: { class: "text-md" }, children: [`Sports: ${params.sports}`] },
                      { type: "p", attributes: { class: "text-md" }, children: [`From: ${params.startDate} To: ${params.endDate}`] },
                      { type: "button", attributes: { class: "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center", onClick: params.viewMyPositionHandler }, children: ["Voir ma position"] }
                    ]
                  }
                ]
              },
              {
                type: "div",
                attributes: { class: "lg:w-2/3 h-96 w-full border-4 border-gray-300 rounded-md", id: "map" }
              }
            ]
          },
          {
            type: "div",
            attributes: { class: "overflow-x-auto py-4" },
            children: [
              { type: "div", attributes: { class: "flex gap-4", id: "spotsList" } }
            ]
          }
        ]
      },
      { type: "Footer" }
    ]
  });
  
  export default SpotsStructure;
  