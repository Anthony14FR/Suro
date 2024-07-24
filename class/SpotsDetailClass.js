import Component from "../core/Component.js";
import NavbarClass from "./NavbarClass.js";
import FooterClass from "./FooterClass.js";
import loadSpots from "../api/loadSpots.js";

class SpotDetailClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spot: null,
            isLoading: true
        };
    }

    async componentDidMount() {
        const params = new URL(document.location.toString()).searchParams;
        const siteCode = params.get("siteCode");
        const spotName = params.get("spotName");
        if (siteCode && spotName) {
            const spotData = await this.fetchSpotData(siteCode, spotName);
            this.setState({ spot: spotData, isLoading: false });
        } else {
            this.setState({ isLoading: false });
        }
    }

    async fetchSpotData(siteCode, spotName) {
        const allSpots = await loadSpots();
        const siteSpots = allSpots[siteCode];
        if (siteSpots) {
            return siteSpots.find(spot => spot.nom === decodeURIComponent(spotName));
        }
        return null;
    }

    render() {
        if (this.state.isLoading) {
            return {
                tag: "div",
                props: { class: "flex justify-center items-center h-screen" },
                children: [{ tag: "p", children: ["Loading..."] }]
            };
        }

        const { spot } = this.state;

        if (!spot) {
            return {
                tag: "div",
                props: { class: "flex justify-center items-center h-screen" },
                children: [{ tag: "p", children: ["Spot not found"] }]
            };
        }

        return {
            tag: "div",
            children: [
                { tag: NavbarClass },
                {
                    tag: "div",
                    props: { class: "container mx-auto px-4 py-8" },
                    children: [
                        {
                            tag: "div",
                            props: { class: "bg-white shadow-lg rounded-lg overflow-hidden" },
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        src: "/src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg",
                                        alt: spot.nom,
                                        class: "w-full h-64 object-cover"
                                    }
                                },
                                {
                                    tag: "div",
                                    props: { class: "p-6" },
                                    children: [
                                        {
                                            tag: "h1",
                                            props: { class: "text-3xl font-bold mb-4" },
                                            children: [spot.nom]
                                        },
                                        {
                                            tag: "p",
                                            props: { class: "text-gray-700 mb-4" },
                                            children: [spot.description]
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "flex items-center mb-4" },
                                            children: [
                                                {
                                                    tag: "span",
                                                    props: { class: "mr-2" },
                                                    children: [{ tag: "i", props: { class: "fas fa-map-marker-alt" } }]
                                                },
                                                { tag: "span", children: [spot.adresse] }
                                            ]
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "flex items-center mb-4" },
                                            children: [
                                                {
                                                    tag: "span",
                                                    props: { class: "mr-2" },
                                                    children: [{ tag: "i", props: { class: "fas fa-calendar" } }]
                                                },
                                                { tag: "span", children: ["Dates des Jeux Olympiques"] }
                                            ]
                                        },
                                        {
                                            tag: "button",
                                            props: {
                                                class: "mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
                                                onClick: () => {
                                                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;
                                                    window.open(googleMapsUrl, '_blank');
                                                }
                                            },
                                            children: ["Voir Ma Position"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { tag: FooterClass }
            ]
        };
    }
}

export default SpotDetailClass;