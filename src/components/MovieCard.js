import React from 'react'
import {MOVIE_LOGO_BASE_URL} from "../utils/constants"

const MovieCard = ({ id, posterPath }) => {
  console.log(id, posterPath);
  return (
    <div className='w-48 pr-4'>
      <img alt="movie-poster" src={MOVIE_LOGO_BASE_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard