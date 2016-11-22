// create the tab for the data of the game and the user can put a score
import react from 'react';
import { Games } from './Games';

class SaveGame extends React.Component {
  constructo(){
    super()
    this.state = { game:'' }
  }

  render(){
    return(
      <div>
        <p> In this part the game will be save </p>
      </div>
    )
  }
}

export { SaveGame }
