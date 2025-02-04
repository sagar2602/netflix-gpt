import { MOVIE_TRAILER_BY_ID, TMDB_HEADERS } from "../utils/constants"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieTrailer, setHoveredMovieTrailer } from '../utils/moviesSlice';

const useMovieTrailer = (movieId, isMovieCard = null) => {
  const dispatch = useDispatch();
  const getTrailerById = async (movie_id) => {
    const apiUrl = MOVIE_TRAILER_BY_ID.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    const trailer = data?.results?.filter(movie => movie.type === 'Trailer' && movie.name === 'Official Trailer');
    isMovieCard ? dispatch(setHoveredMovieTrailer(trailer)) : dispatch(addMovieTrailer(trailer));
    
  }
  useEffect(() => {
    getTrailerById(movieId);
  }, [])
}

export default useMovieTrailer;