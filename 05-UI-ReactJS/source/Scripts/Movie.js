import React from 'react';

class Movie extends React.Component {

  constructor (title, year, duration) {
    super();
    this.state = {
      test: 'test'
    };

    this.tittle = title;
    this.year = year ;
    this.duration = duration ;
  }

  render() {
    return null;
  }

}

export {Movie}
