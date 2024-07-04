import ReactDOM from "../core/ReactDOM";

class Component {
    constructor() {
        this.state = {};
        this.props = {};
        this.element = undefined;
        this.structure = undefined;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        const prevState = { ...this.state };
        if (this.hasChanged(prevState, this.state)) {
          this.update();
        }
      }

      update() {
        if (this.element) {
          ReactDOM.updateComponent(this);
        }
      }

    
    hasChanged(oldProps, newProps, oldState, newState) {
        const propsChanged = JSON.stringify(oldProps) !== JSON.stringify(newProps);
        const stateChanged = JSON.stringify(oldState) !== JSON.stringify(newState);
        return propsChanged || stateChanged;
    }

    render() {
        throw new Error("render must be implemented")
    }
}

export default Component;
