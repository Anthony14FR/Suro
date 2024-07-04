import Component from "./Component.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";
import { BrowserLink } from "../components/BrowserRouter.js";

class AboutClass extends Component {
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
                      children: ["About Us"],
                    },
                    {
                      tag: "p",
                      props: {
                        class: "text-center",
                      },
                      children: [
                        "We are a team of developers who are passionate about creating web applications that are user-friendly and accessible to everyone. Our mission is to make the web a better place for everyone. We believe that everyone should have\
                                                 access to the internet and be able to use it to improve their lives. That's why we create web applications that are easy to use and accessible to everyone. We are constantly working to improve our applications and make them even better",
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

export default AboutClass;
