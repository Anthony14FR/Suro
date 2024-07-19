import Component from "./Component.js";
import loadSpots from "../api/loadSpots.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";

class SpotsClass extends Component {
  constructor() {
    super();
    this.state = {
      spots: [],
      siteCode: null
    };
  }

  componentDidMount() {
    const state = window.history.state;
    if (state && state.siteCode) {
      this.setState({ siteCode: state.siteCode }, () => {
        this.fetchSpots();
      });
    } else {
      console.error("No siteCode found in history state");
    }
  }

  fetchSpots() {
    loadSpots()
      .then((data) => {
        const spots = this.state.siteCode ? data[this.state.siteCode] : [];
        this.setState({ spots });
      })
      .catch((error) => {
        console.error("Error fetching spots: ", error);
      });
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
