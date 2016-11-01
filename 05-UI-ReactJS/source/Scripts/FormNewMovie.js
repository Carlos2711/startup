import React from 'react';
import {Movie} from './Movie.js';

class FormNewMovie extends React.Component {
  constructor(props){
    super(props);
    this.handleChangetittle = this.handleChangetittle.bind(this);
    this.handleChangeyear = this.handleChangeyear.bind(this);
    this.handleChangeduration = this.handleChangeduration.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.state = {tittle: '' , year: '' , duration: '' , id: '' , movies: [] };
  }

  render () {
    return (
      <div>
       <div>
        <p> New Movie </p>
       </div>
       <div>
        <label>
          Title:
         <input onChange={this.handleChangetittle} value={this.state.tittle} />
        </label>
       </div>
       <div>
        <label>
          Year:
         <input onChange={this.handleChangeyear} value={this.state.year}/>
        </label>
       </div>
       <div>
        <label>
          Duration:
         <input onChange={this.handleChangeduration} value={this.state.duration}/>
        </label>
       </div>
       <button type="button" id="save" onClick={this.saveMovie}> Save </button>
       <button type="button" id="cancel" > Cancel </button>
      </div>
    );
  }

  handleChangetittle(e) {
    this.setState({tittle: e.target.value});
  }

  handleChangeyear(e) {
    this.setState({year: e.target.value});
  }


  handleChangeduration(e) {
    this.setState({duration: e.target.value});
  }

  saveMovie(e) {
    e.preventDefault();
    let movie = JSON.parse(localStorage.getItem('Movie')) || [];
    let newmovie = new Movie(this.state.tittle, this.state.year, this.state.duration);
    this.setState({ id: Date.now() }, () => { newmovie["id"] = this.state.id });
    movie.push(newmovie);
    this.setState({ movies: movie}, () => {
      localStorage.setItem("Movie", JSON.stringify(this.state.movies));
    });
    this.props.onSave(movie);
  }

}

export {FormNewMovie}
