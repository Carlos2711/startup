import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js';
import {ListMovie} from './Scripts/ListMovie.js';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = { movies: JSON.parse(localStorage.getItem('Movie')) || [] };
    this.returnMovie = this.returnMovie.bind(this);
  }

  render() {
    return(
        <div>
          <FormNewMovie items = {this.state.movies} onSave = {this.returnMovie}/>
          <ListMovie items = {this.state.movies} onUpdate = {this.returnMovie}/>
        </div>
      );
  }

  returnMovie(movie){
    this.setState({movies: movie});

  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
