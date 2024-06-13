// SpotsStructure.js
import FooterStructure from "./FooterStructure.js";
import NavbarStructure from "./NavbarStructure.js";

const SpotsStructure = (params) => ({
    tag: "div",
    children: [
        NavbarStructure(),
        {tag: "Navbar"},
        {
            tag: "div",
            props:
                {
                    class: "2xl:container mx-auto px-0 2xl:px-44 my-10"
                },
            children: [
                {
                    tag: "div",
                    props:
                        {
                            class: "bg-gradient-to-r flex flex-col items-center from-blue-400 to-blue-600 p-2 text-center rounded-md mb-4 text-white"
                        },
                    children: [
                        {tag: "h1", props: {class: "text-2xl font-bold"}, children: ["Discover Event & Spots with "]},
                        {
                            tag: "img",
                            props: {class: "w-[103px] h-[43px]", src: "/src/assets/images/logo.png", alt: "Suro Logo"}
                        },
                        {
                            tag: "p",
                            props: {class: "text-xs mt-2"},
                            children: ["Explore the event details and nearby spots in a beautiful interface"]
                        }
                    ]
                }
            ]
        },
        {
            tag: "div",
            props: {class: "flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44"},
            children: [
                {
                    tag: "div",
                    props: {class: "flex flex-col lg:flex-row gap-4"},
                    children: [
                        {
                            tag: "div",
                            props: {class: "lg:w-1/3 bg-white dark:bg-base-300 dark:border-2 dark:border-white/30 shadow-lg rounded-md"},
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        class: "w-full h-24 object-cover rounded-t-sm mb-4",
                                        src: "/src/assets/images/paris-2024.jpg",
                                        alt: "Paris 2024"
                                    }
                                },
                                {
                                    tag: "div",
                                    props: {class: "p-6 space-y-4 flex flex-col"},
                                    children: [
                                        {
                                            tag: "div",
                                            props: {class: "text-xl font-bold mb-4"},
                                            children: [/*`${params.name}`*/]
                                        },
                                        {tag: "p", props: {class: "text-md"}, children: [`Sports:` /*${params.sports}`*/]},
                                        {
                                            tag: "p",
                                            props: {class: "text-md"},
                                            children: [/*`From: ${params.startDate} To: ${params.endDate}`*/]
                                        },
                                        {
                                            tag: "button",
                                            props: {
                                                class: "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center",
                                                /*onClick: params.viewMyPositionHandler*/
                                            },
                                            children: ["Voir ma position"]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            tag: "div",
                            props: {class: "lg:w-2/3 h-96 w-full border-4 border-gray-300 rounded-md", id: "map"}
                        }
                    ]
                },
                {
                    tag: "div",
                    props: {class: "overflow-x-auto py-4"},
                    children: [
                        {tag: "div", props: {class: "flex gap-4", id: "spotsList"}}
                    ]
                }
            ]
        },
        FooterStructure()
    ]
});

export default SpotsStructure;
  