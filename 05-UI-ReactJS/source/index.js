import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js'

class Container extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div>
          <FormNewMovie />
        </div>
      );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
