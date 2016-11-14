import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Store } from './Scripts/Store.js';
import { Home } from './Scripts/Home.js';

let Container = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Home />
            </div>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById('app'));
