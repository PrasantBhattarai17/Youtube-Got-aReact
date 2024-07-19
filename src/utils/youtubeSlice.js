import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice=createSlice({
    name:"youtube",
    initialState:{
        videoData:null,
        mostLikedVideos:null
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videoData=action.payload;
        },
        addLikedVideos:(state,action)=>{
            state.mostLikedVideos=action.payload;
        },
    }
});


export const {addVideos,addLikedVideos}=youtubeSlice.actions;
export default youtubeSlice.reducer;