class Dispatcher {
    constructor() {
      this.listeners = [];
    }
  
    addEventListener(listener) {
      this.listeners.push(listener);
    }
  
    dispatch(component) {
      this.listeners.forEach(listener => listener(component));
    }
  }
  
  const dispatcher = new Dispatcher();
  
  export default dispatcher;
  