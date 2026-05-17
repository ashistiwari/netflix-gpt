import React, { use } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch=useSelector((store)=>store.gptSearch?.showGptSearch);
  useNowPlayingMovies();
  usePopularmovies();
  useUpcomingMovies();

  return (
    <div>
      {showGptSearch ?<GptSearch/> :<> 
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      <GptSearch/>
      
      <Header />
    </div>
  );
};

export default Browser;
