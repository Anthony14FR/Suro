import Logo from "../src/assets/images/logo.png";
import BgImage from "../src/assets/images/bg.png";
import BannerImgRight from "../src/assets/images/home-banner-img-right.png";
import BannerImgRight2 from "../src/assets/images/home-banner-img-right-2.png";
import BannerImgRight3 from "../src/assets/images/home-banner-img-right-3.png";
import BannerImgRight4 from "../src/assets/images/home-banner-img-right-4.png";
import HomeCardImgEvents from "../src/assets/images/home_card_img_events.png";
import HomeCardImgEvents2 from "../src/assets/images/home_card_img_events_2.png";
import HomeSectionInfos from "../src/assets/images/home-section-infos.png";
import ServicesImg01 from "../src/assets/images/services-01.png";
import ServicesImg02 from "../src/assets/images/services-02.png";
import ServicesImg03 from "../src/assets/images/services-03.png";
import HomeSectionServices from "../src/assets/images/home-section-services.png";
import HomeSectionServicesDark from "../src/assets/images/home-section-services-dark.png";
import Allemagne from "../src/assets/images/country_flag/Allemagne.png";
import Australia from "../src/assets/images/country_flag/Australia.jpg";
import Austria from "../src/assets/images/country_flag/Austria.png";
import Belgium from "../src/assets/images/country_flag/Belgium.jpg";
import Bresil from "../src/assets/images/country_flag/Bresil.png";
import Canada from "../src/assets/images/country_flag/canada.jpg";
import Espagne from "../src/assets/images/country_flag/Espagne.png";
import Ireland from "../src/assets/images/country_flag/Ireland.png";
import Japan from "../src/assets/images/country_flag/Japan.png";
import Mexico from "../src/assets/images/country_flag/Mexico.png";
import Netherlands from "../src/assets/images/country_flag/Netherlands.png";
import Pologne from "../src/assets/images/country_flag/Pologne.png";
import Saudi_Arabia from "../src/assets/images/country_flag/Saudi_Arabia.webp";
import Sweden from "../src/assets/images/country_flag/Sweden.png";
import United_Arab_Emirates from "../src/assets/images/country_flag/United_Arab_Emirates.webp";
import United_Kingdom from "../src/assets/images/country_flag/United_Kingdom.png";
import United_States from "../src/assets/images/country_flag/United_States.png";

