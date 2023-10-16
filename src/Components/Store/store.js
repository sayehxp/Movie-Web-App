import { configureStore } from "@reduxjs/toolkit";
import  langReducer  from "./Slices/langueases";
import favoritesReducer from "./Slices/favoriteSlice";
//[1]
import popularMoviesReducer from './Slices/popularMoviesSlice'
const store = configureStore(
    {
        reducer:{
            lang: langReducer,
            favorites: favoritesReducer, 
            popularMovies : popularMoviesReducer
        }
    }
)


export default store