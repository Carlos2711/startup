import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.getGames = this.getGames.bind(this);
    this.state = { games: [] };
  }

  render () {
    return (
      <div className="Home">
        <p> Wellcome Gamer </p>
        <img className="animetedmegaman" src="http://vignette3.wikia.nocookie.net/theamazingworldofgumball/images/5/59/Headbanging_Mega_Man.gif/revision/latest?cb=20130414071035" />
      </div>
    );
  }

  getGames(games){
    this.setState({games: games});
  }
}

export default Home
