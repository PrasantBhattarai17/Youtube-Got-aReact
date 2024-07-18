import React from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const views=[1,2,3,4,5,6,7,8,9,10,11];

  return (
    <div className='flex flex-wrap  justify-center '>
   {views.map((view)=><VideoCard view={view}/>)}
  </div>
   )
}

export default VideoContainer;