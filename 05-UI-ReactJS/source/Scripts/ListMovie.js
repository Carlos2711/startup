import React from 'react';
import {Movie} from './Movie.js';

class ListMovie extends React.Component {
  constructor(props){
    super(props);
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.state.tittle}+{item.state.year}+{item.state.duration}+{item.id} <button onClick={this.updateMovie}> Update </button> <button onClick={() => { return this.deleteMovie(item); } }> Delete </button>  </li>
          ))}
      </ul>

    );
  }

  updateMovie(){

  }
  deleteMovie(item){
    let movies = this.props.items;
    let indexDeleteMovie = movies.indexOf(item);
    this.props.items.splice(indexDeleteMovie,1);
    localStorage.setItem("Movie", JSON.stringify(this.props.items))
    this.props.onUpdate(this.props.items);

  }


}



export {ListMovie}
