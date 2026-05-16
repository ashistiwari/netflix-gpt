import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMoviesVideos = async () => {
        if (!movieId) return;

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const jsonData = await response.json();
        console.log("Movie Videos:", jsonData);

        if (!response.ok) {
            throw new Error("API failed: " + response.status);
        }

        const filterData = jsonData.results?.filter((video) => video.type === "Trailer" && video.site === "YouTube") || [];
        const trailer = filterData.length ? filterData[0] : jsonData.results?.[0];
        console.log("Filtered Videos:", filterData);

        if (trailer) {
            dispatch(addMovieTrailer(trailer));
        }
    }

    useEffect(() => {
        getMoviesVideos();
    }, [movieId]);
}
export default useMovieTrailer;