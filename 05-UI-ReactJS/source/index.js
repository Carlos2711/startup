import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js';
import {ListMovie} from './Scripts/ListMovie.js';
import {Router,Route,Link, browserHistory} from 'react-router';

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
          <ListMovie items = {this.state.movies} onUpdate = {this.returnMovies} onReturn= {this.getMovie}/>
          <Link to = '/newmovie'> newmovie </Link>
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

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Container}>
      <Route path='newmovie' component={FormNewMovie}>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));


//   <FormNewMovie items = {this.state.movies} movie = {this.state.movie} onSave = {this.returnMovies}/>
