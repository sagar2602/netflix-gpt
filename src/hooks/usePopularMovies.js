import { useEffect } from 'react'
import { POPULAR_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies = () => {
  const dispatch = useDispatch()
  const getPopularMovies = async () => {
    const apiRes = await fetch(POPULAR_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addPopularMovies(data?.results));
  }
  useEffect(() => {
    getPopularMovies();
  }, [])
}

export default usePopularMovies;