import {  createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice(
{
name:'langauge',
initialState:{lang : 'en'},
reducers :{
changeLang : function(state,action){state.lang = action.payload}

}
}
)



export const {changeLang} = langSlice.actions;
export default langSlice.reducer;
