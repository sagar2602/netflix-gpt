import React from 'react'
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, MAX_LENGTH, SOUND_ON_ICON, SOUND_OFF_ICON, MOVIE_DETAILS_API_URL, TMDB_HEADERS, MOVIE_CAST_API_URL, LIKE_MOVIES_API_URL, INFO_ICON } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { isMuted } from '../utils/movieSoundSlice';
import MovieModal from './MovieModal';
import { addMovieDetailsById } from '../utils/moviesSlice';
import { getMovieCredits } from '../utils/getMovieCredits';
import { getSimilarMovies } from '../utils/getSimilarMovies';

const VideoInfo = ({ title, desc, logo, movieId }) => {
  const dispatch = useDispatch();
  const [showModal, setModal] = useState(false);
  const soundFlag = useSelector((store) => store.trailerSound.muted);
  const [ checkFullDesc, setDesc ] = useState(false);
  const currentMovieDetails = useSelector((store) => store.moviesList?.movieDetails);
  const [ movieCast, setMovieCast ] = useState(null);
  const [ similarMovie, setSimilarMovies ] = useState(null);
  const toggleDesc = () => {
    setDesc(!checkFullDesc);
  };

  const getMovieDetailsById = async (movie_id) => {
    const apiUrl = MOVIE_DETAILS_API_URL.replace('movie_id', movie_id);
    const resObj = await fetch(apiUrl, TMDB_HEADERS);
    const data = await resObj.json();
    dispatch(addMovieDetailsById(data));
  }

  const fetchMovieCredits = async (MOVIE_CAST_API_URL, movieId, TMDB_HEADERS) => {
    const credits = await getMovieCredits(MOVIE_CAST_API_URL, movieId, TMDB_HEADERS);
    setMovieCast(credits);
  }

  const fetchSimilarMovies = async (apiURL, movieId, headers) => {
    const movies = await getSimilarMovies(apiURL, movieId, headers);
    setSimilarMovies(movies);
  }

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      getMovieDetailsById(movieId);
      fetchMovieCredits(MOVIE_CAST_API_URL, movieId, TMDB_HEADERS);
      fetchSimilarMovies(LIKE_MOVIES_API_URL, movieId, TMDB_HEADERS);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup when component unmounts or modal closes
    };
  }, [ showModal ]); // Runs only when showModal changes

  return (
    <div className='px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video flex flex-col justify-center'>
      <img src={MOVIE_LOGO_BASE_URL + logo} className='w-24 h-24 rounded-full border-2 shadow-lg border-gray-400'></img>
      <h1 className='text-4xl font-bold mt-4'>{title}</h1>
      <p className='py-2 text-sm w-1/2'>
        {!checkFullDesc && desc.length > MAX_LENGTH ? desc.slice(0, MAX_LENGTH) + "..." : desc}
      </p>
      {!checkFullDesc &&
        (<span><button onClick={toggleDesc} className="hover:opacity-80 inline font-semibold">
          Read More
        </button></span>)
      }
      {checkFullDesc &&
        (<span><button onClick={toggleDesc} className="hover:opacity-80 inline font-semibold">
          Read Less
        </button></span>)
      }
      <div className='flex gap-4 mt-4'>
        <button className='text-black p-3 px-8 mx-2 rounded-lg flex bg-white items-center hover:bg-opacity-80'>
          <img src={PLAY_ICON} className='w-6 mr-2'></img>
          <p>Play</p>
        </button>
        <button className='text-white p-3 px-8 bg-opacity-50 rounded-lg flex items-center bg-gray-500' onClick={() => setModal(true)}>More Info</button>
      </div>
      <button
        onClick={() => dispatch(isMuted())}
        className="absolute top-5 right-40 bg-white hover:bg-opacity-70 text-white p-2 rounded-full flex items-center my-96 w-10"
      >
        <img src={soundFlag ? SOUND_OFF_ICON : SOUND_ON_ICON} className="" />
      </button>

      {/* Render Modal When ShowModal is True */}
      {showModal && (
        <MovieModal
          movie={{ title, desc, logo, movieId }}
          movieDetails={currentMovieDetails}
          movieCredits={movieCast}
          similarMovies={ similarMovie }// Pass movie details
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default VideoInfo;