const HomeStructure = {
  type: "div",
  children: [
    { type: "Navbar" },
    {
      type: "div",
      attributes: {
        class: "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44",
        style: `background: url(${BgImage}); background-size: cover; background-position: center;`,
      },
      children: [
        {
          type: "div",
          attributes: { class: "mt-24 md:p-0 p-5" },
          children: [
            {
              type: "span",
              attributes: {
                class: "badge p-6 font-bold text-blue-primary dark:border-1 dark:border-blue-200/30 shadow-sm text-xs",
              },
              children: [
                'Explore France! <i class="fa-solid fa-globe ml-2 fa-fade"></i>',
              ],
            },
            {
              type: "h1",
              attributes: { class: "md:text-6xl sm:text-5xl text-4xl font-bold mt-6" },
              children: [
                'Discover <span class="text-blue-200">ALL THE</span><br><span class="text-blue-200">EVENTS</span> OF THE <br><span class="">OLYMPIC GAMES</span>',
              ],
            },
            {
              type: "p",
              attributes: { class: "text-gray-500 mt-10" },
              children: [
                "Immerse yourself in a world of wanderlust with our curated travel experiences. From breathtaking landscapes to cultural gems, embark on unforgettable adventures.",
              ],
            },
            {
              type: "a",
              attributes: {
                href: "/map",
                class: "btn bg-blue-200 mt-10 text-white rounded-full shadow-sm hover:bg-blue-100",
              },
              children: [
                'Explore Map <i class="fa-solid fa-location-dot"></i>',
              ],
            },
            {
              type: "a",
              attributes: {
                href: "/discover",
                class: "btn border-1 border-blue-200/10 dark:border-blue-200/60 bg-transparent mt-10 text-black rounded-full shadow-sm ml-3 hover:bg-blue-200 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white",
              },
              children: [
                'Last News <i class="fa-solid fa-newspaper"></i>',
              ],
            },
          ],
        },
        {
          type: "div",
          attributes: { id: "image-container", class: "mt-24 items-center lg:mt-32 md:mt-44 mt-44 2xl:mt-28 xl:mt-28 md:flex hidden" },
          children: [
            { type: "img", attributes: { class: "image w-auto h-auto", src: BannerImgRight, alt: "home-banner-img-right" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: BannerImgRight2, alt: "home-banner-img-right", style: "opacity: 0;" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: BannerImgRight3, alt: "home-banner-img-right", style: "opacity: 0;" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: BannerImgRight4, alt: "home-banner-img-right", style: "opacity: 0;" } },
          ],
        },
      ],
    },
    {
      type: "div",
      attributes: { class: "carousel mt-36" },
      children: [
        {
          type: "div",
          attributes: { class: "carousel-track" },
          children: [
            { type: "img", attributes: { src: Allemagne, alt: "Allemagne" } },
            { type: "img", attributes: { src: Australia, alt: "Australia" } },
            { type: "img", attributes: { src: Austria, alt: "Austria" } },
            { type: "img", attributes: { src: Belgium, alt: "Belgium" } },
            { type: "img", attributes: { src: Bresil, alt: "Bresil" } },
            { type: "img", attributes: { src: Canada, alt: "Canada" } },
            { type: "img", attributes: { src: Espagne, alt: "Espagne" } },
            { type: "img", attributes: { src: Ireland, alt: "Ireland" } },
            { type: "img", attributes: { src: Japan, alt: "Japan" } },
            { type: "img", attributes: { src: Mexico, alt: "Mexico" } },
            { type: "img", attributes: { src: Netherlands, alt: "Netherlands" } },
            { type: "img", attributes: { src: Pologne, alt: "Pologne" } },
            { type: "img", attributes: { src: Saudi_Arabia, alt: "Saudi Arabia" } },
            { type: "img", attributes: { src: Sweden, alt: "Sweden" } },
            { type: "img", attributes: { src: United_Arab_Emirates, alt: "United Arab Emirates" } },
            { type: "img", attributes: { src: United_Kingdom, alt: "United Kingdom" } },
            { type: "img", attributes: { src: United_States, alt: "United States" } },
            { type: "img", attributes: { src: Allemagne, alt: "Allemagne" } },
            { type: "img", attributes: { src: Australia, alt: "Australia" } },
            { type: "img", attributes: { src: Austria, alt: "Austria" } },
            { type: "img", attributes: { src: Belgium, alt: "Belgium" } },
            { type: "img", attributes: { src: Bresil, alt: "Bresil" } },
            { type: "img", attributes: { src: Canada, alt: "Canada" } },
            { type: "img", attributes: { src: Espagne, alt: "Espagne" } },
            { type: "img", attributes: { src: Ireland, alt: "Ireland" } },
            { type: "img", attributes: { src: Japan, alt: "Japan" } },
            { type: "img", attributes: { src: Mexico, alt: "Mexico" } },
            { type: "img", attributes: { src: Netherlands, alt: "Netherlands" } },
            { type: "img", attributes: { src: Pologne, alt: "Pologne" } },
            { type: "img", attributes: { src: Saudi_Arabia, alt: "Saudi Arabia" } },
            { type: "img", attributes: { src: Sweden, alt: "Sweden" } },
            { type: "img", attributes: { src: United_Arab_Emirates, alt: "United Arab Emirates" } },
            { type: "img", attributes: { src: United_Kingdom, alt: "United Kingdom" } },
            { type: "img", attributes: { src: United_States, alt: "United States" } },
          ],
        },
      ],
    },
    { type: "div", attributes: { class: "mt-80" }, children: [] },
    {
      type: "div",
      attributes: { class: "grid grid-cols-1 lg:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44" },
      children: [
        {
          type: "div",
          attributes: { class: "flex flex-col justify-center lg:text-start lg:mb-0 mb-10 text-center" },
          children: [
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: ["SERVICES"] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: ["Discover all the events <br> of the Olympic Games <br> and the best spots"] },
          ],
        },
        {
          type: "div",
          attributes: { class: "lg:grid grid-cols-1 lg:grid-cols-2 gap-10 flex md:flex-row flex-col" },
          children: [
            {
              type: "div",
              attributes: { class: "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50" },
              children: [
                { type: "img", attributes: { src: HomeCardImgEvents, alt: "olympic-games" } },
                { type: "h3", attributes: { class: "text-2xl mt-4" }, children: ["OLYMPIC NEWS"] },
                { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Get the latest news about the Olympic Games, the athletes, the events and the results in real time."] },
              ],
            },
            {
              type: "div",
              attributes: { class: "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50" },
              children: [
                { type: "img", attributes: { src: HomeCardImgEvents2, alt: "olympic-games" } },
                { type: "h3", attributes: { class: "text-2xl mt-4" }, children: ["ALL EVENTS"] },
                { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Discover all the events of the Olympic Games and the best spots to visit in the host cities."] },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "div",
      attributes: { class: "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32" },
      children: [
        {
          type: "div",
          attributes: { class: "flex items-center mt-20" },
          children: [
            { type: "img", attributes: { src: HomeSectionInfos, alt: "home_banner_img_left", class: "w-full h-auto" } },
          ],
        },
        {
          type: "div",
          attributes: { class: "text-center md:text-start" },
          children: [
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: ["ALL EVENTS"] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: ["Find everything you need <br> to know about the Olympic Games"] },
            { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Let us guide you through the Olympic Games 2024 in Paris with expertise and care. Our objective is to provide you with the best experience possible."] },
            {
              type: "div",
              attributes: { class: "grid grid-cols-2 mt-5 gap-5" },
              children: [
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["20+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Paralymic Games"] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["40+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Olympic Games"] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["100+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Spots"] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["60+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["Events"] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "div",
      attributes: { class: "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32" },
      children: [
        {
          type: "div",
          attributes: { class: "md:pr-20 pr-0" },
          children: [
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: ["KEY FEATURES"] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: ["WE OFFER BEST SERVICES"] },
            { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: ["We offer a wide range of services to help you make the most of your Olympic Games experience. From event information to spots to visit, we have you covered."] },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: ServicesImg01, alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: ["WE OFFER BEST SERVICES"] },
                    { type: "p", children: ["Get the latest news about the Olympic Games."] },
                  ],
                },
              ],
            },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: ServicesImg02, alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: ["SCHEDULE YOUR TRIP"] },
                    { type: "p", children: ["Get the latest news about the Olympic Games."] },
                  ],
                },
              ],
            },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: ServicesImg03, alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: ["GET BEST ITINARY"] },
                    { type: "p", children: ["Get the latest news about the Olympic Games."] },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "div",
          attributes: { class: "items-center justify-center md:flex hidden" },
          children: [
            { type: "img", attributes: { src: HomeSectionServices, alt: "home_banner_img_left", class: "w-auto h-auto block dark:hidden" } },
            { type: "img", attributes: { src: HomeSectionServicesDark, alt: "home_banner_img_left", class: "w-auto h-auto hidden dark:block" } },
          ],
        },
      ],
    },
    {
      type: "script",
      children: [
        `
          let images = Array.from(document.querySelectorAll('.image'));
          let index = 0;

          images[0].style.opacity = '1';

          setInterval(function() {
              images[index].style.opacity = '0';
              index = (index + 1) % images.length;
              images[index].style.opacity = '1';
          }, 3000);
        `,
      ],
    },
    { type: "Footer" },
  ],
};

export default HomeStructure;
