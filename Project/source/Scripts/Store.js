import { createStore } from 'redux';
import { gamesReducers } from './Reducers.js'

let Store = createStore(gamesReducer);

export {Store}
