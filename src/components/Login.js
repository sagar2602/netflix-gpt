import React from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constants'
import { useState, useRef } from 'react'
import { validateUser } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [ toggleLogin, setToggleLogin ] = useState(true);
  const [ checkError, setError ] = useState([]);
  const userEmail = useRef(null);
  const userPass = useRef(null);
  const userName = useRef(null);
  const toggleLoginHandler = () => {
    setToggleLogin(!toggleLogin);
  }
  const submitHandler = () => {
    // Validate the form data
    const name = !toggleLogin ? userName.current.value : 'loginForm';
    const errorMsg = validateUser(userEmail.current.value, userPass.current.value, name);
    setError(errorMsg);
    if (checkError) return;
    // Sign Up
    if (!toggleLogin) {
      createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPass.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError([ errorCode + "-" + errorMessage, "AUTH" ]);
          // ..
        });
    }
    // Sign In
    else {
      signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPass.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError([ errorCode + "-" + errorMessage, "AUTH" ]);
      });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_IMG} alt="NETFLIX"></img>
      </div>
      <form onSubmit={(e) => {e.preventDefault()}}
        className='absolute w-1/3 bg-black text-white my-28 mx-auto right-0 left-0 p-10 rounded-lg bg-opacity-80'>
        <h1 className='font-bold py-4 text-3xl'>{toggleLogin ? "SignIn" : "SignUp"}</h1>
        {!toggleLogin && (<div><input ref={userName} type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border-gray-500 border-2" />{(checkError && checkError[1] == 'name') ? <span className='text-red-600'>{checkError[ 0 ]}</span> : null}</div>)}
        <input ref={userEmail} type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border-gray-500 border-2" />
        {(checkError && checkError[1] == 'email') ? <span className='text-red-600'>{checkError[ 0 ]}</span> : null}
        <input ref={userPass} type="password" placeholder='Enter Your Password' className='p-4 my-4 w-full bg-black bg-opacity-0  rounded-lg border-gray-500 border-2' />
        {(checkError && (checkError[1] == 'pass' || checkError[1] == 'AUTH')) ? <p className='text-red-600'>{checkError[ 0 ]}</p> : null}
        <button className='p-2 my-6 bg-red-600 w-full rounded-lg' onClick={submitHandler}>{toggleLogin ? "Sign In" : "Sign Up"}</button>
        <p className='p-2 my-2 cursor-pointer' onClick={toggleLoginHandler}>{toggleLogin ? "New to Netflix? Sign up now." : "Already Registered? Sign in now."}</p>
      </form>
    </div>
  )
}

export default Login