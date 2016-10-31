import React from 'react';
import {Movie} from './Movie.js';

class ListMovie extends React.Component {
  constructor(props){
    super(props);
    this.listMovie = this.listMovie.bind(this);
  }

  render(){
    return(
      <div>
        <button type="button" id="list" onClick={this.listMovie}> List </button>
        <List items={this.props.items} />
      </div>
    );
  }

  listMovie(e) {
    e.preventDefault();
    this.setState({ movies: JSON.parse(localStorage.getItem('Movie')) });
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} >{item.tittle}</li>
        ))}
      </ul>
    );
  }
}

export {ListMovie}
