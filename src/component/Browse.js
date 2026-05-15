import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainContainer/>
      <Header />
    </div>
  );
};

export default Browser;
