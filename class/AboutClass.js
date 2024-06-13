import Component from "./Component.js";
import AboutStructure from "../structures/AboutStructure.js";


class AboutClass extends Component {
    constructor() {
        super();
        this.structure = AboutStructure();
        this.render();
    }

}

export default AboutClass;