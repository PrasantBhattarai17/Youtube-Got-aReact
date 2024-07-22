import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_KEY } from "../utils/constants";

const messageSlice=createSlice({
 
    name:"liveMessage",
    initialState:{
        liveChats:[],
    },
    reducers:{
    addLiveMessages:(state,action)=>{
        state.liveChats.splice(OFFSET_LIVE_KEY,1);
        state.liveChats.push(action.payload);
    }
    }

});

export const {addLiveMessages}=messageSlice.actions;
export default messageSlice.reducer;