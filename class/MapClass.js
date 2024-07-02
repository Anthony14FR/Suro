import Component from "./Component.js";
import MapStructure from "../structures/MapStructure.js";
import NavbarStructure from "../structures/NavbarStructure.js";
import FooterStructure from "../structures/FooterStructure.js";

class MapClass extends Component {
    constructor() {
        super();
    }

    render(){
        return {
            tag: "div",
            children: [
                NavbarStructure(),
                {tag: "Navbar"},
                {
                    tag: "div",
                    props: {
                        class: "p-4 xl:h-[700px] h-[1260px] flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44"
                    },
                    children: [
                        {
                            tag: "div",
                            props: {id: "filterBarContainer"}
                        },
                        {
                            tag: "div",
                            props: {class: "flex gap-4 h-full xl:flex-row flex-col xl:flex-1 flex-1"},
                            children: [
                                {
                                    tag: "div",
                                    props:
                                        {
                                            class: "w-full xl:overflow-y-scroll h-[700px] xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden xl:h-full pr-4 xl:w-3/5 flex xl:flex-col space-x-5 xl:space-x-0",
                                            id: "cardContainer"
                                        }
                                },
                                {
                                    tag: "div",
                                    props:
                                        {
                                            class: "h-full w-full border-4 border-gray-300 rounded-md",
                                            id: "map"
                                        }
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: {
                        class: "mt-56"
                    },
                    children: [
                        {tag: "Footer"}
                    ]
                },
            FooterStructure(),
            ]
        };
    }

}

export default MapClass;