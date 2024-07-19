import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { switchMenuOff } from '../utils/menuSlice';

const WatchPage = () => {
const dispatch=useDispatch();
const [searchParams]=useSearchParams();
useEffect(()=>{
 dispatch(switchMenuOff());
},[]);
  return (
    <div >
        <iframe className='mx-12 my-6  shadow rounded' width="1080"
         height="600"
         src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"} 
         title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;