import Component from "./Component.js";
import MapStructure from "../structures/MapStructure.js";

class MapClass extends Component {
    constructor() {
        super();
        this.structure = MapStructure();
        this.render();
    }

}

export default MapClass;