import React from 'react';
import VideoCard from './VideoCard';
import useVideoDetails from '../hooks/useVideoDetails';
import { useSelector } from 'react-redux';


const VideoContainer = () => {
    useVideoDetails();
    const videos=useSelector((store)=>store.youtube.videoData);
    const filteredData=useSelector((store)=>store.filter.filterData);
    const isFilter=useSelector((store)=>store.filter.showFilter);
      if(!videos) return 
   return (
    <div className='flex flex-wrap  justify-center '>
   {(isFilter)
   ?
   filteredData && filteredData.map((video)=><VideoCard key={video.id} info={video}/>)
   :
   videos.map((video)=><VideoCard key={video.id} info={video}/>)}
  </div>
   )
}

export default VideoContainer;