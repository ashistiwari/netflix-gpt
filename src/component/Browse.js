import React, { use } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browser = () => {
  useNowPlayingMovies();
  usePopularmovies();
  useUpcomingMovies();

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
      <Header />
    </div>
  );
};

export default Browser;
