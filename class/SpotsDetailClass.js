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
        this.map = null;
    }

    async componentDidMount() {
        const params = new URL(document.location.toString()).searchParams;
        const siteCode = params.get("siteCode");
        const spotName = params.get("spotName");
        if (siteCode && spotName) {
            const spotData = await this.fetchSpotData(siteCode, spotName);
            this.setState({ spot: spotData, isLoading: false }, () => {
                this.initializeMap();
            });
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

    initializeMap() {
        const { spot } = this.state;
        if (!spot) return;

        const mapElement = document.getElementById('map');
        if (mapElement && typeof L !== 'undefined') {
            if (this.map) this.map.remove();

            const lat = typeof spot.latitude === 'string' ? parseFloat(spot.latitude.replace(',', '.')) : spot.latitude;
            const lng = typeof spot.longitude === 'string' ? parseFloat(spot.longitude.replace(',', '.')) : spot.longitude;

            this.map = L.map(mapElement).setView([lat, lng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            L.marker([lat, lng]).addTo(this.map)
                .bindPopup(spot.nom)
                .openPopup();
        }
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
                    props: { class: "container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4" },
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
                                                    children: [{ tag: "i", props: { class: "fas fa-wheelchair" } }]
                                                },
                                                { tag: "span", children: ["Accessible aux PMR"] }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            tag: "div",
                            props: { class: "bg-white shadow-lg rounded-lg overflow-hidden" },
                            children: [
                                {
                                    tag: "div",
                                    props: {
                                        id: "map",
                                        style: "height: 668px; width: 100%;"
                                    }
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