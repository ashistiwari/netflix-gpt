import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { NETFLIX_LOGO_URL, SIGN_OUT_ICON_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
  localStorage.removeItem("accessToken");
  dispatch(removeUser());
  navigate("/");
};
  return (
    <div className="absolute top-0 left-0 w-full z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO_URL}
        alt="Netflix Logo"
      />{user && (
      <div className="flex p-2">
      <img 
      className="w-12 h-12"
      alt="userIcon" 
      onClick={handleSignOut}
      src={SIGN_OUT_ICON_URL}/>
      <button className="font-bold text-white">(Sign Out)</button>
    </div>)}
    </div>
    
  );
};

export default Header;
