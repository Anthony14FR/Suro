import Component from "./Component";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
    this.userMarker = null;
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

  update(prevState, newState) {
    console.log('MapContainer update');
    if (this.map) {
      if (prevProps.sites !== this.props.sites) {
        console.log("Sites updated:", this.props.sites);
        this.updateMapWithSites(this.props.sites);
      }
      if (prevProps.userPosition !== this.props.userPosition && this.props.userPosition) {
        console.log("User position updated:", this.props.userPosition);
        this.addUserPosition(this.props.userPosition);
      }
      if (this.props.selectedSite) {
        this.zoomToPosition(this.props.selectedSite.latitude, this.props.selectedSite.longitude);
      }
    }
    super.update();
  }

  componentDidUpdate(prevProps) {
    console.log('didUpdate:', this.props.selectedSite, prevProps.selectedSite)
    if (this.map) {
      if (prevProps.sites !== this.props.sites) {
        console.log("Sites updated:", this.props.sites);
        this.updateMapWithSites(this.props.sites);
      }
      if (prevProps.userPosition !== this.props.userPosition && this.props.userPosition) {
        console.log("User position updated:", this.props.userPosition);
        this.addUserPosition(this.props.userPosition);
      }
      if (this.props.selectedSite) {
        this.zoomToPosition(this.props.selectedSite.latitude, this.props.selectedSite.longitude);
      }
    }
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
              <button class="find-spots-btn" data-site-code="${site.code_site}">Find Spots</button>
            </div>
          `);
        marker.on('popupopen', () => {
          const btn = marker.getPopup().getElement().querySelector('.find-spots-btn');
          if (btn) {
            btn.className = "btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3";
            btn.addEventListener("click", (event) => {
              event.preventDefault();
              const siteCode = btn.getAttribute('data-site-code');
              window.history.pushState({ siteCode }, null, `/spots?siteCode=${siteCode}`);
              window.dispatchEvent(new Event("pushstate"));
            });
          }
        });
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
      html: '<div style="background-color:blue;width:20px;height:20px;border-radius:50%;"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
    });
    this.userMarker = L.marker(userPosition, { icon: userIcon }).addTo(this.map)
      .bindPopup("Vous êtes ici");
    // this.userMarker = L.marker(userPosition, { icon: userIcon }).addTo(this.map)
    //   .bindPopup("Vous êtes ici").openPopup();
  }

  zoomToPosition(lat, lng) {
    console.log('MapContainer: zoomToPosition called with', lat, lng);
    if (this.map) {
      console.log('Carte existante, zoom sur les coordonnées');
      console.log(this.map.setView([lat,lng]));
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