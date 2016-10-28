import React from 'react';
import {Movie} from './Movie.js';

class FormNewMovie extends React.Component {
  constructor(props){
    super(props);
    this.handleChangetittle = this.handleChangetittle.bind(this);
    this.handleChangeyear = this.handleChangeyear.bind(this);
    this.handleChangeduration = this.handleChangeduration.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {tittle: '' , year: '' , duration: '' };
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
       <button type="button" id="save" onclick="save ()"> Save </button>
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
/*
  handleSubmit(e) {
   e.preventDefault();
   var newItem = {
     text: this.state.text,
     id: Date.now()
   };
   this.setState((prevState) => ({
     items: prevState.items.concat(newItem),
     text: ''
   }));
 }
*/
  saveMovie(){
    let newmovie = new Movie(this.state.tittle, this.state.year, this.state.duration);
    console.log("newmovie.tittle");
    //localStorage.setItem("Movie", newmovie);
  }

}

export {FormNewMovie}
