import React from 'react'
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, MAX_LENGTH, INFO_ICON } from "../utils/constants"
import { useState } from 'react';

const VideoInfo = ({ title, desc, logo }) => {
  const [ checkFullDesc, setDesc ] = useState(false);
  const toggleDesc = () => {
    setDesc(!checkFullDesc);
  }
  return (
    <div className='pt-24 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video flex flex-col justify-center'>
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
    </div>
  )
}

export default VideoInfo