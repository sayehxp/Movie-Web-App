//____________FavMovies________________
import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from '../../Components/Store/Slices/favoriteSlice';
import MovieCard from '../../Components/MovieCard/MovieCard';
import './FavMovies.css'




const FavMovies = () => {
const favorites = useSelector((state)=> state.favorites.favorites)
    // const dispatch = useDispatch();



    // const handleRemoveFav = (id) => {
    // const newArr = favorites.filter((f)=> f.id!= id)
    // dispatch(changeFavorite(newArr))

    // }





    
   

return (
<>
<p className='bg-dark h3 m-0 p-2 ' style={{color:'grey'}}>Favorite Movies : </p>
<div className='d-flex flex-wrap FavMovies justify-content-center bg-dark'>


{
favorites.map((movie) =>  


<MovieCard 
key = {movie.id} 
id = {movie.id} 
title = {movie.title} 
overview = {movie.overview}  
backdrop_path = {movie.backdrop_path}/>



)
}

</div>

</>

);
   
    

}

export default FavMovies