import Component from "./Component.js";
import HomeStructure from "../structures/HomeStructure.js";
import CountdownStructure from "../structures/CountdownStructure.js";
import generateStructure from "../core/generateStructure.js";

class HomeClass extends Component {
    constructor() {
        super();
        this.structure = HomeStructure();
        this.render();

       // this.countdown();
    }

   /* countdown() {
        const countdownElement = generateStructure(CountdownStructure());
        document.body.appendChild(countdownElement);

        let images = Array.from(document.querySelectorAll('.image'));
        let index = 0;

        images[0].style.opacity = '1';

        setInterval(() => {
            images[index].style.opacity = '0';
            index = (index + 1) % images.length;
            images[index].style.opacity = '1';
        }, 3000);

        const daysSpan = countdownElement.querySelector(".days");
        const hoursSpan = countdownElement.querySelector(".hours");
        const minutesSpan = countdownElement.querySelector(".minutes");
        const secondsSpan = countdownElement.querySelector(".seconds");

        const targetTimestamp = 1722015000 * 1000;

        const updateCountdown = () => {
            const now = Date.now();
            const timeLeft = targetTimestamp - now;

            if (timeLeft <= 0) {
                daysSpan.textContent = "00 :";
                hoursSpan.textContent = "00 :";
                minutesSpan.textContent = "00 :";
                secondsSpan.textContent = "00";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            daysSpan.textContent = days.toString().padStart(2, '0') + " :";
            hoursSpan.textContent = hours.toString().padStart(2, '0') + " :";
            minutesSpan.textContent = minutes.toString().padStart(2, '0') + " :";
            secondsSpan.textContent = seconds.toString().padStart(2, '0');
        };

        const interval = setInterval(updateCountdown, 1000);
    }*/
}

export default HomeClass;
