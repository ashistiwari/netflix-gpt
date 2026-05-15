import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies = () => {
    const dispatch =useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
      if (!response.ok) {
        throw new Error("API failed: " + response.status);
      }
      const dataJson = await response.json();
      dispatch(addNowPlayingMovies(dataJson.results));
      console.log("Now Playing Movies:", dataJson);
    } catch (error) {
      console.error("TMDB fetch error:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;