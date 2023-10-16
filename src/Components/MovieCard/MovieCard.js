
import './MovieCard.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from '../Store/Slices/favoriteSlice';

const MovieCard = ({ title , overview , backdrop_path , id }) => {

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

<Card className='m-3 MovieCard bg-dark text-light p-0 border border-light-subtle'>
<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>

<Card.Body className='MovieBody'>

<Card.Title>{title}</Card.Title>
<Card.Text className='overview'><p>{overview}</p></Card.Text>


<div className='d-flex container-btns mt-auto justify-content-around'>
    
<Button variant="primary" onClick={() => handleVwDetails(id)}>More Details</Button>
<Button variant='secondary'onClick={handleAddFav}>
{!IsExist(id) ? 'Add To Fav' : <> Favorited <i className='fa-solid fa-heart ms-2'/> </>}
</Button>



</div>

</Card.Body>
</Card>



)}

export default MovieCard