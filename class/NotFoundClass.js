import Component from "./Component.js";
import NotFoundStructure from "../structures/NotFoundStructure.js";

class NotFoundClass extends Component {
    constructor() {
        super();
        this.structure = NotFoundStructure();
        this.render();
    }

}

export default NotFoundClass;