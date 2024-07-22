import React, { useEffect, useState } from 'react';
import useRandomNames from '../hooks/useRandomNames';
import useRandomMessages from '../hooks/useRandomMessages';
import RandomNames from '../hooks/useRandomNames';
import RandomMessages from '../hooks/useRandomMessages';
const Messages = () => {

 const [name,setName]=useState("");
 const [messages,setMessages]=useState("");

    useEffect(()=>{

 const timer=setInterval(() => {
    const Name=RandomNames();
    setName(Name)
    const Messages=RandomMessages(15);
    setMessages(Messages);
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