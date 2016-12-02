import React from 'react';
import { Link, browserHistory } from 'react-router';

class ViewSearch extends React.Component{
  constructor(props){
    super(props)
    this.searchGames = this.searchGames.bind(this);
    this.handleChangesearch = this.handleChangesearch.bind(this);
    this.state = { search: '', games: [], chosengame: '' };
  }

  handleChangesearch(e) {
    this.setState({ search: e.target.value });
  }


  searchGames(search) {
    //clear this block after the site work nice
    //now using store for the newgame, adapt the code

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

  //add a message when return a string of null, think is usefull implement an IF or other methods
  render() {
    return(
      <div>
        <label>
          <input onChange={this.handleChangesearch} value={this.state.search}/>
        </label>
        <button onClick={()=>{ return this.searchGames(this.state.search); } }> Search </button>
        <ul>
          {this.state.games.map((game, key) => (
            <li key={key}>
              {game.title} <button onClick=handleDetails.bind(this, game)> Update </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  handleDetails(game) {
    browserHistory.push(`GameDetails`);
  }
}

export default ViewSearch;
