import Component from "../core/Component.js";
import { BrowserLink } from "../components/BrowserRouter.js";
import LanguageSelector from "../components/LanguageSelector.js";

class NavbarClass extends Component {
  constructor() {
    super();
    this.state = {
      theme: localStorage.getItem("theme") || "light"
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange() {
    const newTheme = this.state.theme === "light" ? "night" : "light";
    this.setState({ theme: newTheme }, () => {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "night");
    });
  }

  render() {
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
                      title: "Accueil",
                      path: "/",
                      props: { class: "text-base-content" }
                    }),
                  ]
                },
                {
                  tag: "li",
                  children: [
                    BrowserLink({
                      title: "Découvrir l'actualité",
                      path: "/discover",
                      props: { class: "text-base-content" }
                    }),
                  ]
                },
                {
                  tag: "li",
                  children: [
                    BrowserLink({
                      title: "Carte des evenements",
                      path: "/map",
                      props: { class: "text-base-content" }
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
                onClick: this.handleThemeChange
              }
            },
            {
              tag: "button",
              props: {
                class: "btn md:hidden",
                onClick: function () {
                  const mobileMenu = document.querySelector(".menu-vertical");
                  mobileMenu.classList.toggle("hidden");
                }
              },
              children: [
                {
                  tag: "i",
                  props: {
                    class: "fas fa-bars"
                  }
                }
              ]
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
                  props: { class: "text-base-content" }
                }),
              ]
            },
            {
              tag: "li",
              children: [
                BrowserLink({
                  title: "Discover",
                  path: "/discover",
                  props: { class: "text-base-content" }
                }),
              ]
            },
            {
              tag: "li",
              children: [
                BrowserLink({
                  title: "Map",
                  path: "/map",
                  props: { class: "text-base-content" }
                }),
              ]
            },
          ]
        },
        //LanguageSelector()
      ]
    };
  }
}

export default NavbarClass;
