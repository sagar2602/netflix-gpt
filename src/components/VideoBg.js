import React from 'react'
import { MOVIE_TRAILER_BY_ID, TMDB_HEADERS } from "../utils/constants"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice';

const VideoBg = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerInfo = useSelector((store) => store.moviesList?.movieTrailer);
  const getTrailerById = async (movie_id) => {
    const apiUrl = MOVIE_TRAILER_BY_ID.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    const trailer = data?.results?.filter(movie => movie.type === 'Trailer' && movie.name === 'Official Trailer');
    dispatch(addMovieTrailer(trailer));
  }
  useEffect(() => {
    getTrailerById(movieId);
    // console.log(trailerInfo[0].key, "key of trailer");
  }, [])
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerInfo[0].key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBg