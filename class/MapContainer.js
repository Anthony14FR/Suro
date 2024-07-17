import Component from "./Component";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInitialized: false
    };
    this.map = null;
  }

  getMap() {
    return this.map;
  }

  componentDidMount() {
    console.log('MapContainer monté');
    if (!this.map) {
      this.initializeMap().then(() => {
        this.updateMapWithSites(this.props.sites);
        if (this.props.userPosition) {
          this.addUserPosition(this.props.userPosition);
        }
      }).catch(error => console.error('Erreur d\'initialisation de la carte:', error));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.map) {
      if (prevProps.sites !== this.props.sites) {
        console.log("Sites updated:", this.props.sites);
        this.updateMapWithSites(this.props.sites);
      }
      if (prevProps.userPosition !== this.props.userPosition && this.props.userPosition) {
        console.log("User position updated:", this.props.userPosition);
        this.addUserPosition(this.props.userPosition);
      }
    }
  }

  initializeMap() {
    if (this.map) {
      console.log("La carte est déjà initialisée");
      return Promise.resolve(this.map);
    }
  
    return new Promise((resolve, reject) => {
      const mapElement = document.getElementById('map');
      if (mapElement && typeof L !== 'undefined') {
        try {
          if (!this.map) {
            this.map = L.map(mapElement).setView([48.8566, 2.3522], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
            console.log("Carte initialisée", this.map);
          }
          this.updateMapWithSites(this.props.sites);
          if (this.props.userPosition) {
            this.addUserPosition(this.props.userPosition);
          }
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
    
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
  
    sites.forEach((site) => {
      const lat = parseFloat(site.latitude.replace(",", "."));
      const lng = parseFloat(site.longitude.replace(",", "."));
      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(this.map)
          .bindPopup(`
            <div>
              <b>${site.nom_site}</b><br>
              Sports: ${site.sports}<br>
            </div>
          `);
      } else {
        console.error(`Invalid coordinates for site: ${site.nom_site}`);
      }
    });
  }

  addUserPosition(userPosition) {
    if (!this.map || !userPosition) return;
    const userIcon = L.divIcon({
      className: 'custom-div-icon',
      html: '<div style="background-color:blue;width:20px;height:20px;border-radius:50%;"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
    });
    L.marker(userPosition, { icon: userIcon }).addTo(this.map)
      .bindPopup("Vous êtes ici")
      .openPopup();
    this.map.setView(userPosition, 12);
  }

  zoomToPosition(lat, lng) {
    console.log('MapContainer: zoomToPosition called with', lat, lng);
    if (this.map) {
      console.log('Carte existante, zoom sur les coordonnées');
      this.map.setView([lat, lng], 15);
    } else {
      console.log('La carte n\'est pas encore initialisée, initialisation en cours...');
      this.initializeMap().then(() => {
        console.log('Carte initialisée, zoom sur les coordonnées');
        this.map.setView([lat, lng], 15);
      }).catch(error => console.error('Erreur lors du zoom:', error));
    }
  }

  render() {
    console.log('MapContainer render');
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