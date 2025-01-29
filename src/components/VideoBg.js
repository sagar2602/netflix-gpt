import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBg = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerInfo = useSelector((store) => store.moviesList?.movieTrailer);
  const soundFlag = useSelector((store) => store.trailerSound.muted)
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + (trailerInfo && trailerInfo[0] && trailerInfo[0].key) + "?autoplay=1&mute=" + soundFlag}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBg