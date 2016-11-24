// create the tab for the data of the game and the user can put a score, validate the user can't change the others values
import react from 'react';
import { Games } from './Games';

class SaveGame extends React.Component {
  constructo(){
    super()
    this.savenewgame = this.savenewgame.bind(this);
    this.state = { game:'', title: '', score: '', publisher: '', short_description: '', platforms: [], thumb: '' };
  }

  render(){
    return(
      <div>
        <p> In this part the game will be save </p>
        <div>
          <label> Title:
            <input {...this.getTitleProps()} />
          </label>
        </div>
        <div>
          <label> Publisher:
            <input {...this.getPublisher()} />
          </label>
        </div>
        <div>
          <label> Description:
            <input {...this.getShortdescription()} />
          </label>
        </div>
        <div>
          <label> Platforms: </label>
          <ul>
            {this.props.Platforms.map((item, key) => (
              <li key={key}> {item}  </li>
              ))}
          </ul>
        </div>
        <div>
          <img src = this.state.thumb > Cover </img>
        </div>
        <div>
          <label> Score:
            <input {...this.getScore()} />
          </label>
        </div>
        <div>
          <label>
            <input {...this.getPersonalScore()} />
          </label>
        </div>
        <div>
          <button onClick={this.savenewgame} > Save </button>
        </div>
      </div>
    )
  }

  getTitleProps() {
    return {
      onChange: this.handlechangetitle,
      value: this.state.title
    };
  }

  getPublisher() {
    retrurn {
      onChange: this.handleChangepublisher,
      value: this.state.publisher
    };
  }

  getShortdescription() {
    return {
      onChange: this.handleChangeshortdescription,
      value: this.state.short_description
    };
  }

  getScore() {
    return {
      onChange: this.handleChangescore,
      value: this.state.score
    };
  }

  getPersonalScore() {
    return {
      onChange: this.handleChangepersonalscore,
      value: this.state.personalscore
    };
  }

  handleChangetitle(e) {
    this.setState({title: e.target.value});
  }

  handleChangescore(e) {
    this.setState({score: e.target.value});
  }

  handleChangepersonalscore(e) {
    this.setState({personalscore: e.target.value});
  }

  handleChangepublisher(e) {
    this.setState({publisher: e.target.value});
  }

  handleChangeshortdescription(e) {
    this.setState({short_description: e.target.value});
  }

  handleChangePlatform(e) {
    this.setState({platform: e.target.value});
  }

  handleChnagethumbs(e) {
    this.setState({thumb: e.target.value});
  }


  savenewgame(e) {
    e.preventDefault();  //take a look of this preventDefault
    if(this.state.id === ''){
      Store.dispatch({
        type: 'ADD_GAME',
        game: {
          title: this.state.title,
          score: this.state.score,
          personalscore: this.state.personalscore,
          publisher: this.state.publisher,
          plataform: this.state.plataform,
          thumb: this.state.thumb,
          id: Date.now(),
        }
      });
    }
    else {
      Store.dispatch({
        type: 'UPDATE_GAME',
        game: {
          title: this.state.title,
          score: this.state.score,
          personalscore: this.state.personalscore,
          publisher: publisher,
          plataform: this.state.plataform,
          thumb: this.state.thumb,
          id: this.state.id,
        }
      })
    }
  }
}

export { SaveGame }
