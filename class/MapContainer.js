import Component from "./Component.js";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.initializeMap().then(() => {
        this.updateMapWithSites(this.props.sites);
        if (this.props.userPosition) {
          this.addUserPosition(this.props.userPosition);
        }
      }).catch(error => console.error(error));
    }, 0);
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
    return new Promise((resolve, reject) => {
      const mapElement = document.getElementById('map');
      if (mapElement) {
        if (typeof L === 'undefined') {
          reject("Leaflet is not loaded");
          return;
        }
        this.map = L.map(mapElement).setView([48.8566, 2.3522], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        console.log("Map initialized");
        resolve();
      } else {
        console.error("Élément avec l'ID 'map' non trouvé.");
        reject("Élément avec l'ID 'map' non trouvé.");
      }
    });
  }

  updateMapWithSites(sites) {
    if (!this.map) return;
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

  zoomToCoordinates(lat, lng) {
    if (this.map) {
      this.map.setView([lat, lng], 15); // Zoom level 15, vous pouvez ajuster selon vos besoins
    }
  }

  render() {
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