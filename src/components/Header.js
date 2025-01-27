import React from 'react'
import { HEADER_LOGO, USER_AVATAR } from '../utils/constants'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const redirect = useNavigate();
  const userInfo = useSelector((store) => store.user);
  const logoutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      redirect("/");
    }).catch((error) => {
      // An error happened.
      redirect("/error");
    });
  }
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img src={HEADER_LOGO} alt="NETFLIX_LOGO" className='w-36 p-4'></img>
      {userInfo && <div className='flex px-8 py-2'>
        <img src={userInfo.logo ? userInfo.logo : USER_AVATAR} alt="USER_AVATAR" className='my-4 mx-2 w-8 h-8 cursor-pointer'></img>
        <button onClick={logoutHandler} className='text-white p-0'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header