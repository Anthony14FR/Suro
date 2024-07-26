import Component from "../core/Component.js";

class CardClass extends Component {
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
    const { title, sports, startDate, endDate, buttonText, viewSpots, lat, lng } = this.props;
    return {
      tag: 'div',
      props: {
        class: 'card xl:w-full xl-h-auto bg-base-100 dark:bg-base-300 shadow-md mb-4 animate__animated animate__fadeIn',
      },
      children: [
        {
          tag: 'div',
          props: {
            class: 'card-header bg-cover bg-center h-8 rounded-t-xl shadow-md',
            style: 'background-image: url("/src/assets/images/olympic-bright-circle-colorful-wallpaper.jpg");',
          },
        },
        {
          tag: 'div',
          props: {
            class: 'card-body xl:w-full w-[350px] flex justify-between xl:flex-col',
          },
          children: [
            {
              tag: 'div',
              props: {
                class: 'card-title text-lg font-semibold flex items-center text-green-400 dark:text-white',
              },
              children: [
                { tag: 'i', props: { class: 'fas fa-heading fa-lg mr-2' } },
                title,
              ],
            },
            {
              tag: 'div',
              props: {
                class: 'flex items-center text-sm',
              },
              children: [
                { tag: 'i', props: { class: 'fas fa-futbol mr-2' } },
                `Sports: ${sports}`,
              ],
            },
            {
              tag: 'div',
              props: {
                class: 'flex items-center text-sm',
              },
              children: [
                { tag: 'i', props: { class: 'fas fa-calendar-alt mr-2' } },
                `From: ${startDate} To: ${endDate}`,
              ],
            },
            {
              tag: 'div',
              props: {
                class: 'card-actions justify-end',
              },
              children: [
                {
                  tag: "button",
                  props: {
                    class: "btn bg-blue-primary hover:bg-blue-200 text-white dark:bg-blue-primary dark:hover:bg-blue-200 dark:text-white text-xs flex items-center mt-3",
                    id: "viewSpots",
                    onClick: viewSpots,
                  },
                  children: [
                    { tag: "i", props: { class: "fas fa-map-marker-alt mr-2" } },
                    buttonText,
                  ],
                },
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
              ],
            },
          ],
        },
      ],
    };
  }
}

export default CardClass;
