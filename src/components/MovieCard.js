import React, { useState } from 'react';
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, PLUS_ICON, LIKED_ICON } from "../utils/constants";
import useMovieDetailsById from '../hooks/useMovieDetailsById';

const MovieCard = ({ movieId, posterPath }) => {
  console.log(movieId, 'MID');
  useMovieDetailsById(movieId);
  const [ isHover, setHover ] = useState(false);

  return (
    <div 
      className={`relative w-48 pr-4 transition-transform duration-300 group ${isHover ? 'scale-125 z-50' : 'scale-100'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHover ? (
        <div className='absolute top-0 left-0 w-[300px] h-auto bg-black rounded-lg shadow-lg p-3 z-20 transform transition-transform duration-300'>
          {/* Video Section */}
          <div className='relative w-[300px] h-[170px] bg-black rounded-t-lg overflow-hidden'>
            <iframe
              className='w-full h-full rounded-t-lg border border-gray-700'
              src="https://www.youtube.com/embed/YSwYhvG0Hy4?autoplay=1&mute=true&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          {/* Info Section */}
          <div className="p-3 text-white rounded-b-lg bg-black bg-opacity-80 backdrop-blur-md">
            <h3 className="text-lg font-bold">Movie Title</h3>
            <div className="flex items-center gap-3 my-2">
              <button className="bg-white pr-2 pl-2 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <img src={PLAY_ICON} className='w-6' />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <img src={PLUS_ICON} className='w-6' />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <img src={LIKED_ICON} className='w-6' />
              </button>
            </div>
            <div>

            </div>
          </div>
        </div>
      ) : (
        <img
          className="w-full rounded-lg"
          alt="movie-poster"
          src={MOVIE_LOGO_BASE_URL + posterPath}
        />
      )}
    </div>
  );
};

export default MovieCard;
