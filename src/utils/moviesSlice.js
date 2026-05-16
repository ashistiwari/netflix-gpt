import { createSlice } from "@reduxjs/toolkit";
const moviesSLice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
        upcomingMovies:null,
        addPopularMovies:null,
},
    reducers: {
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
    },
});

export const {addNowPlayingMovies,addMovieTrailer,addUpcomingMovies,addPopularMovies}=moviesSLice.actions;
export default moviesSLice.reducer;