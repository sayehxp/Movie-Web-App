import {  createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice(
{
name:'favorites',
initialState:{favorites : []},
reducers :{changeFavorite : function(state,action){state.favorites = action.payload}}
}
)

export const {changeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
