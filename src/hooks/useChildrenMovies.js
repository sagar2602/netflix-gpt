import { useEffect } from 'react'
import { CHILDREN_API, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addChildrenMovies } from "../utils/moviesSlice"

const useChildrenMovies = () => {
  const dispatch = useDispatch()
  const getChildrenMovies = async () => {
    const apiRes = await fetch(CHILDREN_API, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addChildrenMovies(data?.results));
  }
  useEffect(() => {
    getChildrenMovies();
  }, [])
}

export default useChildrenMovies;