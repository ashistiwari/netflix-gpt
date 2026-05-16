import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    const upcomingMovies=useSelector((store)=>store.movies?.upcomingMovies);
    const popularMovies=useSelector((store)=>store.movies?.popularMovies);
    console.log("Moviessss", movies);
  return (
    movies &&(
    <div className='bg-black'>
        <div className="-mt-12 pl-12 relative z-20">       
        <MovieList title="Vishu Patwa Playlist" movies={upcomingMovies}/>
        <MovieList title="Popular Movies" movies={popularMovies}/>
        <MovieList title="Top Rated Movies" movies={movies}/>
        <MovieList title="Upcoming Movies" movies={upcomingMovies}/>
        <MovieList title="Horror Movies" movies={movies}/>
        <MovieList title="Korean Movies" movies={movies}/>
        <MovieList title="Hindi Movies" movies={movies}/>
        <MovieList title="English Movies" movies={movies}/>
        </div>
   
    </div>)
  )
}

export default SecondaryContainer