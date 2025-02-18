import React, { useEffect } from 'react'
import Header from './Header'
import { LOGIN_USER_AVATAR_FROM_STORE, USER_AVATAR, CHILDREN_AVATAR } from '../utils/constants';
import { useSelector, useDispatch } from "react-redux";

const ManageProfile = () => {
  const userInfo = useSelector((store) => store.user);
  const profiles = [
    {
      id: 1,
      name: userInfo?.name,
      avatar: LOGIN_USER_AVATAR_FROM_STORE,
      isCurrent: true
    },
    {
      id: 2,
      name: "SV",
      avatar: USER_AVATAR,
      isCurrent: false
    },
    {
      id: 3,
      name: "Children",
      avatar: CHILDREN_AVATAR,
      isCurrent: false,
      isChild: true
    }
  ];
  return (
    <div className=''>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
      <div className="bg-white shadow-md p-6 rounded-lg w-96">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between p-3 border-b last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl"><img src={profile.avatar} className="w-8 h-8 rounded-md"></img></span>
              <span className="text-lg font-medium">{profile.name}</span>
            </div>
            {profile.isCurrent && (
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                Your Profile
              </span>
            )}
          </div>
        ))}
        <button className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-md">
          Add Profile
        </button>
        <p className="text-sm text-gray-500 text-center mt-2">
          Add up to 5 profiles for anyone who lives with you.
        </p>
      </div>
    </div>
    </div>
  )
}

export default ManageProfile