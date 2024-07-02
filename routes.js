import AboutClass from "./class/AboutClass.js";
import NotFoundClass from "./class/NotFoundClass.js";
import HomeClass from "./class/HomeClass.js";
import DiscoverClass from "./class/DiscoverClass.js";
import MapClass from "./class/MapClass.js";
import SpotsClass from "./class/SpotsClass.js";

export default {
    "/": () => (new HomeClass()),
    "/about": () => (new AboutClass()),
    "/discover": () => (new DiscoverClass()),
    "/spots": () => (new SpotsClass()),
    "/map": () => (new MapClass()),
    "*": () => (new NotFoundClass()),
};