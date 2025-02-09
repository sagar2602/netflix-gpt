import React, { useEffect, useState } from "react";
import { HEADER_LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { createUser, leaveUser } from "../utils/userSlice";
import { setKidsMode } from "../utils/kidsModeSlice"; // Redux slice for Kids mode

const Header = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const isKidsMode = useSelector((store) => store.kidsMode.isKidsMode);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle logout
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        redirect("/error");
      });
  };

  // Handle Kids Mode Switch
  const handleModeSwitch = (mode) => {
    dispatch(setKidsMode(mode === "kids"));
    setShowDropdown(false);
    redirect("/browse"); // Redirect after switching
  };

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
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={HEADER_LOGO} alt="NETFLIX_LOGO" className="w-36 p-4" />
      
      {userInfo && (
        <div className="flex px-8 py-2 relative">
          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src={userInfo.logo ? userInfo.logo : USER_AVATAR}
              alt="USER_AVATAR"
              className="my-4 mx-2 w-8 h-8 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 bg-black text-white shadow-lg rounded-md w-40">
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    !isKidsMode ? "bg-gray-700" : ""
                  }`}
                  onClick={() => handleModeSwitch("regular")}
                >
                  Regular Mode
                </button>
                <button
                  className={`block w-full px-4 py-2 text-left ${
                    isKidsMode ? "bg-gray-700" : ""
                  }`}
                  onClick={() => handleModeSwitch("kids")}
                >
                  Kids Mode
                </button>
              </div>
            )}
          </div>

          {/* Sign Out Button */}
          <button onClick={logoutHandler} className="text-white p-0">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
