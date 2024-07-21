import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"filter",
    initialState:{
        filterData:[],
        showFilter:false,
    },
    reducers:{
    addFilterdata:(state,action)=>{
        state.filterData=action.payload;
    },
    showFilterData:(state)=>{
        state.showFilter=true;
    }
    }
})

export const{addFilterdata,showFilterData}=filterSlice.actions;
export default filterSlice.reducer;