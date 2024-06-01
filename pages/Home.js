import { HistoryLink as Link } from "../components/HistoryRouter.js";
import Navbar from "../components/Navbar.js";
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
import Footer from "../components/Footer.js";


export default function Home() {
  const div = document.createElement("div");
  const navbarContainer = document.createElement("div");
  navbarContainer.className = "navbar-container 2xl:container mx-auto px-0 2xl:px-44";
  navbarContainer.appendChild(Navbar());
  div.appendChild(navbarContainer);

  // Section principale avec le fond d'écran
  const mainSection = document.createElement("div");
  mainSection.className = "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44";
  mainSection.style.background = `url(${BgImage})`;
  mainSection.style.backgroundSize = "cover";
  mainSection.style.backgroundPosition = "center";

  const textSection = document.createElement("div");
  textSection.className = "mt-24 md:p-0 p-5";

  const badge = document.createElement("span");
  badge.className = "badge p-6 font-bold text-blue-primary dark:border-1 dark:border-blue-200/30 shadow-sm text-xs";
  badge.innerHTML = 'Explore France! <i class="fa-solid fa-globe ml-2 fa-fade"></i>';
  textSection.appendChild(badge);

  const heading = document.createElement("h1");
  heading.className = "md:text-6xl sm:text-5xl text-4xl font-bold mt-6";
  heading.innerHTML = `Discover <span class="text-blue-200">ALL THE</span><br><span class="text-blue-200">EVENTS</span> OF THE <br><span class="">OLYMPIC GAMES</span>`;
  textSection.appendChild(heading);

  const description = document.createElement("p");
  description.className = "text-gray-500 mt-10";
  description.textContent = "Immerse yourself in a world of wanderlust with our curated travel experiences. From breathtaking landscapes to cultural gems, embark on unforgettable adventures.";
  textSection.appendChild(description);

  const exploreButton = document.createElement("a");
  exploreButton.href = "/map";
  exploreButton.className = "btn bg-blue-200 mt-10 text-white rounded-full shadow-sm hover:bg-blue-100";
  exploreButton.innerHTML = 'Explore Map <i class="fa-solid fa-location-dot"></i>';
  textSection.appendChild(exploreButton);

  const newsButton = document.createElement("a");
  newsButton.href = "/discover";
  newsButton.className = "btn border-1 border-blue-200/10 dark:border-blue-200/60 bg-transparent mt-10 text-black rounded-full shadow-sm ml-3 hover:bg-blue-200 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white";
  newsButton.innerHTML = 'Last News <i class="fa-solid fa-newspaper"></i>';
  textSection.appendChild(newsButton);

  mainSection.appendChild(textSection);

  const imageContainer = document.createElement("div");
  imageContainer.id = "image-container";
  imageContainer.className = "mt-24 items-center lg:mt-32 md:mt-44 mt-44 2xl:mt-28 xl:mt-28 md:flex hidden";

  const images = [BannerImgRight, BannerImgRight2, BannerImgRight3, BannerImgRight4].map((src, index) => {
    const img = document.createElement("img");
    img.className = "image w-auto h-auto";
    img.src = src;
    img.alt = "home-banner-img-right";
    if (index > 0) {
      img.style.opacity = "0";
    }
    return img;
  });
  images.forEach(img => imageContainer.appendChild(img));
  mainSection.appendChild(imageContainer);
  div.appendChild(mainSection);

  // Carousel des drapeaux
  const carousel = document.createElement("div");
  carousel.className = "carousel mt-36";
  const carouselTrack = document.createElement("div");
  carouselTrack.className = "carousel-track";
  const flags = [
    Allemagne, Australia, Austria, Belgium, Bresil, Canada, Espagne, Ireland, Japan, Mexico, Netherlands, Pologne, Saudi_Arabia, Sweden, United_Arab_Emirates, United_Kingdom, United_States
  ];
  flags.forEach(flag => {
    const img = document.createElement("img");
    img.src = flag;
    img.alt = flag.split('/').pop().split('.')[0]; // extrait le nom du fichier sans extension pour l'alt
    carouselTrack.appendChild(img);
  });
  // Ajout des drapeaux une deuxième fois pour la continuité du carousel
  flags.forEach(flag => {
    const img = document.createElement("img");
    img.src = flag;
    img.alt = flag.split('/').pop().split('.')[0];
    carouselTrack.appendChild(img);
  });
  carousel.appendChild(carouselTrack);
  div.appendChild(carousel);

  const spacer = document.createElement("div");
  spacer.className = "mt-80";
  div.appendChild(spacer);

  // Section des services
  const servicesSection = document.createElement("div");
  servicesSection.className = "grid grid-cols-1 lg:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44";

  const servicesText = document.createElement("div");
  servicesText.className = "flex flex-col justify-center lg:text-start lg:mb-0 mb-10 text-center";

  const servicesHeading = document.createElement("span");
  servicesHeading.className = "text-blue-200/50 text-md";
  servicesHeading.textContent = "SERVICES";
  servicesText.appendChild(servicesHeading);

  const servicesSubheading = document.createElement("h2");
  servicesSubheading.className = "text-4xl mt-4";
  servicesSubheading.innerHTML = "Discover all the events <br> of the Olympic Games <br> and the best spots";
  servicesText.appendChild(servicesSubheading);
  servicesSection.appendChild(servicesText);

  const servicesCards = document.createElement("div");
  servicesCards.className = "lg:grid grid-cols-1 lg:grid-cols-2 gap-10 flex md:flex-row flex-col";
  const serviceImages = [
    { src: HomeCardImgEvents, title: "OLYMPIC NEWS", description: "Get the latest news about the Olympic Games, the athletes, the events and the results in real time." },
    { src: HomeCardImgEvents2, title: "ALL EVENTS", description: "Discover all the events of the Olympic Games and the best spots to visit in the host cities." }
  ];
  serviceImages.forEach(service => {
    const card = document.createElement("div");
    card.className = "card flex flex-cols items-center text-center p-5 custom-shadow dark:border-2 dark:border-white/50";

    const img = document.createElement("img");
    img.src = service.src;
    img.alt = "olympic-games";

    const title = document.createElement("h3");
    title.className = "text-2xl mt-4";
    title.textContent = service.title;

    const description = document.createElement("p");
    description.className = "text-gray-500 mt-4";
    description.textContent = service.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    servicesCards.appendChild(card);
  });
  servicesSection.appendChild(servicesCards);
  div.appendChild(servicesSection);

  // Section des informations
  const infosSection = document.createElement("div");
  infosSection.className = "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32";

  const infosImage = document.createElement("div");
  infosImage.className = "flex items-center mt-20";

  const infosImg = document.createElement("img");
  infosImg.src = HomeSectionInfos;
  infosImg.alt = "home_banner_img_left";
  infosImg.className = "w-full h-auto";
  infosImage.appendChild(infosImg);
  infosSection.appendChild(infosImage);

  const infosText = document.createElement("div");
  infosText.className = "text-center md:text-start";

  const infosHeading = document.createElement("span");
  infosHeading.className = "text-blue-200/50 text-md";
  infosHeading.textContent = "ALL EVENTS";
  infosText.appendChild(infosHeading);

  const infosSubheading = document.createElement("h2");
  infosSubheading.className = "text-4xl mt-4";
  infosSubheading.innerHTML = "Find everything you need <br> to know about the Olympic Games";
  infosText.appendChild(infosSubheading);

  const infosDescription = document.createElement("p");
  infosDescription.className = "text-gray-500 mt-4";
  infosDescription.textContent = "Let us guide you through the Olympic Games 2024 in Paris with expertise and care. Our objective is to provide you with the best experience possible.";
  infosText.appendChild(infosDescription);

  const stats = [
    { number: "20+", text: "Paralymic Games" },
    { number: "40+", text: "Olympic Games" },
    { number: "100+", text: "Spots" },
    { number: "60+", text: "Events" }
  ];
  const statsGrid = document.createElement("div");
  statsGrid.className = "grid grid-cols-2 mt-5 gap-5";
  stats.forEach(stat => {
    const statCard = document.createElement("div");
    statCard.className = "text-center border-2 border-gray-200/30 rounded-lg p-5";

    const statNumber = document.createElement("h3");
    statNumber.className = "text-2xl mt-4 text-blue-primary";
    statNumber.textContent = stat.number;

    const statText = document.createElement("p");
    statText.className = "text-gray-500 mt-4";
    statText.textContent = stat.text;

    statCard.appendChild(statNumber);
    statCard.appendChild(statText);
    statsGrid.appendChild(statCard);
  });
  infosText.appendChild(statsGrid);
  infosSection.appendChild(infosText);
  div.appendChild(infosSection);

  // Section des fonctionnalités
  const featuresSection = document.createElement("div");
  featuresSection.className = "grid grid-cols-1 md:grid-cols-2 2xl:container mx-auto px-0 2xl:px-44 mt-10 md:mt-32";

  const featuresText = document.createElement("div");
  featuresText.className = "md:pr-20 pr-0";

  const featuresHeading = document.createElement("span");
  featuresHeading.className = "text-blue-200/50 text-md";
  featuresHeading.textContent = "KEY FEATURES";
  featuresText.appendChild(featuresHeading);

  const featuresSubheading = document.createElement("h2");
  featuresSubheading.className = "text-4xl mt-4";
  featuresSubheading.textContent = "WE OFFER BEST SERVICES";
  featuresText.appendChild(featuresSubheading);

  const featuresDescription = document.createElement("p");
  featuresDescription.className = "text-gray-500 mt-4";
  featuresDescription.textContent = "We offer a wide range of services to help you make the most of your Olympic Games experience. From event information to spots to visit, we have you covered.";
  featuresText.appendChild(featuresDescription);

  const featuresList = [
    { img: ServicesImg01, title: "WE OFFER BEST SERVICES", text: "Get the latest news about the Olympic Games." },
    { img: ServicesImg02, title: "SCHEDULE YOUR TRIP", text: "Get the latest news about the Olympic Games." },
    { img: ServicesImg03, title: "GET BEST ITINARY", text: "Get the latest news about the Olympic Games." }
  ];
  featuresList.forEach(feature => {
    const featureItem = document.createElement("div");
    featureItem.className = "flex mt-8";

    const featureImg = document.createElement("img");
    featureImg.src = feature.img;
    featureImg.alt = feature.title;

    const featureContent = document.createElement("div");
    featureContent.className = "flex flex-col ml-5";

    const featureTitle = document.createElement("h3");
    featureTitle.className = "font-bold text-2xl";
    featureTitle.textContent = feature.title;

    const featureText = document.createElement("p");
    featureText.textContent = feature.text;

    featureContent.appendChild(featureTitle);
    featureContent.appendChild(featureText);

    featureItem.appendChild(featureImg);
    featureItem.appendChild(featureContent);
    featuresText.appendChild(featureItem);
  });
  featuresSection.appendChild(featuresText);

  const featuresImage = document.createElement("div");
  featuresImage.className = "items-center justify-center md:flex hidden";

  const featuresImgLight = document.createElement("img");
  featuresImgLight.src = HomeSectionServices;
  featuresImgLight.alt = "home_banner_img_left";
  featuresImgLight.className = "w-auto h-auto block dark:hidden";
  const featuresImgDark = document.createElement("img");
  featuresImgDark.src = HomeSectionServicesDark;
  featuresImgDark.alt = "home_banner_img_left";
  featuresImgDark.className = "w-auto h-auto hidden dark:block";
  featuresImage.appendChild(featuresImgLight);
  featuresImage.appendChild(featuresImgDark);
  featuresSection.appendChild(featuresImage);
  div.appendChild(featuresSection);

  // Ajout du script pour la rotation des images
  const script = document.createElement("script");
  script.innerHTML = `
    let images = Array.from(document.querySelectorAll('.image'));
    let index = 0;

    images[0].style.opacity = '1';

    setInterval(function() {
        images[index].style.opacity = '0';
        index = (index + 1) % images.length;
        images[index].style.opacity = '1';
    }, 3000);
  `;
  div.appendChild(script);
  div.appendChild(Footer());

  return div;
}
