import Component from "./Component.js";
import loadSpots from "../api/loadSpots.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";
import {fetchParis2024SiteByCode} from "../api/fetchParis2024Sites.js";

class SpotsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      site: null
    };
  }

  async componentDidMount() {
    const params = new URL(document.location.toString()).searchParams;
    let searchParams = new URLSearchParams(params);

    if (searchParams.has("siteCode")) {
      const siteCode = searchParams.get("siteCode");
      const allSpots = loadSpots();
      const spots = Object.keys(allSpots).includes(siteCode) ? allSpots[siteCode] : [];
      this.setState({ spots });
      await this.fetchSite(siteCode);
    } else {
      console.error("No siteCode found in URL parameters")
    }
  }

  async fetchSite(siteCode) {
    try {
      const data = await fetchParis2024SiteByCode(siteCode);
      this.setState({ site: data[0] });
    } catch (error) {
      console.error("Erreur lors de la récupération des données: ", error);
    }
  }

  renderSpots() {
    return this.state.spots.map(spot => (
      {
        tag: "div",
        props: { class: "bg-white dark:bg-base-300 shadow-lg rounded-md p-4 mb-4" },
        children: [
          { tag: "h2", props: { class: "text-xl font-bold" }, children: [spot.nom] },
          { tag: "p", props: { class: "text-gray-600" }, children: [spot.adresse] },
          { tag: "p", props: { class: "mt-2" }, children: [spot.description] },
        ]
      }
    ));
  }

  render() {
    return {
      tag: "div",
      children: [
        {tag: NavbarClass},
        {
          tag: "div",
          props: {
            class: "2xl:container mx-auto px-0 2xl:px-44 my-10",
          },
          children: [
            {
              tag: "h1",
              props: { class: "text-3xl font-bold mb-6" },
              children: ["Spots for Event Site"]
            },
            {
              tag: "div",
              props: { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" },
              children: this.renderSpots()
            }
          ]
        },
        {tag: FooterClass}
      ]
    };
  }
}

export default SpotsClass;
