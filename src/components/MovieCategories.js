import React, {useRef} from 'react'
import MovieCard from './MovieCard'

const MovieCategories = ({ title, movies }) => {
  const categoryRef = useRef(null);
  return (
    <div className='pr-6'>
      <h1 ref={categoryRef} className='text-xl py-4 text-white movie-category'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} movieCategory={title} categoryRef={categoryRef} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieCategories