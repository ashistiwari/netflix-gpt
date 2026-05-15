import React, { useEffect,useCallback } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { addUser } from "../utils/userSlice";
import {useDispatch} from "react-redux";
import { removeUser } from "../utils/userSlice";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
  ),
    },
    {
      path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ),
    },
  ]);
const fetchUser = useCallback(async (accessToken) => {

  try {

    const res = await fetch("http://localhost:8080/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("STATUS:", res.status);

    const data = await res.text();

    console.log("RAW RESPONSE:", data);

    if (res.ok) {

      const userData = JSON.parse(data);

      console.log("USER DATA:", userData);

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


