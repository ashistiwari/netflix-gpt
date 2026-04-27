import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmitButton = (e) => {
    //Validate the form
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    console.log(message);
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
              className="p-4 my-4 w-full bg-gray-700"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        {errorMessage && (
          <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
        )}
        <button
          type="button"
          className="p-4 my-6 bg-red-700 w-full"
          onClick={handleSubmitButton}
        >
          Submit
        </button>
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
