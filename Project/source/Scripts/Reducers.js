//import {className} from './Scripts/className.js'

let gamesReducer = function ( games =  JSON.parse(localStorage.getItem('Game'))|| [], action) {

  let newstate;
  switch (action.type) {
    case 'ADD_GAME':
      newstate = games;
      //logic
      return newstate;

    case 'UPDATE_GAME':
      newstate = games;
      //logic
      return newstate;

    case 'DELETE_GAME':
      newstate = games;
      //logic
      return newstate;

    default:
      return games;
  }
}

export { Reducers }
