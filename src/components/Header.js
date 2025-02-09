import React, { useEffect, useState } from "react";
import { HEADER_LOGO, USER_AVATAR } from "../utils/constants";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser, leaveUser } from "../utils/userSlice";
import { setKidsMode } from "../utils/kidsModeSlice";
import { FaPencilAlt, FaUser, FaQuestionCircle, FaExchangeAlt } from "react-icons/fa";

const Header = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const isKidsMode = useSelector((store) => store.kidsMode.isKidsMode);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          createUser({
            userId: uid,
            userEmail: email,
            name: displayName,
            logo: photoURL,
          })
        );
        redirect("/browse");
      } else {
        dispatch(leaveUser());
        redirect("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, redirect]);

  // Handle logout
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(leaveUser());
        redirect("/");
      })
      .catch(() => {
        redirect("/error");
      });
  };

  // Handle Profile Switching
  const toggleKidsMode = () => {
    dispatch(setKidsMode(!isKidsMode));
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between items-center px-6 py-3">
      {/* Netflix Logo */}
      <img src={HEADER_LOGO} alt="NETFLIX_LOGO" className="w-36 cursor-pointer" onClick={() => redirect("/browse")} />

      {/* Profile Dropdown */}
      {userInfo && (
        <div className="relative">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="text-white text-lg">{isKidsMode ? "Children" : userInfo.name}</span>
            <img src={userInfo.logo || USER_AVATAR} alt="USER_AVATAR" className="w-8 h-8 rounded-md" />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-black text-white rounded-md shadow-lg overflow-hidden">
              <div className="p-3">
                {/* Main Profile (Disabled if Active) */}
                <div
                  className={`flex items-center space-x-3 p-2 rounded-md ${!isKidsMode ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 cursor-pointer"}`}
                  onClick={!isKidsMode ? null : () => dispatch(setKidsMode(false))}
                >
                  <img src={userInfo.logo || USER_AVATAR} alt="Profile" className="w-8 h-8 rounded-md" />
                  <span>{userInfo.name}</span>
                </div>

                {/* Kids Profile (Disabled if Active) */}
                <div
                  className={`flex items-center space-x-3 p-2 rounded-md ${isKidsMode ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 cursor-pointer"}`}
                  onClick={isKidsMode ? null : toggleKidsMode}
                >
                  <img src="/children_icon.png" alt="Children Profile" className="w-8 h-8 rounded-md" />
                  <span>Children</span>
                </div>
              </div>

              {/* Other Options */}
              <div className="border-t border-gray-700 p-2">
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <FaPencilAlt />
                  <span>Manage Profiles</span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <FaExchangeAlt />
                  <span>Transfer Profile</span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <FaUser />
                  <span>Account</span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <FaQuestionCircle />
                  <span>Help Centre</span>
                </div>
              </div>

              {/* Logout */}
              <div className="border-t border-gray-700 p-2">
                <div className="text-center hover:bg-red-700 p-2 rounded-md cursor-pointer" onClick={logoutHandler}>
                  Sign out of Netflix
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
