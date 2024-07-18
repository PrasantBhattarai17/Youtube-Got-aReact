import React from 'react';

const VideoCard = ({view}) => {
  return (
    <>
   
      <div className='p-4 m-2 shadow-xl w-[32%] h-56 rounded bg-white text-black'>
        <img alt='Youtube-Thumbnail'/>
        <h1>Title</h1>
        <span>{view}</span>
    </div>
    
    </>
  )
}

export default VideoCard;