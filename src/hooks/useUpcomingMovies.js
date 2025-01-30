import { useEffect } from 'react'
import { UPCOMING_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  const getUpcomingMovies = async () => {
    const apiRes = await fetch(UPCOMING_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addUpcomingMovies(data?.results));
  }
  useEffect(() => {
    getUpcomingMovies();
  }, [])
}

export default useUpcomingMovies;