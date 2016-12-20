import { connect } from 'react-redux';
import { Game } from './Game.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { SaveGame } from './SaveGame.js';
import { Store } from './Store.js';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.searchGames = this.searchGames.bind(this);
    this.handleChangesearch = this.handleChangesearch.bind(this);
    this.lclstoregame = this.lclstoregame.bind(this);
    this.state = { search: '', games: [], chosengame: '' };
  }

  handleChangesearch(e) {
    this.setState({ search: e.target.value });
  }


  searchGames(search) {
    let URL = 'https://videogamesrating.p.mashape.com/get.php?game='+search;
    let searchedgames;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      searchedgames = JSON.parse(xhr.responseText);
      this.setState({games: searchedgames});
      if(searchedgames === []){

      }
    }.bind(this);

    xhr.open('GET', URL);
    xhr.setRequestHeader("X-Mashape-Key", "WJQevbH5Q9mshqDqZlhJ3fs83dg4p1g6FQPjsnjt14Ul6p78Uy");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send();
  }

  render() {
    return(
      <div className="search">
        <label >
          <input className="input" onChange={this.handleChangesearch} value={this.state.search}/>
        </label>
        <button className="buttonsearch" onClick={()=>{ return this.searchGames(this.state.search); } }> Search </button>
        <ul className="listsearch">
          {this.state.games.map((game, key) => (
            <li key={key}>
              {game.title} <button className="button" onClick={()=>{this.lclstoregame(game); browserHistory.push('/save');} }> Save </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  lclstoregame(game) {
    localStorage.setItem("APIselectedgame", JSON.stringify(game));
  }
}

export default Search;
