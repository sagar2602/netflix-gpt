import React from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constants'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_IMG} alt="NETFLIX"></img>
      </div>
      <form className='absolute w-1/3 bg-black text-white my-28 mx-auto right-0 left-0 p-10 rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-3xl'>SignIn</h1>
        <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <input type="password" placeholder='Enter Your Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <button className='p-2 my-6 bg-red-500 w-full rounded-lg'>Sign In</button>
        <p className='p-2 my-2'>New to Netflix? Sign up now.</p>
      </form>
    </div>
  )
}

export default Login