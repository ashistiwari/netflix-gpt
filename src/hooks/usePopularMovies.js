import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularmovies=()=>{
   const dispatch=useDispatch();
    const getPopularMovies=async()=>{
        try {
            const response=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
            if(!response.ok){
                throw new Error("API failed: "+response.status);
            }
            const dataJson=response.json();
            console.log("Popular Movies:",dataJson);
            dispatch(addPopularMovies(dataJson.results));
        }
        catch (error) {
            console.error("TMDB fetch error:",error);
        }
    }
    useEffect(()=>{
        getPopularMovies();
    },[]);
}
export default usePopularmovies;