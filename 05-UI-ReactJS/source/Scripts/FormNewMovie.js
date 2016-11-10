import React from 'react';
import {Movie} from './Movie.js';
import {Store} from './Store';



class FormNewMovie extends React.Component {

  constructor(){
    super();
    this.handleChangetittle = this.handleChangetittle.bind(this);
    this.handleChangeyear = this.handleChangeyear.bind(this);
    this.handleChangeduration = this.handleChangeduration.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getElement = this.getElement.bind(this);
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
         <input {...this.getTitleProps()} />
        </label>
       </div>
       <div>
        <label>
          Year:
         <input {...this.getYearInputProps()}/>
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

  componentDidMount() {
    if(this.props.params.movieId) {
      this.state.movies = Store.getState();
      let movie = this.state.movies.find((movie) => {
        if(this.props.params.movieId === movie.id.toString()) {
          return movie.tittle, movie.year, movie.duration, movie.id ;
        }
      });
      this.setState({
          tittle: movie.tittle,
          year:  movie.year,
          duration: movie.duration,
          id: movie.id
        });
    }
  }

  getYearInputProps () {
    return {
      onChange: this.handleChangeyear,
      value: this.state.year
    }
  }

  getTitleProps () {
    return {
      onChange: this.handleChangetittle,
      value: this.state.tittle
    };
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

    if(this.state.id === ''){
     Store.dispatch({
       type: 'ADD_MOVIE',
       movie: {
         tittle: this.state.tittle,
         year: this.state.year,
         duration: this.state.duration,
         id: Date.now(),
        }
     });
    }
    else {
      Store.dispatch({
        type: 'UPDATE_MOVIE',
        movie: {
          tittle:this.state.tittle,
          year: this.state.year,
          duration: this.state.duration,
          id: this.state.id,
        }
      })
    }
  }

  getElement(element){
    return element.id === this.state.id;
  }

}

export {FormNewMovie}
