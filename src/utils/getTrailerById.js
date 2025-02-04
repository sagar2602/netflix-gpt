import { MOVIE_TRAILER_BY_ID, TMDB_HEADERS } from "../utils/constants"

export const getTrailerById = async (movie_id) => {
  const apiUrl = MOVIE_TRAILER_BY_ID.replace('movie_id', movie_id);
  const resObj = await fetch(apiUrl, TMDB_HEADERS);
  const data = await resObj.json();
  const trailer = data?.results?.filter(movie => movie.type === 'Trailer' && movie.name === 'Official Trailer');
  return trailer;
}