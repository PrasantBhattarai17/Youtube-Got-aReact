import { useEffect } from "react";
import {  YOUTUBE_LIKED_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLikedVideos } from "../utils/youtubeSlice";

const useLikedVideos=()=>{
 const videoData=useSelector((store)=>store.youtube.mostLikedVideos);
  const dispatch=useDispatch();
    const getLikedVideos= async()=>{
     const response=await fetch(YOUTUBE_LIKED_KEY);
     const data=await response.json();
     console.log(data)
     dispatch(addLikedVideos(data?.items));
    };

    useEffect(()=>{
        if(videoData) return;
        getLikedVideos()
    },[]);


};


export default useLikedVideos;