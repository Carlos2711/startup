import  Home  from './Scripts/Home.js';
import  ListGame  from './Scripts/ListGame.js';
import  SaveGame  from './Scripts/SaveGame.js';
import  Search  from './Scripts/Search.js';
import  Store  from './Scripts/Store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

class Container extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            //pasar props por router
            <div className="header">
                <Link to='/home'> Home </Link>
                <Link to='/search'> Search  </Link>
                <Link to='/list'> List </Link>
                {this.props.children}
            </div>
        );
    }
};

ReactDOM.render((
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Route path='/' component={Container}>
                <Route path='home' component={Home} />
                <Route path='search' component={Search} />
                <Route path='list' component={ListGame} />
                <Route path='save' component={SaveGame} />
                <Route path='save/:gameId' component={SaveGame} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
