import React, { useEffect } from 'react'
import Header from './Header'
import useTrendingMovies from '../hooks/useTrendingMovies'

const Browse = () => {
  useTrendingMovies();
  return (
    // <div className='font-bold'></div>
    <Header />
  )
}

export default Browse