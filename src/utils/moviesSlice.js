import { createSlice } from "@reduxjs/toolkit";
const moviesSLice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
},
    reducers: {
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addMovieTrailer}=moviesSLice.actions;
export default moviesSLice.reducer;