import React from 'react';
import { Game } from './Game.js';

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
      <p> Your favourite games! </p>
      <ul>
        {this.props.items.map((item, key) => (
          <li key={key}> {item.title}
            <Link to={`SaveGame/${item.id}`}> Update </Link>
            <button onClick={() => { return this.deleteGame(item.id); } }> Delete </button>
          </li>
        ))}
      </ul>
    );
  }

  deleteGame(id){
    Store.dispatch({
      type: 'DELETE_GAME',
      gameId: id,
    })
  }
}

export { ListGame };
