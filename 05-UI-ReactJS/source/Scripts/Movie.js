import React from 'react';

class Movie extends React.Component {

  constructor (title, year, duration, id) {
    super();
    this.state = {tittle: title , year: year , duration: duration , id: id };

  }

  render() {
    return null;
  }

}

export {Movie}
