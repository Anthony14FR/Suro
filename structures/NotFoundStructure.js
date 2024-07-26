import { BrowserLink } from "../components/BrowserRouter.js";
import FooterStructure from "./FooterStructure.js";

export default function NotFoundStructure() {
    return {
        tag: "h1",
        props: {
            class: "flex mt-10 p-10 text-2xl text-center",
        },
        children: [
            BrowserLink({ title: "Home", path: "/" }),
            {
                tag: "i",
                children: ["Page not found"]
            },
        FooterStructure()
        ],
    };
}
