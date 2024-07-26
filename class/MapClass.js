import Component from "../core/Component.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";
import {fetchParis2024Sites} from "../api/fetchParis2024Sites.js";
import MapContainer from "./MapContainer.js";
import CardClass from "./CardClass.js";

class MapClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      userPosition: null,
      selectedSite: null,
    };
    this.viewSpots = this.viewSpots.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
    this.locateUser();
  }

  componentDidUpdate(){
    console.log("MapClass component did update");
  }

  async fetchData() {
    try {
      const data = await fetchParis2024Sites();
      this.setState({ sites: data });
    } catch (error) {
      console.error("Erreur lors de la récupération des données: ", error);
    }
  }

  locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = [position.coords.latitude, position.coords.longitude];
          this.setState({ userPosition });
        },
        (error) => {
          console.error("Erreur de géolocalisation: ", error);
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }

  viewSpots(site) {
    const siteCode = site.code_site;
    window.history.pushState({ siteCode }, null, `/spots?siteCode=${siteCode}`);
    window.dispatchEvent(new Event("pushstate"));
  }

  createCard(site) {
    const onButtonClick = () => {
      this.viewSpots(site);
    };

      return {
        tag: CardClass,
        props: {
        title: site.nom_site,
        sports: site.sports,
        startDate: site.start_date,
        endDate: site.end_date,
        buttonText: "View Spots",
        viewSpots: () => this.viewSpots(site),
        lat: parseFloat(site.latitude.replace(",", ".")),
        lng: parseFloat(site.longitude.replace(",", "."))
      }
    };
  }
   
  render() {
    return {
      tag: "div",
      children: [
        { tag: NavbarClass },
        {
          tag: "div",
          props: {
            class: "p-4 xl:h-[700px] h-[1260px] flex flex-col gap-4 2xl:container mx-auto px-0 2xl:px-44"
          },
          children: [
            {
              tag: "div",
              props: { class: "flex gap-4 h-full xl:flex-row flex-col xl:flex-1 flex-1" },
              children: [
                {
                  tag: "div",
                  props: {
                    class: "w-full xl:overflow-y-scroll h-[700px] xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden xl:h-full pr-4 xl:w-3/5 flex xl:flex-col space-x-5 xl:space-x-0",
                    id: "cardContainer",
                  },
                  children: this.state.sites.map(site => this.createCard(site)),
                },
                {
                  tag: MapContainer,
                  props: {
                    sites: this.state.sites,
                    userPosition: this.state.userPosition,
                  },
                }
              ]
            }
          ]
        },
        { tag: FooterClass },
      ]
    };
  }
}

export default MapClass;
