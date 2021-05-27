import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './Movies.css';

function Movies() {
  return (
    <>
      <Header mod="header-movie">
        <Navigation/>
      </Header>
      <SearchForm/>
      <MoviesCardList/>
      <Footer />
    </>
  );
}

export default Movies;
