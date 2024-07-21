import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"filter",
    initialState:{
        filterData:null,
    },
    reducers:{
    addFilterdata:(state,action)=>{
        state.filterData=action.payload;
    }
    }
})

export const{addFilterdata}=filterSlice.actions;
export default filterSlice.reducer;