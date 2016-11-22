import React from 'react';
import { Games } from './Games';

const updateProps = function (state) {
  return {
    items: state
  };
}

class ListGame extends React.Component {
  constructor (props) {
    super (props);
  }

  render (){
    return (
      <ul>
        {this.props.items.map((item, key) => (
          <li key={key}> {item.title} <Link to={`SaveGame/${item.id}`}> Update </Link>  <button onClick={() => { return this.deleteMovie(item.id); } }> Delete </button>  </li>
          ))}
        </ul>
    );
  }
}
