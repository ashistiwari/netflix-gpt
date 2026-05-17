import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from "./gptSearchSlice";

const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies: moviesReducer,
        gptSearch:gptSearchReducer,
    },
})

export default appstore;