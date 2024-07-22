import { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../Store/youtubeSlice";

const useVideoDetails=()=>{
 const videoData=useSelector((store)=>store.youtube.videoData);
  const dispatch=useDispatch();
    const getVideoDetail= async()=>{
     const response=await fetch(YOUTUBE_API_KEY);
     const data=await response.json();
     dispatch(addVideos(data?.items));
    };

    useEffect(()=>{
        if(videoData) return;
        getVideoDetail()
    },[]);


};


export default useVideoDetails;