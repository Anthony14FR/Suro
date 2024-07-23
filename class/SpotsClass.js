import Component from "../core/Component.js";
import loadSpots from "../api/loadSpots.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";
import {fetchParis2024SiteByCode} from "../api/fetchParis2024Sites.js";
import SpotsMapClass from "./SpotsMapClass.js";

class SpotsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      site: null
    };
    this.map = null;
    this.getDirections = this.getDirections.bind(this);
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

  getDirections() {
    const { lat, lng } = this.props;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}`;
            window.open(googleMapsUrl, '_blank');
          },
          (error) => {
            console.error('Error getting user location', error);
          }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
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
          {tag: "button", props: { class: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" }, children: ["View Spot"]},
          {
            tag: 'button',
            props: {
              class: 'btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3',
              onClick: this.getDirections,
            },
            children: [
              { tag: 'i', props: { class: 'fas fa-directions fa-lg' } },
            ],
          },
        ]
      }
    ));
  }

  renderSiteCard() {
    return {
      tag: "div",
      props: { class: "bg-white dark:bg-base-300 shadow-lg rounded-md p-4 mb-6 w-[350px] h-full" },
      children: [
        {
          tag: "div", 
          props: { class: "mb-4" },
          children: [
            { tag: "h3", props: { class: "text-lg font-semibold" }, children: ["site name"] },
            { tag: "p", props: { class: "text-sm text-gray-500" }, children: ["site description"] }
          ]
        },
        {
          tag: "div",
          props: { class: "space-y-4" },
          children: [
            {
              tag: "div",
              children: [
                { tag: "label", props: { class: "text-sm font-medium", htmlFor: "sport" }, children: ["Sport"] },
                { tag: "p", props: { id: "sport", class: "mt-1" }, children: ["site sports"] }
              ]
            },
            {
              tag: "div",
              children: [
                { tag: "label", props: { class: "text-sm font-medium", htmlFor: "dates" }, children: ["Dates"] },
                { tag: "p", props: { id: "dates", class: "mt-1" }, children: ["sports start date and end date"] }
              ]
            }
          ]
        },
        {
          tag: "div",
          props: { class: "flex justify-between mt-6" },
          children: [
            {
              tag: "button",
              props: { 
                class: "px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200",
              //  onClick: this.handleCancel
              },
              children: ["Cancel"]
            },
            {
              tag: "button",
              props: { 
                class: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
              //  onClick: this.handleViewMyPosition
              },
              children: ["View My Position"]
            }
          ]
        }
      ]
    };
  }

  render() {
    return {
      tag: "div",
      children: [
        {tag: NavbarClass},
        {
          tag: "div",
          props: {
            class: "2xl:container mx-auto px-0 2xl:px-44 my-10 flex",
          },
          children: [
            {
              tag: "div",
              props: { class: "w-1/3 pr-4" },
              children: [
                this.renderSiteCard(),
              ]
            },
            {
              tag: "div",
              props: { class: "w-2/3" },
              children: [
                {
                  tag: SpotsMapClass,
                }
              ]
            },
          ]
        },
        {
          tag: "div",
          props: {
            class: "w-full xl:overflow-x-scroll xl:overflow-x-hidden overflow-x-scroll overflow-x-hidden xl:h-full pr-4 flex space-x-5 xl:space-x-0",
            id: "cardContainer",
          },
          children: this.renderSpots(),
        },
        {tag: FooterClass}
      ]
    };
  }
}

export default SpotsClass;
