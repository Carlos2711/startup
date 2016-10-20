class EventEmitter {

  constructor() {
    this.observables = {};
  }

  on (event, listener) {
    //pass a callback or listener that will be executed each time a given event is triggered
    this.observables[event] = listener;
  }

  emit (event) {
    //allow a class to trigger events to be consumed by other functions/objects.
    if(this.observables[event]){
      this.observables[event](event);
    }
  }

  off (event) {
    //delete from the observables
    // console.log(1, this.observables[event])

    if (this.observables[event]) {
      delete this.observables[event];
    }
  }

}

export {EventEmitter}
