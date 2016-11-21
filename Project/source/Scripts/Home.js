import React from 'react';
import {Search} from './Search.js';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p> Wellcome Gamer </p>
        < Search />
      </div>
    );
  }
}

export { Home }
