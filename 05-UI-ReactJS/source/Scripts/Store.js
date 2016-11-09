import { createStore } from 'redux';
import {Movie} from './Movie.js';

let moviesReducer = function (movies = JSON.parse(localStorage.getItem('Movie')) || [], action) {

  switch (action.type) {
    case 'ADD_MOVIE':
      let newstate = movies;
      console.log(action.movie);
      newstate.push(action.movie);
      return newstate;

    case 'UPDATE_MOVIE':
      let updateMovies = movies;
      let editMovie = updateMovies.find(movie => {
        return movie.id === action.movie.id;
      });
      return Object.assign({}, state, { movies: updateMovies });

    case 'DELETE_MOVIE':
      const deleteMovies = movies.filter(movie => {
        if(movie.id != action.movieId) {
          return movie
        }
      });
      return deleteMovies;

    default:
      return movies;
  }
}

let Store = createStore(moviesReducer);

export {Store}
