import React from 'react';
import ReactDOM from 'react-dom';
import {Search} from './Search.js';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.getGames = this.getGames.bind(this);
    this.state = { games: [] };
  }

  render () {
    return (
      <div>
        <p> Wellcome Gamer </p>
        < Search />
      </div>
    );
  }

  getGames(games){
    this.setState({games: games});
  }
}

export { Home }
