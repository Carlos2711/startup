import React from 'react';
import Game from './Game.js';
import Store from './Store.js';
import { Router, Route, Link, browserHistory } from 'react-router';

class SaveGame extends React.Component {
  constructor(){
    super()
    this.savenewgame = this.savenewgame.bind(this);
    this.handleChangetitle = this.handleChangetitle.bind(this);
    this.handleChangescore = this.handleChangescore.bind(this);
    this.handleChangepersonalscore = this.handleChangepersonalscore.bind(this);
    this.handleChangepublisher = this.handleChangepublisher.bind(this);
    this.handleChangeshortdescription = this.handleChangeshortdescription.bind(this);
    this.handleChangethumbs = this.handleChangethumbs.bind(this);
    this.state = { games: '', title: '', score: '', personalscore:'', publisher: '', short_description: '', thumb: '', id:'' };
  }

  render(){
    return(
      <div>
        <div>
          <label> Title:
            <input {...this.getTitleProps()} />
          </label>
        </div>
        <div>
          <label> Publisher:
            <input {...this.getPublisher()} />
          </label>
        </div>
        <div>
          <label> Description:
            <input {...this.getShortdescription()} />
          </label>
        </div>
        <div>
          <img src={this.state.thumb} className='image' />
        </div>
        <div>
          <label> Score:
            <input {...this.getScore()} />
          </label>
        </div>
        <div>
          <label> Personal Score:
            <input {...this.getPersonalScore()} />
          </label>
        </div>
        <div>
          <button onClick={this.savenewgame} > Save </button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if(this.props.params.gameId) {
      this.state.games = Store.getState();
      let game = this.state.games.find((game) => {
        if(this.props.params.gameId === game.id.toString()) {
          return game.title, game.score, game.personalscore, game.publisher,game.thumb, game.id, game.short_description;
        }
      });
      this.setState({
        title: game.title,
        score: game.score,
        personalscore: game.personalscore,
        publisher: game.publisher,
        thumb: game.thumb,
        short_description: game.short_description,
        id: game.id
        });
    }
    else {
      let game = JSON.parse(localStorage.getItem('APIselectedgame'));
      this.setState({
        title: game.title,
        score: game.score,
        publisher: game.publisher,
        thumb: game.thumb,
        short_description: game.short_description
      });
    }
}

  getTitleProps() {
    return {
      onChange: this.handleChangetitle,
      value: this.state.title
    };
  }

  getPublisher() {
    return {
      onChange: this.handleChangepublisher,
      value: this.state.publisher
    };
  }

  getShortdescription() {
    return {
      onChange: this.handleChangeshortdescription,
      value: this.state.short_description
    };
  }

  getScore() {
    return {
      onChange: this.handleChangescore,
      value: this.state.score
    };
  }

  getPersonalScore() {
    return {
      onChange: this.handleChangepersonalscore,
      value: this.state.personalscore
    };
  }



  handleChangetitle(e) {
    this.setState({title: e.target.value});
  }

  handleChangescore(e) {
    this.setState({score: e.target.value});
  }

  handleChangepersonalscore(e) {
    this.setState({personalscore: e.target.value});
  }

  handleChangepublisher(e) {
    this.setState({publisher: e.target.value});
  }

  handleChangeshortdescription(e) {
    this.setState({short_description: e.target.value});
  }

  handleChangethumbs(e) {
    this.setState({thumb: e.target.value});
  }


  savenewgame(e) {
    e.preventDefault();
    if(this.state.id === ''){
      Store.dispatch({
        type: 'ADD_GAME',
        game: {
          title: this.state.title,
          score: this.state.score,
          personalscore: this.state.personalscore,
          publisher: this.state.publisher,
          short_description: this.state.short_description,
          thumb: this.state.thumb,
          id: Date.now(),
        }
      });
      browserHistory.push('/search');
    }
    else {
      Store.dispatch({
        type: 'UPDATE_GAME',
        game: {
          title: this.state.title,
          score: this.state.score,
          personalscore: this.state.personalscore,
          publisher: this.state.publisher,
          short_description: this.state.short_description,
          thumb: this.state.thumb,
          id: this.state.id,
        }
      })
      browserHistory.push('/list');
    }
  }
}

export default SaveGame
