import './Pagination.css'
import React from 'react'
import { useState } from 'react';
import Instance from '../../Axios/Instance';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GETmovies } from '../Store/Slices/popularMoviesSlice';
//
const Pagination = ({ setPopularMovies}) => {
const location = useLocation()
const [currentPage ,  setCurrentPage] = useState(1)
const dispatch = useDispatch();
//___________________________________________________________
const NavigateGo = async (direction , current = currentPage)=> {



switch(direction){
case 'forward':
setCurrentPage(currentPage+1)
current +=1;
break;

case  'back' :
if(currentPage - 1 <= 0) return;
setCurrentPage(currentPage-1)
current -= 1;
break;

case 'go':
setCurrentPage(current)
break;
}

// const res = await Instance.get(`/movie/popular?language=en-US&page=${current}`)
// setPopularMovies(res.data.results)

dispatch(GETmovies(current)) 

if(endPagination - current < 1){
setStartPagination(startPagination + 2 )
setEndPagination(endPagination + 2)
}else if(current - startPagination < 1 && startPagination > 1){
setEndPagination(endPagination-1)
setStartPagination(startPagination-1)
}




}

const handleNext = async () => await  NavigateGo('forward')
const handleBack = async () => await NavigateGo('back')
const handleGo = async (pageNo) => await NavigateGo('go',pageNo)
const [endPagination ,  setEndPagination] = useState(5)
const [startPagination ,  setStartPagination] = useState(1)



return (
<div className={`${ location.pathname == '/' ? 'd-flex justify-content-center align-items-center Pagination bg-dark' : 'd-none'}`}>

<button className='btn border border-dark-subtle' onClick={()=> handleBack()}> &lt; Back </button>

<ul className='bar d-flex'>{


[...new Array(5)].map((_,index) => 

<li 
className = {`border border-2 p-2 px-3 me-2 list-group-item opacity-75 ${currentPage == index+startPagination ? 'bg-secondary' : ''}`}
onClick={()=> handleGo(index + startPagination)}>{index+startPagination}</li>

)
}

</ul>

<button className='btn border border-dark-subtle' onClick={()=> handleNext()}>Next &gt; </button>



</div>
)
}

export default Pagination