import Component from "../core/Component.js";
import NotFoundStructure from "../structures/NotFoundStructure.js";
import FooterClass from "./FooterClass.js";
import NavbarClass from "./NavbarClass.js";
import { BrowserLink } from "../components/BrowserRouter.js";
class NotFoundClass extends Component {
  constructor() {
    super();
    this.navbar = new NavbarClass();
    this.footer = new FooterClass();
  }

  render() {
    return {
      tag: "div",
      children: [
        this.navbar.render(),
        {
          tag: "div",
          props: {
            class: "2xl:container mx-auto px-0 2xl:px-44",
          },
          children: [
            {
              tag: "div",
              props: {
                class:
                  "flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44",
              },
              children: [
                {
                  tag: "div",
                  props: {
                    class:
                      "flex flex-col items-center justify-center h-[700px]",
                  },
                  children: [
                    {
                      tag: "h1",
                      props: {
                        class: "text-4xl font-bold text-center",
                      },
                      children: ["404 Not Found"],
                    },
                    {
                      tag: "p",
                      props: {
                        class: "text-center",
                      },
                      children: [
                        "The page you are looking for does not exist.",
                      ],
                    },
                    {
                      tag: "div",
                      props: {
                        class: "flex justify-center text-blue-500",
                      },
                      children: [
                        BrowserLink({ title: "Go back to home", path: "/" }),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        this.footer.render(),
      ],
    };
  }
}

export default NotFoundClass;
