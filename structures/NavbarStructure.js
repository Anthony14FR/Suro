import LanguageSelector from "../components/LanguageSelector.js";
import { t } from "../lib/i18n.js";
import {BrowserLink} from "../components/BrowserRouter.js";

export default function NavbarStructure() {
    return {
        tag: "div",
        props: {
            class: "navbar bg-base-100 mt-5 2xl:container mx-auto px-0 2xl:px-44"
        },
        children: [
            {
                tag: "div",
                props: {
                    class: "flex-1"
                },
                children: [
                    {
                        tag: "a",
                        props: {
                            href: "/"
                        },
                        children: [
                            {
                                tag: "img",
                                props: {
                                    src: "/src/assets/images/logo.png",
                                    alt: "Logo",
                                    class: "w-full h-full"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                tag: "div",
                props: {
                    class: "flex-none space-x-5"
                },
                children: [
                    {
                        tag: "ul",
                        props: {
                            class: "menu menu-horizontal px-1 space-x-5 hidden md:flex"
                        },
                        children: [
                            {
                                tag: "li",
                                children: [
                                    BrowserLink({
                                        title: "Home",
                                        path: "/",
                                        props: {class: "text-base-content"}
                                    }),
                                ]
                            },
                            {
                                tag: "li",
                                children: [
                                    BrowserLink({
                                        title: "Discover",
                                        path: "/discover",
                                        props: {class: "text-base-content"}
                                    }),
                                ]
                            },
                            {
                                tag: "li",
                                children: [
                                    BrowserLink({
                                        title: "Map",
                                        path: "/map",
                                        props: {class: "text-base-content"}
                                    }),
                                ]
                            },
                        ]
                    },
                    {
                        tag: "input",
                        props: {
                            type: "checkbox",
                            class: "toggle theme-controller",
                            onClick: {
                                click: function () {
                                    const html = document.querySelector("html");
                                    if (html.getAttribute("data-theme") === "night") {
                                        html.setAttribute("data-theme", "light");
                                        html.classList.remove("dark");
                                        localStorage.setItem("theme", "light");
                                    } else {
                                        html.setAttribute("data-theme", "night");
                                        html.classList.add("dark");
                                        localStorage.setItem("theme", "night");
                                    }
                                }
                            }
                        },
                    },
                    {
                        tag: "button",
                        props: {
                            class: "btn md:hidden",
                            onClick: {
                                click: function () {
                                    const mobileMenu = document.querySelector(".menu-vertical");
                                    mobileMenu.classList.toggle("hidden");
                                }
                            }
                        },
                        children: [
                            {
                                tag: "i",
                                props: {
                                    class: "fas fa-bars"
                                }
                            }
                        ],
                    }
                ]
            },
            {
                tag: "ul",
                props: {
                    class: "menu menu-vertical px-1 space-y-2 md:hidden hidden absolute bg-base-100 shadow-lg rounded-md mt-48 right-5 z-40"
                },
                children: [
                    {
                        tag: "li",
                        children: [
                            BrowserLink({
                                title: "Home",
                                path: "/",
                                props: {class: "text-base-content"}
                            }),
                        ]
                    },
                    {
                        tag: "li",
                        children: [
                            BrowserLink({
                                title: "Discover",
                                path: "/discover",
                                props: {class: "text-base-content"}
                            }),
                        ]
                    },
                    {
                        tag: "li",
                        children: [
                            BrowserLink({
                                title: "Map",
                                path: "/map",
                                props: {class: "text-base-content"}
                            }),
                        ]
                    },
                ]
            },
            //LanguageSelector()
        ]
    };
}
