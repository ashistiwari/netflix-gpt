import React, { useEffect,useCallback } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { addUser } from "../utils/userSlice";
import {useDispatch} from "react-redux";
import { removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse/>,
    },
  ]);

const fetchUser = useCallback(async (accessToken) => {
  try {
    const res = await fetch("http://localhost:8080/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const userData = await res.json();

      dispatch(addUser(userData));
    } else {
      dispatch(removeUser());
      localStorage.removeItem("accessToken");
    }
  } catch (err) {
    console.error(err);
  }
}, [dispatch]);

useEffect(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    fetchUser(accessToken);
  }
}, [fetchUser]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;


