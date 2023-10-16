import ModernMovieCard from '../../Components/ModernMovieCard/ModernMovieCard';
import { GETmovies } from "../../Components/Store/Slices/popularMoviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
//__________________________
const PopularMovies = () => {
const dispatch = useDispatch()


const popularMovies = (useSelector((state)=> state.popularMovies.popularMovies))


useEffect(()=> {
  dispatch(GETmovies()) 
}
,[])



return (



<div className='d-flex flex-wrap justify-content-center w-100 py-5  bg-dark'>   
{popularMovies && popularMovies.map((movie) => 
<ModernMovieCard 
key = {movie.id} 
id = {movie.id} 
title = {movie.title} 
overview = {movie.overview} 
backdrop_path = {movie.backdrop_path}
genre_ids = {movie.genre_ids}
/>

)}



</div>




)
}

export default PopularMovies