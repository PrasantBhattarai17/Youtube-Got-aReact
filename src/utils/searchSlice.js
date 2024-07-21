import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchData:null,
    },
    reducers:{
    addSuggestions:(state,action)=>{
        state=Object.assign(state,action.payload);
    },
    }
})

export const{addSuggestions}=searchSlice.actions;
export default searchSlice.reducer;