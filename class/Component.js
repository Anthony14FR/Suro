import generateStructure from "../core/generateStructure.js";

class Component {
    constructor() {
        this.state = {};
        this.props = {};
        this.element = undefined;
        this.structure = undefined;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        const newStructure = this.render();
        if (this.element && this.element.parentNode) {
            this.element.replaceWith(newStructure);
        }
        this.element = newStructure;
    }

    render() {
        return generateStructure(this.structure);
    }
}

export default Component;
