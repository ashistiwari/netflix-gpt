import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies=()=>{
    const dispatch =useDispatch();
    const getUpcomingMovies=async()=>{
        try {
            const response=await fetch("https://api.themoviedb.org/3/discover/movie?with_original_language=ko&with_genres=10749&sort_by=popularity.desc",API_OPTIONS);
            if(!response.ok){
                throw new Error("API failed: "+response.status);
            }
            const dataJson=await response.json();
            console.log("Upcoming Movies:",dataJson);
            dispatch(addUpcomingMovies(dataJson.results));
        } catch (error) {
            console.error("TMDB fetch error:",error);   
    }
    
}
useEffect(()=>{
    getUpcomingMovies();
},[]);
}

export default useUpcomingMovies;
   