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
      print = <div className="NotFound">
                <p> Not data found </p>
                <img className="animatedkirby" src="http://38.media.tumblr.com/08cacac45ba7f40bd5df2d19cef6c317/tumblr_n4exze5tPB1t95sf8o1_500.gif" />
              </div>
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

export default connect(updateProps)(ListGame);
