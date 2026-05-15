import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    const dispatch=useDispatch();
    const trailerKey=useSelector((store)=>store.movies?.movieTrailer?.key);
    const getMoviesVideos=async()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
        const jsonData=await response.json();
        console.log("Movie Videos:",jsonData);
        const filterData=jsonData.results.filter((video)=>video.type==="Trailer" && video.site==="YouTube");
        const trailer=filterData.length?filterData[0]:filterData.results[0];
        console.log("Filtered Videos:",filterData);
        if(!response.ok){
            throw new Error("API failed: "+response.status);
        }
        dispatch(addMovieTrailer(trailer));
    }

        useEffect(()=>{
            getMoviesVideos();
        },[]);
  return (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}?si=IFNzCCA17UV-iYMe`}
         title="YouTube video player"
         allow="accelerometer; autoplay;
          clipboard-write; encrypted-media;
           gyroscope; picture-in-picture;
            web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            ></iframe>
    </div>
  )
}


export default VideoBackground;