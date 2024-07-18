import React from 'react';

const Buttons = ({name}) => {
  return (
    <div className='flex m-1 p-1'>
        <button className='text-black bg-gray-200 h-8 mx-1 w-18 px-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Buttons;