import ReactDOM from "../core/ReactDOM";
import dispatcher from "../core/Dispatcher.js";

class Component {
  constructor() {
    this.state = {};
    this.props = {};
    this.element = undefined;
    this.structure = undefined;
  }

  setState(newState, callback) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...newState };
    if (this.hasChanged(prevState, this.state)) {
      dispatcher.dispatch(this);
      this.update();
      if (callback) callback();
    }
  }

  update() {
    if (this.element) {
      ReactDOM.updateComponent(this);
    } else {
      console.error("Component element is undefined, cannot update");
    }
  }

  hasChanged(oldProps, newProps, oldState, newState) {
    const propsChanged = JSON.stringify(oldProps) !== JSON.stringify(newProps);
    const stateChanged = JSON.stringify(oldState) !== JSON.stringify(newState);
    return propsChanged || stateChanged;
  }

  render() {
    throw new Error("render must be implemented");
  }
}

export default Component;
