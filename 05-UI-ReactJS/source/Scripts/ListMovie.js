import React from 'react';
import {Movie} from './Movie.js';

class ListMovie extends React.Component {
  constructor(props){
    super(props);
    // this.listMovie = this.listMovie.bind(this);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.state.tittle}</li>
        ))}
      </ul>

    );
  }


}



export {ListMovie}
