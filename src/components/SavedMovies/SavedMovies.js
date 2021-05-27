import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header mod="header_white-theme">
        <Navigation themeWhite={true}/>
      </Header>
      <SearchForm/>
      <section className="movies">
        <div className="movies__container">
          <ul className="movies__list">
            <li className="movie">
              <div className="movie__container">
                <div className="movie__text-container">
                  <p className="movie__title">33 слова о дизайне</p>
                  <span className="movie__duration">1ч 47м</span>
                </div>
                <div className="movie__button-container">
                  <button className="movie__button movie__delete-button"></button>
                </div>
              </div>
              <img src={defaultMovieImage} className="movie__image"/>
            </li>
            <li className="movie">
              <div className="movie__container">
                <div className="movie__text-container">
                  <p className="movie__title">33 слова о дизайне</p>
                  <span className="movie__duration">1ч 47м</span>
                </div>
                <div className="movie__button-container">
                  <button className="movie__button movie__delete-button"></button>
                </div>
              </div>
              <img src={defaultMovieImage} className="movie__image"/>
            </li>
            <li className="movie">
              <div className="movie__container">
                <div className="movie__text-container">
                  <p className="movie__title">33 слова о дизайне</p>
                  <span className="movie__duration">1ч 47м</span>
                </div>
                <div className="movie__button-container">
                  <button className="movie__button movie__delete-button"></button>
                </div>
              </div>
              <img src={defaultMovieImage} className="movie__image"/>
            </li>
          </ul>
          <button className="movies__more-button">Еще</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
