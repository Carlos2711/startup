import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js';
import {ListMovie} from './Scripts/ListMovie.js';

class Container extends React.Component {
  constructor(props){
    super(props);
      this.state = { movies: [] };
  }

  render() {
    return(
        <div>
          <FormNewMovie />
          <ListMovie items = {this.state.movies}/>
        </div>
      );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
