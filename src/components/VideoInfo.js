import React from 'react'
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, MAX_LENGTH, SOUND_ON_ICON, SOUND_OFF_ICON, INFO_ICON } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { isMuted } from '../utils/movieSoundSlice';

const VideoInfo = ({ title, desc, logo }) => {
  const dispatch = useDispatch();
  const soundFlag = useSelector((store) => store.trailerSound.muted)
  // const soundFlag = false;
  console.log(soundFlag, "cons");
  const [ checkFullDesc, setDesc ] = useState(false);
  // const [ isMuted, setSound ] = useState(false);
  const toggleDesc = () => {
    setDesc(!checkFullDesc);
  }
  // const toggleSound = () => {
  //   setSound(!isMuted);
  // }
  return (
    <div className='px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video flex flex-col justify-center'>
      <img src={MOVIE_LOGO_BASE_URL + logo} className='w-24 h-24 rounded-full border-2 shadow-lg border-gray-400'></img>
      <h1 className='text-4xl font-bold mt-4'>{title}</h1>
      <p className='py-2 text-sm w-1/2'>
        {!checkFullDesc && desc.length > MAX_LENGTH ? desc.slice(0, MAX_LENGTH) + "..." : desc}
      </p>
      { !checkFullDesc &&
        (<span><button onClick={toggleDesc} className="hover:opacity-80 inline font-semibold">
          Read More
        </button></span>)
      }
      { checkFullDesc &&
        (<span><button onClick={toggleDesc} className="hover:opacity-80 inline font-semibold">
          Read Less
        </button></span>)
      }
      <div className='flex gap-4 mt-4'>
        <button className='text-black p-3 px-8 mx-2 rounded-lg flex bg-white items-center hover:bg-opacity-80'>
          <img src={PLAY_ICON} className='w-6 mr-2'></img>
          <p>Play</p>
        </button>
        <button className='text-white p-3 px-8 bg-opacity-50 rounded-lg flex items-center bg-gray-500'>More Info</button>
      </div>
      <button
        // onClick={toggleSound}
        onClick={() => dispatch(isMuted())}
        className="absolute top-5 right-40 bg-white hover:bg-opacity-70 text-white p-2 rounded-full flex items-center my-96 w-10"
      >
        <img src={soundFlag ? SOUND_OFF_ICON : SOUND_ON_ICON} className="" />
      </button>
    </div>
  )
}

export default VideoInfo