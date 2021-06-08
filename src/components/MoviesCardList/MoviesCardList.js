import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import {
  moviesCountToRenderSmall,
  moviesCountToRenderMedium,
  moviesCountToRenderBig,
  moviesCountToMoreRenderSmall,
  moviesCountToMoreRenderBig,
} from '../../utils/constants';

import './MoviesCardList.css';

function MoviesCardList({
  movies,
  isLoading = false,
  saveMovie = () => {},
  removeMovie,
  savedMoviesIds,
}) {
  const [renderedMoviesCount, setRenderedMoviesCount] = useState(0);
  const [MoviesToMoreRenderCount, setMoviesToMoreRenderCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = window.location.pathname;

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1500);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 480) {
        setRenderedMoviesCount(moviesCountToRenderSmall);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderSmall);
      } else if (windowWidth <= 768) {
        setRenderedMoviesCount(moviesCountToRenderMedium);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderSmall);
      } else {
        setRenderedMoviesCount(moviesCountToRenderBig);
        setMoviesToMoreRenderCount(moviesCountToMoreRenderBig);
      }
    } else {
      setRenderedMoviesCount(movies.length);
    }
  }, [windowWidth, location, movies.length]);

  const handleMoreClick = () => {
    setRenderedMoviesCount(renderedMoviesCount + MoviesToMoreRenderCount);
  };

  return (
    <section className="movies">
      <div className="movies__container">
      { isLoading && <Preloader /> }
      { (!isLoading && movies.length === 0) && <p className="movies__error">Ничего не найдено</p> }
      {
        (!isLoading && movies)
          && <ul className="movies__list">
            {
              movies.reduce((moviesToRender, movie) => {
                if (moviesToRender.length < renderedMoviesCount) {
                  moviesToRender.push(
                    <MoviesCard
                      movie={movie}
                      key={movie.movieId}
                      onSave={saveMovie}
                      onRemove={removeMovie}
                      savedMoviesIds={savedMoviesIds}
                    />,
                  );
                }
                return moviesToRender;
              }, [])
            }
          </ul>
      }
      {
        (!isLoading && movies.length > renderedMoviesCount)
          && <button onClick={handleMoreClick} className="movies__more-button">Еще</button>
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
