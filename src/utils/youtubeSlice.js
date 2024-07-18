import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice=createSlice({
    name:"youtube",
    initialState:{
        videoData:null,
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videoData=action.payload;
        },
    }
});


export const {addVideos}=youtubeSlice.actions;
export default youtubeSlice.reducer;