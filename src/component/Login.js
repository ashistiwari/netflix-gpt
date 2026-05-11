import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

 const handleSubmitButton = async (e) => {
  e.preventDefault();
  console.log("Button clicked");

  const message = checkValidateData(
    email.current.value,
    password.current.value
  );

  setErrorMessage(message);

  if (message) return;

  try {
    console.log("Inside try block");
    const url = isSignIn ? "/auth/login" : "/auth/signup";

    const payload = isSignIn
      ? {
          email: email.current.value,
          password: password.current.value,
        }
      : {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
        };

    const res = await api.post(url, payload);
    console.log("API response:", res.data);

    if (isSignIn) {
      localStorage.setItem("token", res.data.token);
      dispatch(addUser(res.data.user));

      console.log("TOKEN:", res.data.token);

      navigate("/browse");
    } else {
      navigate("/");
    }

  } catch (err) {

    const errorMsg =
      err.response?.data || "Something went wrong";

    setErrorMessage(errorMsg);

    console.error(errorMsg);
  }
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
            ref={firstName}
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
            <input
              ref={lastName}
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
