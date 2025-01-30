import React from 'react'
import MovieCategories from './MovieCategories'
import { useSelector } from 'react-redux'

const MovieListingSecondHalf = () => {
  const moviesList = useSelector((store) => store.moviesList);
  return (
    moviesList && (
      <div className='bg-black'>
        <div className='-mt-40 pl-12 relative z-20'>
          <MovieCategories title={"Now Playing"} movies={moviesList.trendingMovies} />
          <MovieCategories title={"Popular"} movies={moviesList.popularMovies} />
          <MovieCategories title={"Top Rated"} movies={moviesList.topRatedMovies} />
          <MovieCategories title={"Upcoming"} movies={moviesList.upcomingMovies} />
        </div>
      </div>
    )
  )
}

export default MovieListingSecondHalf