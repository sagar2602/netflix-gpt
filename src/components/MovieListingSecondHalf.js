import React from 'react'
import MovieCategories from './MovieCategories'
import { useSelector } from 'react-redux'

const MovieListingSecondHalf = () => {
  const moviesList = useSelector((store) => store.moviesList);
  return (
    moviesList && (
      <div>
        <MovieCategories title={"Now Playing"} movies={moviesList.trendingMovies} />
        <MovieCategories title={"Popular"} movies={moviesList.popularMovies} />
        <MovieCategories title={"Top Rated"} movies={moviesList.topRatedMovies} />
        <MovieCategories title={"Upcoming"} movies={moviesList.upcomingMovies} />
      </div>
    )
  )
}

export default MovieListingSecondHalf