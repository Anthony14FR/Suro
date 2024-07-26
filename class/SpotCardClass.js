import Component from "../core/Component.js";

class SpotCardClass extends Component {
  constructor(props) {
    super(props);
    this.getDirections = this.getDirections.bind(this);
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

  render() {
    const { title, sports, startDate, endDate, lat, lng } = this.props;
    return {
      tag: 'div',
      props: {
        class: 'card bg-white dark:bg-base-300 shadow-lg rounded-lg overflow-hidden',
      },
      children: [
        {
          tag: 'div',
          props: {
            class: 'h-40 bg-cover bg-center',
            style: 'background-image: url("/src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg");',
          },
        },
        {
          tag: 'div',
          props: {
            class: 'p-4',
          },
          children: [
            {
              tag: 'h2',
              props: {
                class: 'text-xl font-bold mb-2 flex items-center',
              },
              children: [
                { tag: 'i', props: { class: 'fas fa-landmark mr-2' } },
                title,
              ],
            },
            {
              tag: 'p',
              props: {
                class: 'flex items-center mb-2',
              },
              children: [
                { tag: 'i', props: { class: 'fas fa-running mr-2' } },
                `Sports: ${sports}`,
              ],
            },
            {
              tag: 'p',
              props: {
                class: 'flex items-center mb-4',
              },
              children: [
                { tag: 'i', props: { class: 'far fa-calendar-alt mr-2' } },
                `From: ${startDate} To: ${endDate}`,
              ],
            },
            {
              tag: 'button',
              props: {
                class: 'w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded',
                onClick: this.getDirections,
              },
              children: ['Voir Ma Position'],
            },
          ],
        },
      ],
    };
  }
}

export default SpotCardClass;