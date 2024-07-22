import React, { useEffect, useState } from 'react';
import RandomNames from '../Helpers/useRandomNames';
import RandomMessages from '../Helpers/useRandomMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addLiveMessages } from '../Store/messageSlice';
const Messages = () => {
   const chat=useSelector((store=>store.message.liveChats))
 const dispatch =useDispatch();

    useEffect(()=>{

 const timer=setInterval(() => {
  
    
 dispatch(addLiveMessages(
   {
      name:RandomNames(),
      messages:RandomMessages(20)
   }
 ));

 },1500);


 return()=>{
    clearInterval(timer);
 }

    },[])

   
    return (
      <>
      {chat.map((onechat, index) => (
        <div key={index} className='flex gap-x-4 my-2 items-center  w-full'>
          <img
            alt='user-logo'
            className='h-6'
            src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
          />
          <span className='text-md font-semibold'>{onechat.name}</span>
          <span>{onechat.messages}</span>
        </div>
      ))}
    </>
    
  )
}

export default Messages;