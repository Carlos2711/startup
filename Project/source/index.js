import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home  from './Scripts/Home.js';
import ListGame  from './Scripts/ListGame.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './utils/MuiTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import ReactDOM from 'react-dom';
import SaveGame  from './Scripts/SaveGame.js';
import Search  from './Scripts/Search.js';
import Store  from './Scripts/Store.js';



class Container extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="header" style={{backgroundColor: '#000000'}}>
                    <Toolbar style={{backgroundColor: '#424242'}}>
                        <ToolbarGroup style={{backgroundColor: '#424242'}}>
                            <img className="imagehongo" src="http://vignette1.wikia.nocookie.net/nintendo/images/9/9c/Artwork_-_SUPER_MUSHROOM_(Simple).svg/revision/latest?cb=20160716213644&path-prefix=en"/>
                        </ToolbarGroup>
                        <ToolbarGroup style={{backgroundColor: '#424242'}}>
                            <FlatButton label="Home" onClick={() => {browserHistory.push(`home`)}} style={{color: '#39e600'}}/>
                            <FlatButton label="Search" primary={true} onClick={() => {browserHistory.push(`search`)}} style={{color: '#39e600'}}/>
                            <FlatButton label="List" secondary={true} onClick={() => {browserHistory.push(`list`)}} style={{color: '#39e600'}}/>
                        </ToolbarGroup>
                    </Toolbar>
                    {this.props.children}
                    </div>
            </MuiThemeProvider>

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
