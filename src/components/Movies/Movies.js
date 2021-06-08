import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './Movies.css';

function Movies({
  searchMovies,
  movies,
  saveMovie,
  removeMovie,
  isFetched,
  isLoading,
  savedMoviesIds,
}) {
  // eslint-disable-next-line no-console
  console.log(movies);
  return (
    <>
      <Header mod="header-movie">
        <Navigation/>
      </Header>
      <SearchForm searchMovies={searchMovies}/>
      {
        isFetched
          && <MoviesCardList
            movies={movies}
            isLoading={isLoading}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />
      }
      <Footer />
    </>
  );
}

export default Movies;
