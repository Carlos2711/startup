import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component{

  constructor(){
    super();
    this.handleChangesearch = this.handleChangesearch.bind(this);
    this.state = { search: '' };
  }

  render() {
    return(
      <div>
        <label for="inputText" >
          <input onChange={this.handleChangesearch} value={this.state.search}/>
        </label>
        <button> Search </button>
      </div>
    )
  }

  handleChangesearch(e) {
    this.setState({ search: e.target.value });
  }

}

export {Search}
