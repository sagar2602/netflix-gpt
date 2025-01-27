import React, { useEffect } from 'react'
import Header from './Header'
import { TRENDING_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"
import { useDispatch } from "react-redux";
import {addTrendingMovies} from "../utils/moviesSlice"

const Browse = () => {
  const dispatch = useDispatch()
  const getTrendingMovies = async () => {
    const apiRes = await fetch(TRENDING_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    dispatch(addTrendingMovies(data?.results));
  }
  useEffect(() => {
    getTrendingMovies();
  }, [])
  return (
    // <div className='font-bold'></div>
    <Header />
  )
}

export default Browse