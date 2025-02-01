import React, { useEffect, useState } from 'react';
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, PLUS_ICON, LIKED_ICON, MOVIE_DETAILS_API_URL, TMDB_HEADERS } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux'
import { setHoveredMovieId, addMovieDetailsById } from '../utils/moviesSlice';
import { getMoviegenres } from '../utils/getMoviegenres';
import { getMovieRuntime } from '../utils/getMovieRuntime';

const MovieCard = ({ movieId, posterPath, movieCategory, categoryRef }) => {
  const dispatch = useDispatch();
  const [ isHover, setIsHovered ] = useState(false);
  const currentMovieDetails = useSelector((store) => store.moviesList?.movieDetails);
  // const isHover = useSelector((store) => store.moviesList?.hoveredMovieId)
  // useMovieDetailsById(movieId);
  // const [ isHover, setHover ] = useState(false);
  const getMovieDetailsById = async (movie_id) => {
    const apiUrl = MOVIE_DETAILS_API_URL.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    dispatch(addMovieDetailsById(data));
  }
  useEffect(() => {
    // if (isHover?.id === movieId) {
    if (isHover) {
      getMovieDetailsById(movieId);
    }
  }, [ isHover ])
  
  const movieGen = getMoviegenres(currentMovieDetails);
  const movieRuntime = getMovieRuntime(currentMovieDetails);

  return (
    <div 
      className={`relative w-48 pr-4 transition-transform duration-300 group ${(isHover) ? 'scale-130 z-80' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isHover) ? (
        <div className='absolute top-0 left-0 w-[300px] h-auto bg-black rounded-lg shadow-lg p-3 z-20 transform transition-transform duration-300'>
          {/* Video Section */}
          <div className='relative w-full h-[170px] bg-black rounded-t-lg overflow-hidden'>
            <iframe
              className='w-full h-full rounded-t-lg border border-gray-700'
              src="https://www.youtube.com/embed/YSwYhvG0Hy4?autoplay=1&mute=true&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            ></iframe>
          </div>
          {/* Info Section */}
          <div className="p-3 text-white rounded-b-lg bg-black bg-opacity-80 backdrop-blur-md relative">
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
            {/* Age Rating, Episodes, HD Tag */}
            <div className="flex items-center gap-3 my-2 text-gray-300 text-sm">
              <span className="border px-2 py-1 rounded-md border-gray-500">U/A 16+</span>
              <span>{movieRuntime}</span>
              <span className="border px-2 py-1 rounded-md border-gray-500">HD</span>
            </div>
            <div>
              <p className='text-white'>{ movieGen }</p>
            </div>
            {/* Most Liked Button */}
            <div className="mt-3">
              <button className="flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-md text-sm">
                <img src={LIKED_ICON} className="w-4" /> Most Liked
              </button>
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
