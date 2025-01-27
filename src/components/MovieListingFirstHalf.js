import React from 'react'
import { useSelector } from "react-redux";
import VideoBg from './VideoBg';
import VideoInfo from './VideoInfo';

const MovieListingFirstHalf = () => {
  const movieObj = useSelector((store) => store.moviesList?.trendingMovies);
  // In case when redux store does not have any list.
  if (!movieObj) return;
  const { original_title, overview, poster_path } = movieObj[ 0 ];
  // console.log(original_title, overview);
  return (
    <div>
      <VideoInfo title={original_title} desc={overview} logo={poster_path} />
      <VideoBg />
    </div>
  )
}

export default MovieListingFirstHalf