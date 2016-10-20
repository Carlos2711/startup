import {EventEmitter} from './eventEmitter';

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

export {Movie}
