import { createStore } from 'redux';
import {Movie} from './Movie.js';

let moviesReducer = function (movies = JSON.parse(localStorage.getItem('Movie')) || [], action) {

  switch (action.type) {
    case 'ADD_MOVIE':
      let newstate = movies;
      newstate.push(action.movie);
      return newstate;

    case 'UPDATE_MOVIE':
      let updateMovies = movies;
      let editMovie = updateMovies.find(movie => {
        if (movie.id === action.movie.id){
            movie.tittle = action.movie.tittle;
            movie.year = action.movie.year;
            movie.duration = action.movie.duration;
            return movie;
        }

      });
      return updateMovies;

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
