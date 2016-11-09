import React from 'react';
import { Movie } from './Movie.js';
import { Router, Route, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FormNewMovie } from './FormNewMovie.js';
import {Store} from './Store.js';

const updateProps = function (state) {
  console.log(state)
  return {
    items: state
  };
}

class ListMovie extends React.Component {
  constructor(props){
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, key) => (
          <li key={key}>{item.tittle}+{item.year}+{item.duration}  <Link to={`/newmovie/${item.id}`}> Update </Link>  <button onClick={() => { return this.deleteMovie(item.id); } }> Delete </button>  </li>
          ))}
      </ul>

    );
  }

  deleteMovie(id){
    Store.dispatch({
      type: 'DELETE_MOVIE',
      movieId: id,
    })
  }
}

export default connect(updateProps)(ListMovie);
