import {t} from "../lib/i18n.js";
import NavbarStructure from "./NavbarStructure.js";
import FooterStructure from "./FooterStructure.js";

export default function DiscoverStructure(){

    return {
        tag: "div",
        children: [
            NavbarStructure(),
            {
                tag: "div",
                props: { class: "container mx-auto p-5" },
                children: [
                    {
                        tag: "h1",
                        props:
                            {
                                class: "text-3xl font-bold text-center"
                            },
                        children: ["Découvrir"],
                    },
                    {
                        tag: "p",
                        props:
                            {
                                class: "text-center text-base-content"
                            },
                        children: ["Découvrez les meilleurs endroits à visiter et les événements à ne pas manquer lors des Jeux Olympiques 2024 à Paris."],
                    },
                    {
                        tag: "div",
                        props:
                            {
                                id: "content",
                                class: "rounded-lg shadow-md mt-5 2xl:container mx-auto px-0 2xl:px-44 py-2"
                            },
                        children: [],
                    },
                    {
                        tag: "div",
                        props:
                            {
                                id: "article-content",
                                class: "container mx-auto my-8 p-4 rounded-lg shadow-md hidden"
                            },
                        children: [],
                    },
                ],
            },
            FooterStructure(),
        ],
    }
}