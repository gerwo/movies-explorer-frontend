import { shortDuration } from './constants';

export const searchByKeyword = (movies, keyword = '', isIncludesShort) => {
  const minDuration = !isIncludesShort ? 0 : shortDuration;

  return movies.filter(
    (movie) => (keyword ? movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) : true)
      && (isIncludesShort ? movie.duration <= minDuration : movie.duration > minDuration),
  );
};

export const formatMovies = (movies, BASE_URL) => movies.map((movie) => {
  const formattedMovie = {
    ...movie,
    movieId: movie.id,
    image: movie.image ? (BASE_URL + movie.image.url) : '',
    thumbnail: movie.image ? (BASE_URL + movie.image.formats.thumbnail.url) : '',
    trailer: movie.trailerLink,
  };

  return formattedMovie;
});
