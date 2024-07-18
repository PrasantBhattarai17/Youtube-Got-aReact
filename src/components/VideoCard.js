import React from 'react';

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const{title,channelTitle}=snippet;
    const {viewCount}=statistics;
    const img_url=snippet?.thumbnails?.standard?.url;
  return (
    <>
      <div className='p-4 m-2 shadow-xl w-[30%] h-72 rounded bg-white text-black flex flex-col justify-center overflow-hidden '>
        <img className='w-full rounded h-[70%] shadow-xl '  alt='Youtube-Thumbnail' src={img_url}/>
        <h1 className='font-bold text-md font-sans'>{title}</h1>
        <h3 className='font-bold text-gray-600 text-sm'>{channelTitle}</h3>
        <span>{viewCount} views</span>
    </div>
    
    </>
  )
}

export default VideoCard;