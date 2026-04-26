import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignIn && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full"
        />
        <button className="p-4 my-6 bg-red-700 w-full">Submit</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignIn
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
