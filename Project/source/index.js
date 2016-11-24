import { Home } from './Scripts/Home.js';
import { ListGame } from './Scripts/ListGame.js';
import { Search } from './Scripts/Search.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

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

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={Container}>
            <Route path='home' component={Home} />
            <Route path='search' component={Search} />
            <Route path='list' component={ListGame} />
            <Route path='save' component={SaveGame} />
            <Route path='save/:gameId' component={SaveGame} />
        </Route>
    </Router>
), document.getElementById('app'));
