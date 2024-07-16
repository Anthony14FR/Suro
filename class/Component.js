import ReactDOM from "../core/ReactDOM";
import dispatcher from "../core/Dispatcher.js";

function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  });
}

class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
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


  hasChanged(oldState, newState) {
    return safeStringify(oldState) !== safeStringify(newState);
  }

  componentDidMount() {}
  
  render() {
    throw new Error("render must be implemented");
  }
}

export default Component;
