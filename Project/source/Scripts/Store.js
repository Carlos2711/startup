import { createStore } from 'redux';
import { Reducers } from './Reducers.js'

let Store = createStore(gamesReducer);

export {Store}
