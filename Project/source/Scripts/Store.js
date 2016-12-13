import { createStore } from 'redux';
import { combineReducers} from 'redux';
import Game from './Game.js';

let GamesReducer = function ( games =  JSON.parse(localStorage.getItem('Game'))|| [], action ) {

  let newstate;
  switch (action.type) {
    case 'ADD_GAME':
      let addGame = games;
      addGame.push(action.game);
      localStorage.setItem("Game", JSON.stringify(addGame));
      return addGame;

    case 'UPDATE_GAME':
      let updateGames = games;
      let editGame = updateGames.find(game => {
        if (game.id === action.game.id){
          game.personalscore = action.game.personalscore;
          return game;
        }
      });
      localStorage.setItem("Game", JSON.stringify(updateGames));
      return updateGames;

    case 'DELETE_GAME':
      const deleteGames = games.filter(game => {
        if(game.id != action.gameId) {
          return game
        }
      });
      localStorage.setItem("Game", JSON.stringify(deleteGames));
      return deleteGames;

    default:
      return games;
  }
}

let Store = createStore(GamesReducer);

export default Store
