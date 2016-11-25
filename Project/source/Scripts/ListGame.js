import { connect } from 'react-redux';
import { Game } from './Game.js';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { SaveGame } from './SaveGame.js';
import { Store } from './Store.js';

const updateProps = function (state) {
  return {
    items: state
  };
}

//pasar por props la lista de games

class ListGame extends React.Component {
  constructor (props) {
    super (props);
  }

  render (){
    return (
      <div>
        <list />
      </div>
    );
  }

  deleteGame(id){
    Store.dispatch({
      type: 'DELETE_GAME',
      gameId: id,
    })
  }

  list(props) {
    if (this.props.items.lenght > 0) {
      return(
        <ul>
          {this.props.items.map((item, key) => (
            <li key={key}> {item.title} <Link to={`SaveGame/${item.id}`}> Update </Link> <button onClick={() => { return this.deleteGame(item.id); } }> Delete </button></li>
          ))}
        </ul>
      )
    } else {
      return(
        <p> Not data found </p>
      )
    }
}

export default connect(updateProps)(ListGame);
