import {Actor} from './actor';
import {EventEmitter} from './eventEmitter';
import {Logger} from './logger';
import {Movie} from './movie';
import {Social} from './social';

let jurassic = new Movie('Jurassic Park', 1993, 127);
Object.assign(jurassic , Social);
jurassic.share('Bruno');

//testing method addCast
let sam = new Actor('Sam Neill', 30);
let otherCast = [
 new Actor('Laura Dern', 26),
 new Actor('Richard Attenborough', 60),
 new Actor('Jeff Goldblum', 27)
];

jurassic.addCast(sam);
jurassic.addCast(otherCast);

//testing Logger
// let logger = new Logger();
// jurassic.on('play', logger.log);
// jurassic.play();

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

//Testing class Actor
// let actor1 = new Actor('Sam Neill', 30);
// let actor2 = new Actor('Laura Dern', 26);
// let actor3 = new Actor('Richard Attenborough', 60);
// let actor4 = new Actor('Jeff Goldblum', 27);
