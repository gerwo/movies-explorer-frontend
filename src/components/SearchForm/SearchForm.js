import React, { useRef, useState } from 'react';

import { searchErrorMessage } from '../../utils/constants';

import './SearchForm.css';

function SearchForm({ searchMovies }) {
  const [error, setError] = useState('');
  const [movie, setMovie] = useState('');
  const checked = useRef();

  const handleChange = (evt) => {
    setMovie(evt.target.value);
  };

  const handleCheckboxChange = () => {
    searchMovies(movie, checked.current.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!movie) {
      setError(searchErrorMessage);
    } else {
      setError('');
      searchMovies(movie, checked.current.checked);
    }
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">

        <div className="search-form__search-container">
          <div className="search-form__input-container">
            <input className="search-form__input" placeholder="Фильм" value={movie} onChange={handleChange}/>
            <button className="search-form__button">Найти</button>
          </div>
          <div className="search-form__switch-container">
            <label className="switch">
              <input className="switch__input" type="checkbox" ref={checked} onChange={handleCheckboxChange}/>
              <span className="switch__slider"></span>
            </label>
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </div>
        <span className="search-form__error">{error}</span>
      </div>
    </form>
  );
}

export default SearchForm;
