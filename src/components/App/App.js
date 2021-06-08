import React, { useEffect, useState } from 'react';
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

  const [message, setMessage] = useState('');

  const showError = (msg) => {
    setMessage(msg);
  };

  const getUserData = async () => {
    try {
      const user = await api.getUserData();

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      setCurrentUser({});
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (userData) => {
    try {
      const user = await api.login(userData);

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      showError(err.message);
    }
  };

  const handleRegister = async (userData) => {
    try {
      showError('');
      await api.register(userData);

      handleLogin({ email: userData.email, password: userData.password });
    } catch (err) {
      showError(err.message);
    }
  };

  const handleUpdateProfile = async (userData) => {
    try {
      const user = await api.updateProfile(userData);
      setCurrentUser(user);
    } catch (err) {
      showError(err.message);
    }
  };

  const handleSignout = async () => {
    try {
      await api.logout();

      setIsLoggedIn(false);
      setCurrentUser({});
    } catch (err) {
      showError(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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
                message = {message}
              />
              : <Redirect to="/movies" />
            }
          </Route>

          <Route path="/signin">
            {!isLoggedIn
              ? <Login
                onLogin={handleLogin}
                message = {message}
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
            onUpdateProfile={handleUpdateProfile}
          />

          <Route path='*' component={NotFound} />
        </Switch>
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
