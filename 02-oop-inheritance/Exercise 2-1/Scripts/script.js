class Movie{

  constructor (ntitle, nyear, nduration) {

    this.tittle = ntitle;
    this.year = nyear ;
    this.duration = nduration ;
  }

  setTitle (value) {
    this.tittle = value;
  }

  getTitle () {
    return this.tittle;
  }

  setYear (value) {
    this.year = value;
  }

  getYear () {
    return this.year;
  }

  setDuration (value) {
    this.duration = value;
  }

  getDuration () {
    return this.duration;
  }

  play(){
     //undefined now
  }

  pause(){
      //undefined now
  }

  resume(){
      //undefined now
  }
}

let terminator = new Movie ('Terminator', 1990, 120);
console.log(terminator.tittle);
console.log(terminator.year);

class EventEmitter {

  EventEmitter () {
    this.observables = {};
  }

  on (event, listener) {
    //pass a callback or listener that will be executed each time a given event is triggered
    //create an object for the event and the callback to insert in observables
    if(this.observables.find(event)){
      Console.log('This event already registered.');
    }
    else{
      let observable = new observable ( event, listener);
      this.observables.push(observable);
    }

    this.observables[event] = listener;
  }

  emit () {
    //allow a class to trigger events to be consumed by other functions/objects.
    //validate


  }

  off (event) {
    //delete the listener
    //delete from the observables

    console.log(1, this.observables[event])

    if (this.observables[event]) {
      delete this.observables[event];
    }

      }
}
