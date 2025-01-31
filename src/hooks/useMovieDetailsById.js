import { MOVIE_DETAILS_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieDetailsById } from '../utils/moviesSlice';

const useMovieDetailsById = (movieId) => {
  const dispatch = useDispatch();
  const getMovieDetailsById = async (movie_id) => {
    const apiUrl = MOVIE_DETAILS_API_URL.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    dispatch(addMovieDetailsById(data));
  }
  useEffect(() => {
    getMovieDetailsById(movieId);
  }, [])
}

export default useMovieDetailsById;