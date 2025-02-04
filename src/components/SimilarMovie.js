import React from 'react';
import SimilarMovieCard from './SimilarMovieCard';
import { getReleaseYear } from '../utils/getReleaseYear';

const SimilarMovie = ({ movieSimilar }) => {
  // Group movies in chunks of 3 per row
  const chunkSize = 3;
  const movieChunks = [];
  
  for (let i = 0; i < movieSimilar?.results?.length; i += chunkSize) {
    movieChunks.push(movieSimilar.results.slice(i, i + chunkSize));
  }

  return (
    <div className="bg-[#181818] p-6 rounded-lg">
      <h2 className="text-white text-xl font-semibold mb-4">More Like This</h2>

      {/* Mapping through each row of 3 movies */}
      <div className="flex flex-col gap-6">
        {movieChunks.map((chunk, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6">
            {chunk.map((movie) => {
              const releaseYear = getReleaseYear(movie.release_date);
              return (
                <SimilarMovieCard 
                  key={movie.id}
                  posterPath={movie.poster_path} 
                  movieId={movie.id} 
                  movieDesc={movie.overview} 
                  movieTitle={movie.title} 
                  voteAvg={movie.vote_average} 
                  releaseYear={releaseYear}
                  duration={"2h 20m"}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovie;
