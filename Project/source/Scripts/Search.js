import React from 'react';
import ReactDOM from 'react-dom';
import { ListGame } from './ListGame.js';
import { Game } from './Game.js';

class Search extends React.Component{

  constructor(){
    super();
    this.handleChangesearch = this.handleChangesearch.bind(this);
    this.searchGames = this.searchGames.bind(this);
    this.state = { search: '', games: [] };
  }

// agregar un mapeo para mostrar los resultados de la busqueda
  render() {
    //add a message when return a string of null, think is usefull implement an IF or other methods
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
    //clear this block after the site work nice

    let URL = 'https://videogamesrating.p.mashape.com/get.php?game='+search;
    let searchedgames;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      console.log(JSON.parse(xhr.responseText));
      searchedgames = JSON.parse(xhr.responseText);
      console.log(searchedgames[0].title);
      this.setState({games: searchedgames});
      console.log(this.state.games);
      if(searchedgames === []){

      }
    }.bind(this);

    xhr.open('GET', URL);
    xhr.setRequestHeader("X-Mashape-Key", "WJQevbH5Q9mshqDqZlhJ3fs83dg4p1g6FQPjsnjt14Ul6p78Uy");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send();
  }

}

export {Search}
