import React from 'react'
import { MOVIE_LOGO_BASE_URL, PLAY_ICON, INFO_ICON } from "../utils/constants"

const VideoInfo = ({title, desc, logo}) => {
  return (
    <div className='pt-36 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <img src={MOVIE_LOGO_BASE_URL + logo} className='w-24 h-24 rounded-full border-2 shadow-lg border-gray-400'></img>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-2 text-sm w-1/2'>{desc}</p>
      <div className='flex font-bold'>
        <button className='text-black p-4 px-10 mx-2 bg-opacity-50 rounded-lg flex bg-gray-500'>
          <img src={PLAY_ICON} className='w-6 mx-2'></img>
          <p>Play</p>
        </button>
        <button className='text-white p-4 px-10 bg-opacity-50 rounded-lg flex justify-between bg-gray-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoInfo