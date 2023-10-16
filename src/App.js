import Nav from './Components/Nav/Nav';

import Pagination from './Components/Pagination/Pagination';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import FavoriteMovies from './Pages/FavMovies/FavMovies';
import PopularMovies  from './Pages/PopularMovies/PopularMovies';
import Reload from './Components/Reload/Reload';
import store from './Components/Store/store'
import Instance from './Axios/Instance';
import { useState } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { LangProvider } from './Context/Context';





function App() {


const [popularMovies , setPopularMovies] = useState([])
const [lang ,  setLang] = useState('')




return (


<LangProvider value={{lang,setLang}}>
<Provider store={store}>
<BrowserRouter>

<Nav/>
<Routes> 
<Route index element={<PopularMovies/>}/>
<Route path='/favorites'  element={<FavoriteMovies/>}/>
<Route path='/details/:id'  element={<MovieDetails/>}/>
<Route path='/reload'  element={<Reload/>}/> 
</Routes>
<Pagination setPopularMovies = {setPopularMovies}/>

</BrowserRouter>
</Provider>
</LangProvider>


);}

export default App;
