import React from 'react';
import ReactDOM from 'react-dom';
import {FormNewMovie} from './Scripts/FormNewMovie.js';
import ListMovie from './Scripts/ListMovie.js';
import {Router,Route,Link, browserHistory} from 'react-router';
import {Store} from './Scripts/Store.js';
import {Provider, connect} from 'react-redux';


class Container extends React.Component {
  constructor(props){
    super(props);

    this.returnMovies = this.returnMovies.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  render() {
    return(
        <div>
          <Link to='/newmovie'>newmovie</Link>
          <Link to='/list'>List</Link>

          {this.props.children}
        </div>
      );
  }

  returnMovies(movie){
    this.setState({movies: movie});
  }

  getMovie(movie){
    this.setState({movie: movie});
  }
}

ReactDOM.render((
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={Container}>
        <Route path='newmovie' component={FormNewMovie} />
          <Route path='/newmovie/:movieId' component={FormNewMovie} />
        <Route path='list' component={ListMovie} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
