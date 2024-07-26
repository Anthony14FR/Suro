import AboutClass from "./class/AboutClass.js";
import NotFoundClass from "./class/NotFoundClass.js";
import HomeClass from "./class/HomeClass.js";
import DiscoverClass from "./class/DiscoverClass.js";
import MapClass from "./class/MapClass.js";
import SpotsClass from "./class/SpotsClass.js";
import SpotDetailClass from "./class/SpotsDetailClass.js";

export default {
  "/": HomeClass,
  "/about": AboutClass,
  "/discover": DiscoverClass,
  "/spots": SpotsClass,
  "/spot-detail": SpotDetailClass,
  "/map": MapClass,
  "*": NotFoundClass,
};