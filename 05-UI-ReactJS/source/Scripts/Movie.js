import React from 'react';

class Movie extends React.Component {

  constructor (title, year, duration) {
    super();
    this.state = {
      test: 'test'
    };

    this.tittle = '';
    this.year = '' ;
    this.duration = '' ;
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
         <input name="title" id="inputTitle" />
        </label>
       </div>
       <div>
        <label>
          Year:
         <input name="year" id="inputyear" />
        </label>
       </div>
       <div>
        <label>
          Duration:
         <input name="duration" id="inputduration" />
        </label>
       </div>
       <button type="button" id="save" > Save </button>
       <button type="button" id="clear" > Clear </button>
      </div>
    );
  }
}

export {Movie}
