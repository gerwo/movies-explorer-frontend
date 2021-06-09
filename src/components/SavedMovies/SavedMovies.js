import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies({
  movies,
  searchMovies,
  removeMovie,
  savedMoviesIds,
  isLoading,
}) {
  return (
    <>
      <Header mod="header_white-theme">
        <Navigation/>
      </Header>
      <SearchForm searchMovies={searchMovies}/>
      <MoviesCardList
        movies={movies}
        isLoading={isLoading}
        removeMovie={removeMovie}
        savedMoviesIds={savedMoviesIds}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
