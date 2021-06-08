import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { searchByKeyword, formatMovies } from '../../utils/utils';
import { successMessage, fetchErrorMessage } from '../../utils/constants';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import successImg from '../../images/success-icon.png';
// eslint-disable-next-line no-unused-vars
import errorImg from '../../images/error-icon.png';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState('');

  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState('');

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  const showError = (msg) => {
    setMessage(msg);
  };

  const showSuccess = () => {
    setMessage(successMessage);
    setInfoTooltipImage(successImg);
    setIsInfoTooltipOpen(true);
  };

  const getUserData = async () => {
    try {
      const user = await api.getUserData();

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      setCurrentUser({});
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (userData) => {
    try {
      setMessage('');
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
      showSuccess();
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

  const saveMovie = async (movieData) => {
    try {
      // eslint-disable-next-line no-console
      console.log(movieData);
      const savedMovie = await api.saveMovie(movieData);

      setSavedMovies([...savedMovies, savedMovie]);
      setSavedMoviesIds([...savedMoviesIds, savedMovie.movieId]);
      setSearchedSavedMovies([...savedMovies, savedMovie]);
    } catch (err) {
      showError(err.message);
    }
  };

  const searchMovies = async (keyword, isIncludesShort) => {
    setIsLoading(true);
    setIsFetched(true);

    try {
      let movies = localStorage.getItem('movies');

      if (!movies) {
        const fetchedMovies = await moviesApi.getMovies();
        const formattedFetchedMovies = formatMovies(fetchedMovies, moviesApi.BASE_URL);

        localStorage.setItem('movies', JSON.stringify(formattedFetchedMovies));
        movies = formattedFetchedMovies;
      } else {
        movies = JSON.parse(movies);
      }
      const filteredMovies = searchByKeyword(movies, keyword, isIncludesShort);
      setSearchedMovies(filteredMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const searchSavedMovies = (keyword, isIncludesShort) => {
    const filteredSavedMovies = searchByKeyword(savedMovies, keyword, isIncludesShort);

    setSearchedSavedMovies(filteredSavedMovies);
  };

  const removeMovie = async (movieId) => {
    try {
      const removedMovie = await api.removeMovie(movieId);

      const filteredMovies = savedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
      const filteredMoviesIds = savedMoviesIds.filter((id) => id !== removedMovie.movieId);

      setSavedMovies(filteredMovies);
      setSavedMoviesIds(filteredMoviesIds);
      setSearchedSavedMovies(filteredMovies);
    } catch (err) {
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const localSearchedMovies = localStorage.getItem('searchedMovies');

    if (isLoggedIn && localSearchedMovies) {
      setSearchedMovies(JSON.parse(localSearchedMovies));
      setIsFetched(true);
    }
  }, [isLoggedIn]);

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
            isFetched={isFetched}
            isLoading={isLoading}
            component={Movies}
            searchMovies={searchMovies}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
            movies={searchedMovies}
            saveMovie={saveMovie}
          />

          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
            searchMovies={searchSavedMovies}
            movies={searchedSavedMovies}
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

        <InfoTooltip
          message={message}
          isOpen={isInfoTooltipOpen}
          image={infoTooltipImage}
          setIsOpen={setIsInfoTooltipOpen}
        />
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
