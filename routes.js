import Spots from "./pages/Spots.js";
import AboutClass from "./class/AboutClass.js";
import NotFoundClass from "./class/NotFoundClass.js";
import HomeClass from "./class/HomeClass.js";
import DiscoverClass from "./class/DiscoverClass.js";
import MapClass from "./class/MapClass.js";
import SpotsClass from "./class/SpotsClass.js";

export default {
    "/": () => (new HomeClass()).structure,
    "/about": () => (new AboutClass()).structure,
    "/discover": () => (new DiscoverClass()).structure,
    "/spots": () => (new SpotsClass()).structure,
    "/map": () => (new MapClass()).structure,
    "*": () => (new NotFoundClass()).structure,
};

console.log(new HomeClass());