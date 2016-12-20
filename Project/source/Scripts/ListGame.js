import { connect } from 'react-redux';
import Game from './Game.js';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SaveGame from './SaveGame.js';
import Store from './Store.js';

const updateProps = function (state) {
  return {
    items: state
  };
}

class ListGame extends React.Component {
  constructor (props) {
    super (props);
    this.deleteGame = this.deleteGame.bind(this);
  }

  render (){

    let print;
    if (this.props.items.length > 0) {
      print = <ul className="list">
          {this.props.items.map((item, key) => (
            <li key={key}> {item.title} <button className="button" onClick={() => {browserHistory.push(`save/${item.id}`)}}> Update </button>
              <button className="button" onClick={() => { return this.deleteGame(item.id); } }> Delete </button></li>
          ))}
        </ul>
    } else {
      print = <p> Not data found </p>
    }


    return(
      <div className="divlist">
        {print}
      </div>
    );
  }

  deleteGame(id){
    Store.dispatch({
      type: 'DELETE_GAME',
      gameId: id,
    })
  }
}

export default connect(updateProps)(ListGame);
