import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
            <Main isLoggedIn={false}/>
          </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
