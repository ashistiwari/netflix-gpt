import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    const hasMovies = Array.isArray(movies) && movies.length > 0;

    return (
        <div className='px-6 bg-black'>
            <h1 className='text-3xl py-6 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {hasMovies ? (
                        movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    ) : (
                        <p className='text-white/70 px-4'>No movies available yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList