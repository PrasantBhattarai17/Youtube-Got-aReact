import React from 'react';
import { useDispatch} from 'react-redux';
import { toggleMenu } from '../utils/menuSlice';

const Header = () => {
    const dispatch=useDispatch();
    const handleToggleMenu=()=>{
     dispatch(toggleMenu());
    };
  return (
    <div className='shadow grid grid-flow-col '>
    <div className='m-2 mx-4 p-2 col-span-1 flex justify-start items-center'>
   <img onClick={handleToggleMenu} className=' pr-10 h-6 cursor-pointer'alt='menu' src='https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png'/>
  <img className='h-6' alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'/>
    </div>  
    <div className='col-span-9 flex items-center ml-28  p-1 m-1 '>
        <input className='border-gray-600 border-2  py-2 w-[65%] rounded-l-full text-center' placeholder='Search'/>
        <button className='border-2 border-l-0 border-gray-800 rounded-r-full py-2 w-12 bg-gray-200 hover:bg-gray-300'>🔍</button>
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