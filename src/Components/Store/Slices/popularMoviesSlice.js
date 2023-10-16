import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from '../../../Axios/Instance';

export const GETmovies = createAsyncThunk('getMovies',async(current = 1)=> {
    const res = await Instance.get(`/movie/popular?language=en-US&page=${current}`)
    return res.data.results    
})

const popularMoviesSlice = createSlice({
    name : 'gemovies',
    initialState : {popularMovies: []},
    extraReducers : (builder) => {
        builder.addCase(GETmovies.fulfilled , (state,action) => {
            state.popularMovies = action.payload
        })
    } 


})



export default popularMoviesSlice.reducer
