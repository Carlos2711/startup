import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Scripts/Home.js';

class Container extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            <div className="container">
                < Home/>
            </div>
        );
    }
};

ReactDOM.render( <Home/> , document.getElementById('app'));
