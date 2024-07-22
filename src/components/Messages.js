import React, { useEffect, useState } from 'react';
import RandomNames from '../Helpers/useRandomNames';
import RandomMessages from '../Helpers/useRandomMessages';
import { useDispatch } from 'react-redux';
import { addLiveMessages } from '../Store/messageSlice';
const Messages = () => {
 const dispatch =useDispatch();

    useEffect(()=>{

 const timer=setInterval(() => {
  
    
 dispatch(addLiveMessages(
    
 ));

 },2000);


 return()=>{
    clearInterval(timer);
 }

    },[])

   
  return (
    <div className='flex  m-2 p-1 gap-x-2 items-center flex-reverse'>
    <img alt='user-logo'className='h-6' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'/>
    <span className='text-md font-semibold'>{name}</span>
    <span>{messages}</span>
    </div>
  )
}

export default Messages;