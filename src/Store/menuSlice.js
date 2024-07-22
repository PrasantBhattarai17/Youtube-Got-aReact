import { createSlice } from "@reduxjs/toolkit";


const menuSlice=createSlice({
    name:"menu",
    initialState:{
        isMenu:true,
    },
    reducers:{
     toggleMenu:(state)=>{
        state.isMenu=!state.isMenu;
     },
     switchMenuOff:(state,action)=>{
        state.isMenu=false;
    }
    }
})

export const {toggleMenu,switchMenuOff}=menuSlice.actions;
export default menuSlice.reducer;