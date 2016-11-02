import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js';
import {ListMovie} from './Scripts/ListMovie.js';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = { movies: JSON.parse(localStorage.getItem('Movie')) || [] , movie: '' };
    this.returnMovies = this.returnMovies.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  render() {
    return(
        <div>
          <FormNewMovie items = {this.state.movies} movie = {this.state.movie} onSave = {this.returnMovies}/>
          <ListMovie items = {this.state.movies} onUpdate = {this.returnMovies} onReturn= {this.getMovie}/>
        </div>
      );
  }

  returnMovies(movie){
    this.setState({movies: movie});
  }

  getMovie(movie){
    this.setState({movie: movie});
  }


}

ReactDOM.render(<Container />, document.getElementById('app'));
