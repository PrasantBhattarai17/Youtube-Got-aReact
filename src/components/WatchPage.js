import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { switchMenuOff } from '../Store/menuSlice';
import useLikedVideos from '../hooks/useLikedVideos';
import SuggestionCard from './SuggestionCard';
import Messages from './Messages';
import { addLiveMessages } from '../Store/messageSlice';

const WatchPage = () => {
const dispatch=useDispatch();
const [livegossip,setLiveGossip]=useState("");
useEffect(()=>{
    dispatch(switchMenuOff());
   },[]);
const [searchParams]=useSearchParams();
 useLikedVideos();
const videos=useSelector((store)=>store.youtube.mostLikedVideos);
if(!videos) return;

  return (
    <div className='flex flex-col' >
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
        <div className=' col-span-3 border-2 border-gray-200 shadow-xl mt-6 mr-2 max-h-[620px] overflow-y-scroll bg-slate-100 flex flex-col-reverse'>
          <div className='flex  m-2 p-1 gap-x-2 items-center  flex-col'>
           <Messages/>
          </div>
        </div>
        <div className='col-span-12 '>
          <form onSubmit={
            (e)=>{
              e.preventDefault();
              if(livegossip){
              dispatch(addLiveMessages({name:"Prasant"
                ,messages:livegossip}))
                setLiveGossip("");
              }
            }
          } className='flex justify-end mx-2 '>
            <input value={livegossip} onChange={(e)=>setLiveGossip(e.target.value)} className='border-2 py-2 rounded-lg  w-[20%]'></input>
            <button className='w-[4%] border-2 bg-slate-700 text-white rounded-lg'>send</button>
          </form>
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