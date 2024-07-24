import Component from "../core/Component.js";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
    this.userMarker = null;
  }

  componentDidMount() {
    if (!this.map) {
      this.initializeMap().then(() => {
        this.updateMapWithSites(this.props.sites);
        if (this.props.userPosition) {
          this.addUserPosition(this.props.userPosition);
        }
      }).catch(error => console.error('Erreur d\'initialisation de la carte:', error));
    }
  }

  componentDidUpdate() {
    console.log("MapContainer componentDidUpdate", this.props);
    }

  async initializeMap() {
    if (this.map) {
      return Promise.resolve(this.map);
    }
  
    return new Promise((resolve, reject) => {
      const mapElement = document.getElementById('map');
      if (mapElement && typeof L !== 'undefined') {
        try {
          this.map = L.map(mapElement).setView([48.8566, 2.3522], 12);
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

  updateMapWithSites(sites) {
    if (!this.map) return;
    
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];

    sites.forEach((site) => {
      const lat = parseFloat(site.latitude.replace(",", "."));
      const lng = parseFloat(site.longitude.replace(",", "."));
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng]).addTo(this.map)
          .bindPopup(`
            <div>
              <b>${site.nom_site}</b><br>
              Sports: ${site.sports}<br>
              Dates: ${site.start_date} - ${site.end_date}<br>
            </div>
          `);
        this.markers.push(marker);
      }
    });
  }

  addUserPosition(userPosition) {
    if (!this.map || !userPosition || this.selectedSite) return;
    if (this.userMarker) {
      this.map.removeLayer(this.userMarker);
    }
    const userIcon = L.divIcon({
      className: 'custom-div-icon',
      html: '<div style="background-color:purple;width:20px;height:20px;border-radius:50%;"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
    });
    this.userMarker = L.marker(userPosition, { icon: userIcon }).addTo(this.map)
      .bindPopup("Vous êtes ici");
  }

  render() {
    console.log("MapContainer render", this.props);
    return {
      tag: "div",
      props: {
        id: "map",
        style: "height: 668px; width: 100%;"
      }
    };
  }
}
export default MapContainer;