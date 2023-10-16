//____________MODERNMOVIECARD________________

import './ModernMovieCard.css'
import './SavedBtn.css'
import './DetialsBtn.css'
import React from 'react'

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from '../Store/Slices/favoriteSlice';

const ModernMovieCard = ({id , title , overview , backdrop_path , genre_ids }) => {
const movieGenres = {
28 : "Action",
12 : "Adventure",
16 : "Animation",
35 :"Comedy",
80:"Crime",
99:"Documentary",
18:"Drama",
10751:"Family",
14 : "Fantasy",
36 : "History",
27 : "Horror",
10402 : 'Music',
9648 : "Mystery",
10749 : "Romance",
878 : "Sci-Fi",
10770 : "TV Movie",
53 : "Thriller",
10752 : "War",
37 : "Western",
10759 : 'Action & Adventure',
10762 : "Kids",
10763 : "News",
10764 : "Reality",
10765 : "Sci-Fi & Fantasy",
10766 : "Soap",
10767 : "Talk",
10768 : "War & Politics"
};


const navigate = useNavigate();
const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites.favorites)
const handleVwDetails = (id) => navigate(`/details/${id}`)
const IsExist = (id) => favorites.find( FavMovie => FavMovie.id == id)
const handleAddFav = () => {

const movie =  {
id: id,
title: title,
backdrop_path: backdrop_path,
overview: overview
}

if(IsExist(movie.id)){
const newFav = favorites.filter(f => f.id != movie.id)
dispatch(changeFavorite(newFav))
}else{
dispatch(changeFavorite([...favorites, movie]))
}

}




return (


<div className="cardx m-3">

<div class="content">


<div class="back">
    
<div class="back-content d-flex justify-content-start">
<div className='moiveImage w-100 d-flex flex-column'
style={
    {
     backgroundImage : `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
    ,backgroundSize: 'cover'
    }
}>


<span className='text-light h1 text-center mt-auto mb-4'>{title}</span>

</div>



<span className='text-light h5 text-center'>


{
genre_ids.map((id,dx) => 
dx < 1 ?  movieGenres[id] + ' , ' :
dx < 2 ?  movieGenres[id] :
null)
}


<p className='relase pt-3'>Relase Date : 2010</p>
    

</span>
</div>



</div>


<div class="front">



<div class="front-content  position-relative">
<small class="badge">{title}</small>
<div className='moiveImage w-100 d-flex flex-column'
style={
    {
     backgroundImage : `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
    ,backgroundSize: 'cover',
    filter:'blur(5px) brightness(50%)',
    zIndex : '-1'
    }
    }
    
>




</div>

<p className='text-light position-absolute z-2 px-2 pt-5'>{overview}</p>
<div class="description">
<div class="title">
<p class="title"><strong>Spaguetti Bolognese</strong></p>

</div>

<p class="card-footer d-flex justify-content-between align-items-center">


<button className="bookmarkBtn " onClick={handleAddFav}>

  <span className={`IconContainer ${IsExist(id) ? 'expand' : ''}`}> 
    <svg viewBox="0 0 384 512" height="0.9em" className="icon "><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
    <span className={`${IsExist(id) ? 'text text-center' : 'd-none'} `} >{IsExist(id) ? 'saved' : ''}</span>
  </span>

{
  !IsExist(id) ?  <span className='text text-center'> save </span> : null
}
  


</button>






<button className='detail-btn' onClick={() => handleVwDetails(id)}> 
<i class="fa-solid fa-circle-info me-2"></i>
Details

</button>







</p>
</div>
</div>
</div>




</div>
</div>



)
}

export default ModernMovieCard