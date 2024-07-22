import { createSlice } from "@reduxjs/toolkit";

const messageSlice=createSlice({
 
    name:"liveMessage",
    initialState:{
        liveChats:[],
    },
    reducers:{
    addLiveMessages:(state,action)=>{
        state.liveChats.push(action.payload);
    }
    }

});

export const {addLiveMessages}=messageSlice.actions;
export default messageSlice.reducer;