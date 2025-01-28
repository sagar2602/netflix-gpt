import { MOVIE_TRAILER_BY_ID, TMDB_HEADERS } from "../utils/constants"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerById = async (movie_id) => {
    const apiUrl = MOVIE_TRAILER_BY_ID.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    const trailer = data?.results?.filter(movie => movie.type === 'Trailer' && movie.name === 'Official Trailer');
    dispatch(addMovieTrailer(trailer));
  }
  useEffect(() => {
    getTrailerById(movieId);
    // console.log(trailerInfo[0].key, "key of trailer");
  }, [])
}

export default useMovieTrailer;