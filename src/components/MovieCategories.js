import React from 'react'
import MovieCard from './MovieCard'

const MovieCategories = ({ title, movies }) => {
  return (
    <div className='pr-6'>
      <h1 className='text-xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieCategories