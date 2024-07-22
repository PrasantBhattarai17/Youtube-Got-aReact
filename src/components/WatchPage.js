import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { switchMenuOff } from '../utils/menuSlice';
import useLikedVideos from '../hooks/useLikedVideos';
import SuggestionCard from './SuggestionCard';
import Messages from './Messages';

const WatchPage = () => {
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(switchMenuOff());
   },[]);
const [searchParams]=useSearchParams();
 useLikedVideos();
const videos=useSelector((store)=>store.youtube.mostLikedVideos);
if(!videos) return;

  return (
    <div className='flex flex-col ' >
      <div className='grid grid-cols-12'> 
        <div className='col-span-9'>
        <iframe className='ml-12 my-6  shadow rounded' width="1080"
         height="600"
         src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"} 
         title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='col-span-3 border-2 border-gray-200 shadow-xl mt-6 mr-2 bg-slate-100'>
          <span className=' mt-2 ml-4'>Live Chat</span>
          <Messages/>
        </div>
        </div>

        <div className='grid grid-cols-12 my-4'>
        <div className='col-span-9'>
        </div>
        <div className='col-span-3'>
            {videos.map((video)=>< SuggestionCard key={video.id} info={video} />)}
        </div>
        </div>
    </div>
  )
}

export default WatchPage;