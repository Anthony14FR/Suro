import Component from "./Component";
import { BrowserLink } from "../components/BrowserRouter.js";

class FooterClass extends Component {
    constructor(){
        super();
    }

    render(){
        return {
            tag: "div",
            props: {
                class: "2xl:container mx-auto px-0 2xl:px-44 xl:mt-28 mt-0"
            },
            children: [
                {
                    tag: "footer",
                    props: {
                        class: "footer footer-center p-5 mt-24 bg-blue-primary text-white rounded",
                    },
                    children: [
                        {
                            tag: "nav",
                            props:{
                                class: "grid grid-flow-col gap-4"
                            },
                            children: [
                                BrowserLink({title: "Home", path: "/"}),
                                BrowserLink({title: "About", path: "/about"}),
                                BrowserLink({title: "Discover", path: "/discover"}),
                            ]
                        },
                        {tag: "p", props: {class: "footer_copyright"}, children: ["Copyright 2024. All rights reserved by Suro."]},
                    ],
                },
    
            ],
        };
    }
} export default FooterClass;