import Component from "./Component.js";
import SpotsStructure from "../structures/SpotsStructure.js";

class SpotsClass extends Component {
    constructor() {
        super();
        this.structure = SpotsStructure();
        this.render();
    }

}

export default SpotsClass;