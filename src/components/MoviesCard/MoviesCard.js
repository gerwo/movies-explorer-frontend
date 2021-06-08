import React from 'react';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <li className="movie">
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
            <span className="movie__duration">1ч 47м</span>
          </div>
          <div className="movie__button-container">
            <button className="movie__button movie__save-button"></button>
          </div>
        </div>
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
      </li>
    </>
  );
}

export default MoviesCard;
