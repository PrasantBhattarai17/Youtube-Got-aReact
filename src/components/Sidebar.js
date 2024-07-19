import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[12%] text-center'>
      <div className='w-full shadow-lg h-24'>
      <h1></h1>
      <ul className=''>
      <Link  to="/"> <li className='font-bold cursor-pointer'>Home</li></Link>
        <li className='font-bold cursor-pointer'>Shorts</li>
        <li className='font-bold cursor-pointer'>Subscriptions</li>
      </ul>
      </div >
      <div className='w-full shadow-lg h-56 mt-3'>
      <h1 className='font-bold text-lg'>You</h1>
      <ul>
        <li className='font-bold text-sm my-2'>Your Channel</li>
        <li className='font-bold text-sm my-2'>History</li>
        <li className='font-bold text-sm my-2'>Playlists</li>
        <li className='font-bold text-sm my-2'>Your Videos</li>
        <li className='font-bold text-sm my-2'>Watch Later</li>
        <li className='font-bold text-sm my-2'>Liked Videos</li>
      </ul>
      </div>
      <div className='w-full shadow-lg h-40 mt-3'>
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li  className='font-bold text-sm my-2'>Trending</li>
        <li  className='font-bold text-sm my-2'>Music</li>
        <li  className='font-bold text-sm my-2'>Gaming</li>
        <li  className='font-bold text-sm my-2'>Sports</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar;