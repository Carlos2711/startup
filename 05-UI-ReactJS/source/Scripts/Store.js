import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Movie} from './Movie.js';

var moviesReducer = function(state, action) {
  if (state === undefined || state === 'movies') {
    state = [];
  }
  if (state === undefined) {
    state = '';
  }
  if (action.type === 'ADD_MOVIE') {
    state.push(action.movie);
  }
  return state;
}



// Create a store by passing in the reducer
let store = Redux.createStore(moviesReducer);

// Dispatch our first action to express an intent to change the state
store.dispatch({
  type: 'ADD_MOVIE',
  movie: {tittle: 'Terminator', year: '1989', duration: '126'}
});


// Left Finish it
