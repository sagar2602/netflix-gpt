import { useEffect } from 'react'
import { TOP_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice"

const useTopMovies = () => {
  const dispatch = useDispatch()
  const getTopMovies = async () => {
    const apiRes = await fetch(TOP_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addTopMovies(data?.results));
  }
  useEffect(() => {
    getTopMovies();
  }, [])
}

export default useTopMovies;