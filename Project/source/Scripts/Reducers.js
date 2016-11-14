//import {className} from './Scripts/className.js'

let gamesReducer = function ( games =  JSON.parse(localStorage.getItem('Game'))|| [], action) {

  switch (action.type) {
    case 'ADD_GAME':
      let newstate = games;
      //logic
      return newstate;

    case 'UPDATE_GAME':
      let newstate = games;
      //logic
      return newstate;

    case 'DELETE_GAME':
      let newstate = games;
      //logic
      return newstate;

    default:
      return games;
  }
}

export { Reducers }
