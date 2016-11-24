import { createStore } from 'redux';
import { GamesReducers } from './GamesReducers.js'

let Store = createStore(GamesReducer);

export { Store }
