import React from 'react';
import { MOVIE_LOGO_BASE_URL } from '../utils/constants';

const SimilarMovieCard = ({ posterPath, movieDesc, voteAvg, releaseYear, duration, movieTitle }) => {
  return (
    <div className="bg-[#181818] p-3 rounded-lg w-[200px] text-white">
      <div className="relative">
        <img className="w-full h-[120px] object-cover rounded-lg" src={MOVIE_LOGO_BASE_URL + posterPath} alt={movieTitle} />
        <div className="absolute bg-gradient-to-r from-black top-1 right-1 text-xs px-1 py-1 rounded-md font-semibold">{duration}</div>
      </div>
      <h3 className="text-sm font-bold mt-2">{movieTitle}</h3>
      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{movieDesc}</p>
      <div className="flex items-center gap-2 text-gray-300 text-xs mt-2">
        <span className="border border-gray-500 px-2 py-1 rounded-md">U/A 16+</span>
        <span>{voteAvg.toFixed(1)}</span>
        <span className="border border-gray-500 px-2 py-1 rounded-md">HD</span>
        <span>{releaseYear}</span>
      </div>
    </div>
  );
};

export default SimilarMovieCard;
