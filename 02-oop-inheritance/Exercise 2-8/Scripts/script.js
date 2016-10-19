
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
    this.observables[event](event);
  }

  off (event) {
    //delete from the observables
    // console.log(1, this.observables[event])

    if (this.observables[event]) {
      delete this.observables[event];
    }
  }

}

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

class Movie extends EventEmitter {

  constructor (ntitle, nyear, nduration) {
    super();
    this.tittle = ntitle;
    this.year = nyear ;
    this.duration = nduration ;
    this.cast = [];
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

  addCast(actors) {
    this.cast = this.cast.concat(actors);
  }
}
//testing Movie
// let terminator = new Movie ('Terminator', 1990, 120);
// console.log(terminator.tittle);
// console.log(terminator.year);

class Logger {
  log (info) {
    console.log('The ' + info + ' event has been emitted.');
  }
}
//testing Logger
let jurassic = new Movie('Jurassic Park', 1993, 127);
// let logger = new Logger();
// jurassic.on('play', logger.log);
// jurassic.play();

let Social = {
  share: function (friendName) {
    console.log(`${friendName} share ${this.tittle}`);
  },

  like: function (friendName) {
    console.log(`${friendName} like ${this.tittle}`);
  }

};

Object.assign(jurassic , Social);

jurassic.share('Bruno');

class Actor {
  constructor ( nname, nedad) {
    this.name = nname;
    this.edad = nedad;
  }

  getName(){
    return this.name;
  }

  getEdad(){
    return this.edad;
  }

  setName(value){
    this.name = value;
  }

  setEdad(value){
    this.edad = value;
  }

}
//Testing class Actor
/*let actor1 = new Actor('Sam Neill', 30);
let actor2 = new Actor('Laura Dern', 26);
let actor3 = new Actor('Richard Attenborough', 60);
let actor4 = new Actor('Jeff Goldblum', 27);
*/

//testing method addCast
let sam = new Actor('Sam Neill', 30);
let otherCast = [
 new Actor('Laura Dern', 26),
 new Actor('Richard Attenborough', 60)
 new Actor('Jeff Goldblum', 27)
];

jurassic.addCast(sam);
jurassic.addCast(otherCast);
