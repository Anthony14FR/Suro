import {BrowserLink} from "../components/BrowserRouter.js";
import NavbarStructure from "./NavbarStructure.js";
import FooterStructure from "./FooterStructure.js";

export default function AboutStructure() {
    return {

        tag: "div",
        props: {
            class: "flex",
        },
        children: [
            NavbarStructure(),
            {
                tag: "h1",
                children: ["About"]
            },
            {
                tag: "p",
                children: ["About description"]
            },
            BrowserLink({title: "Home", path: "/"}),
            FooterStructure(),
        ],
    };
}