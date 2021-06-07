import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import * as api from '../../utils/MainApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [infoTooltipImage] = useState('');

  const showError = (msg) => {
    setMessage(msg);
    setIsInfoTooltipOpen(true);
  };

  const handleRegister = async (userData) => {
    try {
      setIsFormDisabled(true);
      await api.register(userData);
    } catch (err) {
      showError(err.message);
    } finally {
      setIsFormDisabled(false);
    }
  };

  const handleLogin = async (userData) => {
    try {
      setIsFormDisabled(true);

      const user = await api.login(userData);

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      showError(err.message);
    } finally {
      setIsFormDisabled(false);
    }
  };

  const handleSignout = async () => {

  };
  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <Route path="/signup">
            {!isLoggedIn
              ? <Register
                onRegister={handleRegister}
                isFormDisabled={isFormDisabled}
                message = {message}
              />
              : <Redirect to="/movies" />
            }
          </Route>

          <Route path="/signin">
            {!isLoggedIn
              ? <Login
                onLogin={handleLogin}
                isFormDisabled={isFormDisabled}
              /> : <Redirect to="/movies" />
            }
          </Route>

          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
          />

          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
          />

          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            component={Profile}
            onSignout={handleSignout}
            isFormDisabled={isFormDisabled}
          />

          <Route path='*' component={NotFound} />
        </Switch>
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
