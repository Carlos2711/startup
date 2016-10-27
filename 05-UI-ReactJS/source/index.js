import React from 'react';
import ReactDOM from 'react-dom';
import {Movie} from './Scripts/Movie.js'

class Container extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div>
          <Movie />
        </div>
      );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
