import React from 'react'
import { useSelector } from "react-redux";
import VideoBg from './VideoBg';
import VideoInfo from './VideoInfo';
import { MOVIE_INDEX } from '../utils/constants';

const MovieListingFirstHalf = () => {
  const movieObj = useSelector((store) => store.moviesList?.trendingMovies);
  // In case when redux store does not have any list.
  if (!movieObj) return;
  const { original_title, overview, poster_path, id } = movieObj[MOVIE_INDEX];
  return (
    <div>
      <VideoInfo title={original_title} desc={overview} logo={poster_path} />
      <VideoBg movieId={id} />
    </div>
  )
}

export default MovieListingFirstHalf