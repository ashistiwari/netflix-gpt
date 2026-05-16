import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    const {original_title,overView,id}=mainMovie;
    console.log(movies);
  return (
    <div>
    <VideoTitle title={original_title} overview={overView}/>   
    <VideoBackground movieId={id}/>
      
    </div>
  )
}

export default MainContainer