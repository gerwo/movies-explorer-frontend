import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container">
        <ul className="movies__list">
          <MoviesCard/>
        </ul>
        <button className="movies__more-button">Еще</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
