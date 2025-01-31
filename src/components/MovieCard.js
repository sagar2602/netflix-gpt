import React from 'react'
import { MOVIE_LOGO_BASE_URL } from "../utils/constants"
import { useState } from 'react';

const MovieCard = ({ id, posterPath }) => {
  const [ isHover, setHover ] = useState(false);
  return (
    <div className={`relative w-48 pr-4 transition-transform duration-300 ${isHover ? 'scale-200 z-10' : 'scale-100'}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      {/* <img alt="movie-poster" src={MOVIE_LOGO_BASE_URL + posterPath}></img> */}
      {isHover ? ( // Step 8: Check if hovered and video exists
        <div className='absolute top-0 left-0 w-[300px] h-[170px] scale-125 z-10'><iframe
          className='w-full h-full rounded-lg'
        src="https://www.youtube.com/embed/82WW9dVbglI?autoplay=1&mute=false&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
      ></iframe></div>
      ) : ( // Step 9: Show poster when not hovered
        <img
          className="w-full rounded-lg"
          alt="movie-poster"
          src={MOVIE_LOGO_BASE_URL + posterPath}
        />
      )}
    </div>
  )
}

export default MovieCard