import { useEffect } from 'react'
import { TRENDING_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice"

const useTrendingMovies = () => {
  const dispatch = useDispatch()
  const getTrendingMovies = async () => {
    const apiRes = await fetch(TRENDING_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addTrendingMovies(data?.results));
  }
  useEffect(() => {
    getTrendingMovies();
  }, [])
}

export default useTrendingMovies;