import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { toggleMenu } from '../utils/menuSlice';
import {YOUTUBE_SUGGESTION_API} from "../utils/constants"
import { addSuggestions } from '../utils/searchSlice';

const Header = () => {
    const searchCache=useSelector((store)=>store.search);
  const [suggestions,setSuggestions]=useState([]);
    const [searchText,setSearchText]=useState("");
    const dispatch=useDispatch();

        const getSuggestions= async()=>{
         const response=await fetch(YOUTUBE_SUGGESTION_API+searchText);
         const json=await response.json();
         setSuggestions(json[1]);

         dispatch(
            (addSuggestions({ [searchText]:json[1]}))
         )
        };
        
        
        useEffect(()=>{
           const timer= setTimeout(()=>{
            if(searchCache[searchText])
                setSuggestions(searchCache[searchText]);
            else
             getSuggestions();

             },200);

            return()=>{
                clearTimeout(timer);
            }
        },[searchText])


    const handleToggleMenu=()=>{
     dispatch(toggleMenu());
    };
  return (
    <div className='shadow grid grid-flow-col '>
    <div className='m-2 mx-4 p-2 col-span-1 flex justify-start items-center'>
   <img onClick={handleToggleMenu} className=' pr-10 h-6 cursor-pointer'alt='menu' src='https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png'/>
 <a href='/'><img className='h-6 cursor-pointer' alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'/></a>
</div>  
    <div className='col-span-9  ml-28  p-1 m-1 '>
        <div  
    className='flex items-center'>
        <input  value={searchText} onChange={(e)=>setSearchText(e.target.value)}
        className='border-gray-600 border-2  py-2 w-[65%] rounded-l-full text-center' placeholder='Search'/>
        <button className='border-2 border-l-0 border-gray-800 rounded-r-full py-2 w-12 bg-gray-200 hover:bg-gray-300'>🔍</button>
        </div>
        {(searchText)&&<div className='mx-2 absolute bg-white shadow border border-gray-200 w-[40%] rounded-xl'>
           <ul className='mx-4 text-md font-sans'>
          {suggestions.map((query,index)=><li className='my-2 p-1 hover:bg-gray-200 hover:rounded' key={index} >🔍 {query}</li>)}
           </ul>
        </div>}
    </div>
    <div className='col-span-1'>

    </div>
   
    <div className='col-span-1 flex items-center justify-center'>
        <img alt='user-logo'className='h-8' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'/>
    </div>
    </div>
    )
}


export default Header;