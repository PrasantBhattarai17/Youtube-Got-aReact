import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-1/12 text-center'>
      <div className='w-full shadow-lg h-22'>
      <h1></h1>
      <ul className=''>
        <li className='font-bold'>Home</li>
        <li className='font-bold'>Shorts</li>
        <li className='font-bold'>Videos</li>
      </ul>
      </div >
      <div className='w-full shadow-lg h-40 mt-3'>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      </div>
      <div className='w-full shadow-lg h-40 mt-3'>
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar;