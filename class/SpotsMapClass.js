import Component from "../core/Component.js";

class SpotsMapClass extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("SpotsMapClass componentDidMount");
    }

    async initializeMap() {
        if (this.map) {
            console.log("La carte est déjà initialisée");
            return Promise.resolve(this.map);
        }

        return new Promise((resolve, reject) => {
            const mapElement = document.getElementById('map');
            if (mapElement && typeof L !== 'undefined') {
                try {
                    this.map = L.map(mapElement).setView([parseFloat(this.props.selectedSite.latitude.replace(",", ".")), parseFloat(this.props.selectedSite.longitude.replace(",", "."))], 15);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(this.map);
                    console.log("Carte initialisée", this.map);
                    resolve(this.map);
                } catch (error) {
                    console.error("Erreur lors de l'initialisation de la carte:", error);
                    reject(error);
                }
            } else {
                console.error("Élément avec l'ID 'map' non trouvé ou Leaflet non chargé.");
                reject("Élément avec l'ID 'map' non trouvé ou Leaflet non chargé.");
            }
        });
    }

    render() {
        return {
            tag: "div",
            props: { id: "map",  style: "height: 668px; width: 100%;", class: "bg-white dark:bg-base-300 shadow-lg rounded-md p-4 mb-6 w-[350px] h-full"},
            children: []
        };
    }
}
export default SpotsMapClass;