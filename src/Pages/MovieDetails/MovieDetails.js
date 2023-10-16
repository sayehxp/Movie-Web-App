//____________MOVIEDETAILS________________
import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Instance from '../../Axios/Instance';

//__________________________
const MovieDetails = () => {
let { id } = useParams();
const [movieDetails ,  setMovieDetails] = useState([])

useEffect(()=>{
  
    Instance.get(`/movie/${id}`)
    .then(res => {

      setMovieDetails(res.data)
      console.log(res.data) 
    })
    .catch( err => console.log("err",err))
},[])




return (
        
   
    <div className='movie-details bg-body row d-flex justify-content-start ' 
    style={
      {
        height: '100vh',
        backgroundImage : `url( https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
        ,
        backgroundSize: 'cover'
    }
      }>

<div className='col-6 border border-2 border-dark-subtle bg-black opacity-75 text-light pt-4'>


<div className='opacity-100 ps-3'>


<span className='h4'>Moive Name : </span>
<span className='h4 ms-1'>{movieDetails && movieDetails.title}</span>
<hr/>


<span className='h4'>Release Date: </span>
<span className='h4 ms-1'>{movieDetails && movieDetails.release_date}</span>
<hr/>


<p className='h3'>overview: </p>
<p className='h5 ms-3'>{movieDetails && movieDetails.overview}</p>
<hr/>



<span className='h4'>Runtime: </span>
<span className='h4 ms-2'>{movieDetails && movieDetails.runtime}</span>
<hr/>

<span className='h4'>Genres: </span>
<span className='h4 ms-2'>{movieDetails &&  movieDetails.genres 
&&  movieDetails.genres.map(e => e.name + ',')
}</span>
<hr/>

<span className='h4'>Adult: </span>
<span className='h4 ms-2'>{movieDetails &&  movieDetails.adult ? 'Yes' : 'No'}</span>
<hr/>

</div>


</div>






</div>







  )
}

export default MovieDetails