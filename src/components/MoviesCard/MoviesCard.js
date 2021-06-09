import React, { useState, useEffect } from 'react';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './MoviesCard.css';

function MoviesCard({
  movie,
  onSave,
  onRemove,
  savedMoviesIds,
}) {
  const {
    country,
    director,
    year,
    description,
    image,
    thumbnail,
    nameRU,
    nameEN,
    duration,
    trailer,
    movieId,
    _id,
  } = movie;

  // eslint-disable-next-line no-console
  console.log(movie);

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration - (durationHours * 60);
  const durationString = durationHours ? `${durationHours}ч ${durationMinutes}м` : `${durationMinutes}мин`;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedMoviesIds && savedMoviesIds.includes(movieId)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMoviesIds, movieId]);

  const handleClick = () => {
    window.open(trailer);
  };

  const handleSave = () => {
    onSave({
      country: country || 'Не указано',
      director: director || 'Не указано',
      duration: duration || 0,
      year: year || 'Не указано',
      description: description || 'Не указано',
      image: image || defaultMovieImage,
      trailer: (trailer && trailer.startsWith('http')) ? trailer : 'https://youtube.com',
      thumbnail: thumbnail || defaultMovieImage,
      nameRU: nameRU || 'Не указано',
      nameEN: nameEN || 'Не указано',
      movieId,
    });
  };

  const handleRemove = () => {
    onRemove(_id);
  };

  return (
    <>
      <li className="movie">
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">{nameRU}</p>
            <span className="movie__duration">{durationString}</span>
          </div>
          <div className="movie__button-container">
            <button className={`movie__button movie__unsave-button ${isSaved && 'movie__saved-button'}`} onClick={!isSaved ? handleSave : handleRemove}></button>
          </div>
        </div>
        <img src={image || defaultMovieImage} className="movie__image" alt={nameRU} onClick={handleClick}/>
      </li>
    </>
  );
}

export default MoviesCard;
