import React, { useEffect } from 'react'
import Header from './Header'
import useTrendingMovies from '../hooks/useTrendingMovies'
import MovieListingFirstHalf from './MovieListingFirstHalf';
import MovieListingSecondHalf from './MovieListingSecondHalf';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopMovies from '../hooks/useTopMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useTrendingMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();
  return (
    <div className=''>
      <Header />
      <MovieListingFirstHalf />
      <MovieListingSecondHalf />
    </div>
  )
}

export default Browse