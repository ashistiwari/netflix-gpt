import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    console.log("Sign Out Clicked");
  localStorage.removeItem("accessToken");

  dispatch(removeUser());

  navigate("/");
};
  return (
    <div className="absolute top-0 left-0 w-full z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />{user && (
      <div className="flex p-2">
      <img 
      className="w-12 h-12"
      alt="userIcon" 
      onClick={handleSignOut}
      src="https://occ-0-4995-3647.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf7EMnYmiegBSxWjOTXkzTXkTcjuH2w4uIhr6OStUdFTLZtS6UmB0s8Ht7poTk5TE1f2ppZf4Cy7eYIEo26z_OyNP7j36CA.png?r=e6e"/>
      <button className="font-bold text-white">(Sign Out)</button>
    </div>)}
    </div>
    
  );
};

export default Header;
