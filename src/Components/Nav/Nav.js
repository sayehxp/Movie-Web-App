import {  useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import './Nav.css'
import image from './sayehmovie.png'
import { useContext } from "react";
import { langContext } from "../../Context/Context";


const Nav = () => {

const favorites = useSelector((state)=> state.favorites.favorites)
const isReload = useLocation().pathname == '/reload'

//===========================================================
const {lang , setLang} = useContext(langContext)
setLang('dnglish')
//===========================================================



return (
  
!isReload && <nav className='bg-dark p-1 pb-3 d-flex'>
<img src={image} width={'300px'}></img>

<div className='nav-btns d-flex justify-content-center align-items-end pb-3 '>


  

<Link to={'/'}>
{<button className="btn btn-primary">Home</button>}
</Link>


<Link to={'/favorites'}>
<button className='btn btn-danger'>
<span>Favorites</span>

<span className="text-light">
<i class="fa-regular fa-heart text-light mx-2"/>
{favorites.length}
</span>


</button> 
</Link>





<button className='btn btn-info ms-auto'>Login [ {lang} ]</button>
</div>
</nav>


  )
}

export default Nav