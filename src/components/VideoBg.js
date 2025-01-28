import React from 'react'
import { MOVIE_TRAILER_BY_ID, TMDB_HEADERS } from "../utils/constants"
import { useEffect } from 'react'

const VideoBg = ({ movieId }) => {
  const getTrailerById = async (movie_id) => {
    const apiUrl = MOVIE_TRAILER_BY_ID.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    const trailer = data?.results?.filter(movie => movie.type === 'Trailer' && movie.name === 'Official Trailer');
    console.log(trailer);
  }
  useEffect(() => {
    getTrailerById(movieId);
  }, [])
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/-ZAohhw3zoY?si="}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBg