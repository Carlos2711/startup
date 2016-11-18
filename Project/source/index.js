import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import { Home } from './Scripts/Home.js';


class Container extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            <div className="container">
                <button onclick={browserHistory.push('/home')}> Start </button>
            </div>
        );
    }
};

ReactDOM.render((

    <Router history = {browserHistory}>
      <Route path = '/' component = { Container } >
        <Route path = 'home' component = {Home} />
      </Route>
    </Router>

), document.getElementById('app'));
