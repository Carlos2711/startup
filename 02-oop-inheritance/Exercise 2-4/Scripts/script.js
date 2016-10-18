
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
    this.observables[event]();
  }

  off (event) {
    //delete from the observables
    // console.log(1, this.observables[event])

    if (this.observables[event]) {
      delete this.observables[event];
    }

  }
}

class Movie extends EventEmitter {

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
    super.emit('play');
  }

  pause(){
    super.emit('pause');
  }

  resume(){
    super.emit('resume');
  }
}
//testing Movie
// let terminator = new Movie ('Terminator', 1990, 120);
// console.log(terminator.tittle);
// console.log(terminator.year);



//testing EventEmitter
// function hello() {
//  alert("Hello");
// }
//
// let eventEmitter = new EventEmitter();
// eventEmitter.on("exampleEvent", hello);
//
// setTimeout(function() {
//  eventEmitter.emit("exampleEvent");
//  eventEmitter.off("exampleEvent");
// }, 3000);
