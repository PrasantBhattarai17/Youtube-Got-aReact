import { createSlice } from "@reduxjs/toolkit";


const menuSlice=createSlice({
    name:"menu",
    initialState:{
        isMenu:true,
    },
    reducers:{
     toggleMenu:(state)=>{
        state.isMenu=!state.isMenu;
     }
    }
})

export const {toggleMenu}=menuSlice.actions;
export default menuSlice.reducer;