import React, { useEffect } from 'react'
import Header from './Header'
import useTrendingMovies from '../hooks/useTrendingMovies'
import MovieListingFirstHalf from './MovieListingFirstHalf';
import MovieListingSecondHalf from './MovieListingSecondHalf';

const Browse = () => {
  useTrendingMovies();
  return (
    <div className=''>
      <Header />
      <MovieListingFirstHalf />
      <MovieListingSecondHalf />
    </div>
  )
}

export default Browse