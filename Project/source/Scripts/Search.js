import React from 'react';
import ReactDOM from 'react-dom';
import { ListGame } from './ListGame.js';
import { Games } from './Games.js';

class Search extends React.Component{

  constructor(){
    super();
    this.handleChangesearch = this.handleChangesearch.bind(this);
    this.searchGames = this.searchGames.bind(this);
    this.state = { search: '', games: [] };
  }

  render() {
    return(
      <div>
        <label for="inputText" >
          <input onChange={this.handleChangesearch} value={this.state.search}/>
        </label>
        <button onClick={()=>{ return this.searchGames(this.state.search); } }> Search </button>
      </div>
    )
  }

  handleChangesearch(e) {
    this.setState({ search: e.target.value });
  }

  searchGames(search) {
    let URL = 'https://videogamesrating.p.mashape.com/get.php?game='+search;
    let searchedgames;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      console.log(JSON.parse(xhr.responseText));
      searchedgames = JSON.parse(xhr.responseText);
      console.log(searchedgames[0].title);
      this.setState({games: searchedgames});
      console.log(this.state.games);
    }.bind(this);

    xhr.open('GET', URL);
    xhr.setRequestHeader("X-Mashape-Key", "WJQevbH5Q9mshqDqZlhJ3fs83dg4p1g6FQPjsnjt14Ul6p78Uy");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send();
  }

}

export {Search}
