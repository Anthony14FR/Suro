import DiscoverStructure from "../structures/DiscoverStructure.js";
import Component from "./Component.js";

export class DiscoverClass extends Component {
    constructor() {
        super();
        this.structure = DiscoverStructure();
        this.render();
    }


}export default DiscoverClass;
