import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Store } from './Scripts/Store.js';
import { Home } from './Scripts/Home.js';

class Container extends React.createClass({

    constructor (props) {
      super(props);
    }

    render: function () {
        return (
            <div className="container">
                <Home />
            </div>
        );
    }
});

ReactDOM.render((
  <Provider store = {Store}>
    <Router history = {browserHistory}>
      <Route path = '/' component = { Container } >
        <Route path = 'home' component = {Home} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
