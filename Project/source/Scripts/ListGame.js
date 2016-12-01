import { connect } from 'react-redux';
import { Game } from './Game.js';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { SaveGame } from './SaveGame.js';
import { Store } from './Store.js';

const updateProps = function (state) {
  return {
    items: state.games
  };
}

class ListGame extends React.Component {
  constructor (props) {
    super (props);
  }

  render (){

    let print;

    if (this.props.items.lenght > 0) {
      print = <ul>
          {this.props.items.map((item, key) => (
            <li key={key}> {item.title} <button onClick={browserHistory.push(`SaveGame/${item.id}`)}> Update </button>
              <button onClick={() => { return this.deleteGame(item.id); } }> Delete </button></li>
          ))}
        </ul>
    } else {
      print = <p> Not data found </p>
    }


    return(
      <div>
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

// export {ListGame}
export default connect(updateProps)(ListGame);
