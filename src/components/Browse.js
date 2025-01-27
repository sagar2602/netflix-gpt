import React, { useEffect } from 'react'
import Header from './Header'
import { TRENDING_MOVIES_API_URL, TMDB_HEADERS } from "../utils/constants"

const Browse = () => {
  const getTrendingMovies = async () => {
    const apiRes = await fetch(TRENDING_MOVIES_API_URL, TMDB_HEADERS)
    const data = await apiRes.json()
    console.log(data?.results);
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