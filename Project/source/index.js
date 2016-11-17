import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Store } from './Scripts/Store.js';
import { Home } from './Scripts/Home.js';
import { Provider } from 'react-redux';

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
  <Provider store = {Store}>
    <Router history = {browserHistory}>
      <Route path = '/' component = { Container } >
        <Route path = 'home' component = {Home} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
