import React from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constants'
import { useState } from 'react'

const Login = () => {
  const [ toggleLogin, setToggleLogin ] = useState(true);
  const toggleLoginHandler = () => {
    setToggleLogin(!toggleLogin);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_IMG} alt="NETFLIX"></img>
      </div>
      <form className='absolute w-1/3 bg-black text-white my-28 mx-auto right-0 left-0 p-10 rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-3xl'>{toggleLogin ? "SignIn" : "SignUp"}</h1>
        {!toggleLogin && <input type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border-gray-500 border-2" />}
        <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border-gray-500 border-2" />
        <input type="password" placeholder='Enter Your Password' className='p-4 my-4 w-full bg-black bg-opacity-0  rounded-lg border-gray-500 border-2' />
        <button className='p-2 my-6 bg-red-600 w-full rounded-lg'>{toggleLogin ? "Sign In" : "Sign Out"}</button>
        <p className='p-2 my-2 cursor-pointer' onClick={toggleLoginHandler}>{toggleLogin ? "New to Netflix? Sign up now." : "Already Registered? Sign in now."}</p>
      </form>
    </div>
  )
}

export default Login