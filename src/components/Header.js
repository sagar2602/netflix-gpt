import React from 'react'
import { HEADER_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10'>
      <img src={HEADER_LOGO} alt="NETFLIX_LOGO" className='w-36 p-4'></img>
    </div>
  )
}

export default Header