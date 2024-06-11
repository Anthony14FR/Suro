import { t } from "./i18n.js";

const HomeStructure = (language) => ({
  type: "div",
  children: [
    { type: "Navbar" },
    {
      type: "div",
      attributes: {
        class: "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44",
        style: `background: url(/src/assets/images/bg.png); background-size: contain; background-position: center; background-repeat: no-repeat;`,
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
              children: [t('explore_france', language)],
            },
            {
              type: "h1",
              attributes: { class: "md:text-6xl sm:text-5xl text-4xl font-bold mt-6" },
              children: [t('discover_all_the_events', language)],
            },
            {
              type: "p",
              attributes: { class: "text-gray-500 mt-10" },
              children: [t('subTitle', language)],
            },
            {
              type: "a",
              attributes: {
                href: "/map",
                class: "btn bg-blue-200 mt-10 text-white rounded-full shadow-sm hover:bg-blue-100",
              },
              children: [t('explore_map', language)],
            },
            {
              type: "a",
              attributes: {
                href: "/discover",
                class: "btn border-1 border-blue-200/10 dark:border-blue-200/60 bg-transparent mt-10 text-black rounded-full shadow-sm ml-3 hover:bg-blue-200 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white",
              },
              children: [t('last_news', language)],
            },
          ],
        },
        {
          type: "div",
          attributes: { id: "image-container", class: "mt-24 items-center lg:mt-32 md:mt-44 mt-44 2xl:mt-28 xl:mt-28 md:flex hidden" },
          children: [
            { type: "img", attributes: { class: "image w-auto h-auto", src: "/src/assets/images/home-banner-img-right.png", alt: "home-banner-img-right" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: "/src/assets/images/home-banner-img-right-2.png", alt: "home-banner-img-right", style: "opacity: 0;" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: "/src/assets/images/home-banner-img-right-3.png", alt: "home-banner-img-right", style: "opacity: 0;" } },
            { type: "img", attributes: { class: "image w-auto h-auto", src: "/src/assets/images/home-banner-img-right-4.png", alt: "home-banner-img-right", style: "opacity: 0;" } },
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
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Allemagne.png", alt: "Allemagne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Australia.jpg", alt: "Australia" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Austria.png", alt: "Austria" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Belgium.jpg", alt: "Belgium" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Bresil.png", alt: "Bresil" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/canada.jpg", alt: "Canada" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Espagne.png", alt: "Espagne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Ireland.png", alt: "Ireland" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Japan.png", alt: "Japan" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Mexico.png", alt: "Mexico" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Netherlands.png", alt: "Netherlands" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Pologne.png", alt: "Pologne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Saudi_Arabia.webp", alt: "Saudi Arabia" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Sweden.png", alt: "Sweden" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_Arab_Emirates.webp", alt: "United Arab Emirates" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_Kingdom.png", alt: "United Kingdom" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_States.png", alt: "United States" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/France.png", alt: "France" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Allemagne.png", alt: "Allemagne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Australia.jpg", alt: "Australia" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Austria.png", alt: "Austria" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Belgium.jpg", alt: "Belgium" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Bresil.png", alt: "Bresil" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/canada.jpg", alt: "Canada" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Espagne.png", alt: "Espagne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Ireland.png", alt: "Ireland" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Japan.png", alt: "Japan" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Mexico.png", alt: "Mexico" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Netherlands.png", alt: "Netherlands" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Pologne.png", alt: "Pologne" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Saudi_Arabia.webp", alt: "Saudi Arabia" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/Sweden.png", alt: "Sweden" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_Arab_Emirates.webp", alt: "United Arab Emirates" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_Kingdom.png", alt: "United Kingdom" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/United_States.png", alt: "United States" } },
            { type: "img", attributes: { src: "/src/assets/images/country_flag/France.png", alt: "France" } },
          ],
        },
      ],
    },
    { type: "div", attributes: { class: "mt-80" }, children: [] },
    { type: "div", attributes: { class: "countdown-timer flex flex-col items-center justify-center p-4 mb-12 card w-96 bg-blue-200" }},
    {
      type: "div",
      attributes: { class: "grid grid-cols-1 lg:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44" },
      children: [
        {
          type: "div",
          attributes: { class: "flex flex-col justify-center lg:text-start lg:mb-0 mb-10 text-center" },
          children: [
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: [t('services', language)] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: [t('discover_events_spots', language)] },
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
                { type: "img", attributes: { src: "/src/assets/images/home_card_img_events.png", alt: "olympic-games" } },
                { type: "h3", attributes: { class: "text-2xl mt-4" }, children: [t('olympic_news', language)] },
                { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('latest_olympic_news', language)] },
              ],
            },
            {
              type: "div",
              attributes: { class: "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50" },
              children: [
                { type: "img", attributes: { src: "/src/assets/images/home_card_img_events_2.png", alt: "olympic-games" } },
                { type: "h3", attributes: { class: "text-2xl mt-4" }, children: [t('all_events', language)] },
                { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('discover_best_spots', language)] },
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
            { type: "img", attributes: { src: "/src/assets/images/home-section-infos.png", alt: "home_banner_img_left", class: "w-full h-auto" } },
          ],
        },
        {
          type: "div",
          attributes: { class: "text-center md:text-start" },
          children: [
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: [t('all_events_header', language)] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: [t('olympic_games_info', language)] },
            { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('olympic_games_guidance', language)] },
            {
              type: "div",
              attributes: { class: "grid grid-cols-2 mt-5 gap-5" },
              children: [
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["20+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('paralympic_games', language)] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["40+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('olympic_games', language)] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["100+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('spots', language)] },
                  ],
                },
                {
                  type: "div",
                  attributes: { class: "text-center border-2 border-gray-200/30 rounded-lg p-5" },
                  children: [
                    { type: "h3", attributes: { class: "text-2xl mt-4 text-blue-primary" }, children: ["60+"] },
                    { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('events', language)] },
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
            { type: "span", attributes: { class: "text-blue-200/50 text-md" }, children: [t('key_features', language)] },
            { type: "h2", attributes: { class: "text-4xl mt-4" }, children: [t('best_services', language)] },
            { type: "p", attributes: { class: "text-gray-500 mt-4" }, children: [t('wide_range_services', language)] },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: "/src/assets/images/services-01.png", alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: [t('best_services_title', language)] },
                    { type: "p", children: [t('curated_travel_experiences_1', language)] },
                  ],
                },
              ],
            },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: "/src/assets/images/services-02.png", alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: [t('schedule_trip', language)] },
                    { type: "p", children: [t('curated_travel_experiences_2', language)] },
                  ],
                },
              ],
            },
            {
              type: "div",
              attributes: { class: "flex mt-8" },
              children: [
                { type: "img", attributes: { src: "/src/assets/images/services-03.png", alt: "", class: "h-full w-auto" } },
                {
                  type: "div",
                  attributes: { class: "flex flex-col ml-5" },
                  children: [
                    { type: "h3", attributes: { class: "font-bold text-2xl" }, children: [t('get_best_itinerary', language)] },
                    { type: "p", children: [t('curated_travel_experiences_3', language)] },
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
            { type: "img", attributes: { src: "/src/assets/images/home-section-services.png", alt: "home_banner_img_left", class: "w-auto h-auto block dark:hidden" } },
            { type: "img", attributes: { src: "/src/assets/images/home-section-services-dark.png", alt: "home_banner_img_left", class: "w-auto h-auto hidden dark:block" } },
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
          
          let countdownContainer = document.querySelector(".countdown-timer");

          let timeDisplay = document.createElement("div");
          timeDisplay.className = "time-display text-3xl font-bold flex space-x-2";
          countdownContainer.appendChild(timeDisplay);

          let daysSpan = document.createElement("span");
          let hoursSpan = document.createElement("span");
          let minutesSpan = document.createElement("span");
          let secondsSpan = document.createElement("span");

          let daysLabel = document.createElement("div");
          daysLabel.className = "text-sm";
          daysLabel.textContent = "Jours";

          let hoursLabel = document.createElement("div");
          hoursLabel.className = "text-sm";
          hoursLabel.textContent = "Heures";

          let minutesLabel = document.createElement("div");
          minutesLabel.className = "text-sm";
          minutesLabel.textContent = "Minutes";

          let secondsLabel = document.createElement("div");
          secondsLabel.className = "text-sm";
          secondsLabel.textContent = "Secondes";

          let labelsContainer = document.createElement("div");
          labelsContainer.className = "flex space-x-4 mt-2";
          labelsContainer.appendChild(daysLabel);
          labelsContainer.appendChild(hoursLabel);
          labelsContainer.appendChild(minutesLabel);
          labelsContainer.appendChild(secondsLabel);

          timeDisplay.appendChild(daysSpan);
          timeDisplay.appendChild(hoursSpan);
          timeDisplay.appendChild(minutesSpan);
          timeDisplay.appendChild(secondsSpan);

          countdownContainer.appendChild(labelsContainer);

          let targetTimestamp = 1722015000 * 1000;

          function updateCountdown() {
            let now = Date.now();
            let timeLeft = targetTimestamp - now;

            if (timeLeft <= 0) {
              countdownContainer.style.display = "none";
              clearInterval(interval);
              return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            daysSpan.textContent = days.toString().padStart(2, '0') + " :";
            hoursSpan.textContent = hours.toString().padStart(2, '0') + " :";
            minutesSpan.textContent = minutes.toString().padStart(2, '0') + " :";
            secondsSpan.textContent = seconds.toString().padStart(2, '0');
          }

          let interval = setInterval(updateCountdown, 1000);
          
        `,
      ],
    },
    { type: "Footer" },
  ],
});

export default HomeStructure;
