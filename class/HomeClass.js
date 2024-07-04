import Component from "./Component.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";

class HomeClass extends Component {
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
            class:
              "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44",
            style: `background: url(/src/assets/images/bg.png); background-size: contain; background-position: center; background-repeat: no-repeat;`,
          },
          children: [
            {
              tag: "div",
              props: {
                class: "mt-24 md:p-0 p-5",
              },
              children: [
                {
                  tag: "span",
                  props: {
                    class:
                      "badge p-6 font-bold text-blue-primary dark:border-1 dark:border-blue-200/30 shadow-sm text-xs",
                  },
                  children: [
                    "Explorez la France!",
                    {
                      tag: "i",
                      props: {
                        class: "fa-solid fa-globe ml-2 fa-fade",
                      },
                    },
                  ],
                },
                {
                  tag: "h1",
                  props: {
                    class: "md:text-6xl sm:text-5xl text-4xl font-bold mt-6",
                  },
                  children: [
                    "DECOUVREZ",
                    {
                      tag: "span",
                      props: {
                        class: "text-blue-primary",
                      },
                    },
                    " TOUS LES EVENEMENTS",
                    {
                      tag: "span",
                    },
                    " DES ",
                    {
                      tag: "span",
                      props: {
                        class: "",
                      },
                    },
                    "JEUX OLYMPIQUES",
                  ],
                },
                {
                  tag: "p",
                  props: { class: "text-gray-500 mt-10" },
                  children: [
                    "Plongez-vous dans un monde d'envie de voyager avec nos expériences de voyage organisées. Des paysages à couper le souffle aux joyaux culturels, embarquez pour des aventures inoubliables.",
                  ],
                },
                {
                  tag: "a",
                  props: {
                    href: "/map",
                    class:
                      "btn bg-blue-200 mt-10 text-white rounded-full shadow-sm hover:bg-blue-100",
                  },
                  children: [
                    "Explorer la Carte",
                    {
                      tag: "i",
                      props: {
                        class: "fa-solid fa-location-dot",
                      },
                    },
                  ],
                },
                {
                  tag: "a",
                  props: {
                    href: "/discover",
                    class:
                      "btn border-1 border-blue-200/10 dark:border-blue-200/60 bg-transparent mt-10 text-black rounded-full shadow-sm ml-3 hover:bg-blue-200 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white",
                  },
                  children: [
                    "Dernières Nouvelles",
                    {
                      tag: "i",
                      props: { class: "fa-solid fa-newspaper" },
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              props: {
                id: "image-container",
                class:
                  "mt-24 items-center lg:mt-32 md:mt-44 mt-44 2xl:mt-28 xl:mt-28 md:flex hidden",
              },
              children: [
                {
                  tag: "img",
                  props: {
                    class: "image w-auto h-auto",
                    src: "/src/assets/images/home-banner-img-right.png",
                    alt: "home-banner-img-right",
                  },
                },
                {
                  tag: "img",
                  props: {
                    class: "image w-auto h-auto",
                    src: "/src/assets/images/home-banner-img-right-2.png",
                    alt: "home-banner-img-right",
                    style: "opacity: 0;",
                  },
                },
                {
                  tag: "img",
                  props: {
                    class: "image w-auto h-auto",
                    src: "/src/assets/images/home-banner-img-right-3.png",
                    alt: "home-banner-img-right",
                    style: "opacity: 0;",
                  },
                },
                {
                  tag: "img",
                  props: {
                    class: "image w-auto h-auto",
                    src: "/src/assets/images/home-banner-img-right-4.png",
                    alt: "home-banner-img-right",
                    style: "opacity: 0;",
                  },
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          props: { class: "carousel mt-36" },
          children: [
            {
              tag: "div",
              props: { class: "carousel-track" },
              children: [
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Allemagne.png",
                    alt: "Allemagne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Australia.jpg",
                    alt: "Australia",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Austria.png",
                    alt: "Austria",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Belgium.jpg",
                    alt: "Belgium",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Bresil.png",
                    alt: "Bresil",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/canada.jpg",
                    alt: "Canada",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Espagne.png",
                    alt: "Espagne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Ireland.png",
                    alt: "Ireland",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Japan.png",
                    alt: "Japan",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Mexico.png",
                    alt: "Mexico",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Netherlands.png",
                    alt: "Netherlands",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Pologne.png",
                    alt: "Pologne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Saudi_Arabia.webp",
                    alt: "Saudi Arabia",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Sweden.png",
                    alt: "Sweden",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_Arab_Emirates.webp",
                    alt: "United Arab Emirates",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_Kingdom.png",
                    alt: "United Kingdom",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_States.png",
                    alt: "United States",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/France.png",
                    alt: "France",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Allemagne.png",
                    alt: "Allemagne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Australia.jpg",
                    alt: "Australia",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Austria.png",
                    alt: "Austria",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Belgium.jpg",
                    alt: "Belgium",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Bresil.png",
                    alt: "Bresil",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/canada.jpg",
                    alt: "Canada",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Espagne.png",
                    alt: "Espagne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Ireland.png",
                    alt: "Ireland",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Japan.png",
                    alt: "Japan",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Mexico.png",
                    alt: "Mexico",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Netherlands.png",
                    alt: "Netherlands",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Pologne.png",
                    alt: "Pologne",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Saudi_Arabia.webp",
                    alt: "Saudi Arabia",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/Sweden.png",
                    alt: "Sweden",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_Arab_Emirates.webp",
                    alt: "United Arab Emirates",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_Kingdom.png",
                    alt: "United Kingdom",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/United_States.png",
                    alt: "United States",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/country_flag/France.png",
                    alt: "France",
                  },
                },
              ],
            },
          ],
        },
        { tag: "div", props: { class: "mt-80" }, children: [] },
        {
          tag: "div",
          props: {
            class:
              "grid grid-cols-1 lg:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44",
          },
          children: [
            {
              tag: "div",
              props: {
                class:
                  "flex flex-col justify-center lg:text-start lg:mb-0 mb-10 text-center",
              },
              children: [
                {
                  tag: "span",
                  props: { class: "text-blue-200/50 text-md" },
                  children: ["SERVICES"],
                },
                {
                  tag: "h2",
                  props: { class: "text-4xl mt-4" },
                  children: [
                    "Découvrez tous les événements",
                    { tag: "br" },
                    "des Jeux Olympiques",
                    { tag: "br" },
                    "et les meilleurs endroits",
                  ],
                },
              ],
            },
            {
              tag: "div",
              props: {
                class:
                  "lg:grid grid-cols-1 lg:grid-cols-2 gap-10 flex md:flex-row flex-col",
              },
              children: [
                {
                  tag: "div",
                  props: {
                    class:
                      "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50",
                  },
                  children: [
                    {
                      tag: "img",
                      props: {
                        src: "/src/assets/images/home_card_img_events.png",
                        alt: "olympic-games",
                      },
                    },
                    {
                      tag: "h3",
                      props: { class: "text-2xl mt-4" },
                      children: ["NOUVELLES OLYMPIQUES"],
                    },
                    {
                      tag: "p",
                      props: { class: "text-gray-500 mt-4" },
                      children: [
                        "Obtenez les dernières nouvelles sur les Jeux Olympiques, les athlètes, les événements et les résultats en temps réel.",
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  props: {
                    class:
                      "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50",
                  },
                  children: [
                    {
                      tag: "img",
                      props: {
                        src: "/src/assets/images/home_card_img_events_2.png",
                        alt: "olympic-games",
                      },
                    },
                    {
                      tag: "h3",
                      props: { class: "text-2xl mt-4" },
                      children: ["TOUS LES ÉVÉNEMENTS"],
                    },
                    {
                      tag: "p",
                      props: { class: "text-gray-500 mt-4" },
                      children: [
                        "Découvrez tous les événements des Jeux Olympiques et les meilleurs endroits à visiter dans les villes hôtes.",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          props: {
            class:
              "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32",
          },
          children: [
            {
              tag: "div",
              props: { class: "flex items-center mt-20" },
              children: [
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/home-section-infos.png",
                    alt: "home_banner_img_left",
                    class: "w-full h-auto",
                  },
                },
              ],
            },
            {
              tag: "div",
              props: { class: "text-center md:text-start" },
              children: [
                {
                  tag: "span",
                  props: { class: "text-blue-200/50 text-md" },
                  children: ["TOUS LES ÉVÉNEMENTS"],
                },
                {
                  tag: "h2",
                  props: { class: "text-4xl mt-4" },
                  children: [
                    "Trouvez tout ce que vous devez savoir",
                    { tag: "br" },
                    "sur les Jeux Olympiques",
                  ],
                },
                {
                  tag: "p",
                  props: { class: "text-gray-500 mt-4" },
                  children: [
                    "Laissez-nous vous guider à travers les Jeux Olympiques 2024 à Paris avec expertise et soin. Notre objectif est de vous offrir la meilleure expérience possible.",
                  ],
                },
                {
                  tag: "div",
                  props: { class: "grid grid-cols-2 mt-5 gap-5" },
                  children: [
                    {
                      tag: "div",
                      props: {
                        class:
                          "text-center border-2 border-gray-200/30 rounded-lg p-5",
                      },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "text-2xl mt-4 text-blue-primary" },
                          children: ["20+"],
                        },
                        {
                          tag: "p",
                          props: { class: "text-gray-500 mt-4" },
                          children: ["Jeux Paralympiques"],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      props: {
                        class:
                          "text-center border-2 border-gray-200/30 rounded-lg p-5",
                      },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "text-2xl mt-4 text-blue-primary" },
                          children: ["40+"],
                        },
                        {
                          tag: "p",
                          props: { class: "text-gray-500 mt-4" },
                          children: ["Jeux Olympiques"],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      props: {
                        class:
                          "text-center border-2 border-gray-200/30 rounded-lg p-5",
                      },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "text-2xl mt-4 text-blue-primary" },
                          children: ["100+"],
                        },
                        {
                          tag: "p",
                          props: { class: "text-gray-500 mt-4" },
                          children: ["Endroits"],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      props: {
                        class:
                          "text-center border-2 border-gray-200/30 rounded-lg p-5",
                      },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "text-2xl mt-4 text-blue-primary" },
                          children: ["60+"],
                        },
                        {
                          tag: "p",
                          props: { class: "text-gray-500 mt-4" },
                          children: ["Événements"],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "div",
          props: {
            class:
              "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32",
          },
          children: [
            {
              tag: "div",
              props: { class: "md:pr-20 pr-0" },
              children: [
                {
                  tag: "span",
                  props: { class: "text-blue-200/50 text-md" },
                  children: ["CARACTÉRISTIQUES CLÉS"],
                },
                {
                  tag: "h2",
                  props: { class: "text-4xl mt-4" },
                  children: ["NOUS OFFRONS LES MEILLEURS SERVICES"],
                },
                {
                  tag: "p",
                  props: { class: "text-gray-500 mt-4" },
                  children: [
                    "Nous offrons une large gamme de services pour vous aider à profiter au maximum de votre expérience des Jeux Olympiques. Des informations sur les événements aux endroits à visiter, nous avons tout couvert.",
                  ],
                },
                {
                  tag: "div",
                  props: { class: "flex mt-8" },
                  children: [
                    {
                      tag: "img",
                      props: {
                        src: "/src/assets/images/services-01.png",
                        alt: "",
                        class: "h-full w-auto",
                      },
                    },
                    {
                      tag: "div",
                      props: { class: "flex flex-col ml-5" },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "font-bold text-2xl" },
                          children: ["NOUS OFFRONS LES MEILLEURS SERVICES"],
                        },
                        {
                          tag: "p",
                          children: [
                            "Découvrez nos services de qualité supérieure.",
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  props: { class: "flex mt-8" },
                  children: [
                    {
                      tag: "img",
                      props: {
                        src: "/src/assets/images/services-02.png",
                        alt: "",
                        class: "h-full w-auto",
                      },
                    },
                    {
                      tag: "div",
                      props: { class: "flex flex-col ml-5" },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "font-bold text-2xl" },
                          children: ["PLANIFIEZ VOTRE VOYAGE"],
                        },
                        {
                          tag: "p",
                          children: [
                            "Planifiez votre voyage sans effort dès aujourd'hui.",
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  props: { class: "flex mt-8" },
                  children: [
                    {
                      tag: "img",
                      props: {
                        src: "/src/assets/images/services-03.png",
                        alt: "",
                        class: "h-full w-auto",
                      },
                    },
                    {
                      tag: "div",
                      props: { class: "flex flex-col ml-5" },
                      children: [
                        {
                          tag: "h3",
                          props: { class: "font-bold text-2xl" },
                          children: ["OBTENEZ LE MEILLEUR ITINÉRAIRE"],
                        },
                        {
                          tag: "p",
                          children: ["Trouvez l'itinéraire parfait pour vous."],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              props: { class: "items-center justify-center md:flex hidden" },
              children: [
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/home-section-services.png",
                    alt: "home_banner_img_left",
                    class: "w-auto h-auto block dark:hidden",
                  },
                },
                {
                  tag: "img",
                  props: {
                    src: "/src/assets/images/home-section-services-dark.png",
                    alt: "home_banner_img_left",
                    class: "w-auto h-auto hidden dark:block",
                  },
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

export default HomeClass;
