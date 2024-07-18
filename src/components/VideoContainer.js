import React from 'react';
import VideoCard from './VideoCard';
import useVideoDetails from '../hooks/useVideoDetails';
import { useSelector } from 'react-redux';


const VideoContainer = () => {
    useVideoDetails();
    const videos=useSelector((store)=>store.youtube.videoData);
      if(!videos) return 
   return (
    <div className='flex flex-wrap  justify-center '>
  {videos.map((video)=><VideoCard key={video.snippet.channelId} info={video}/>)}
  </div>
   )
}

export default VideoContainer;