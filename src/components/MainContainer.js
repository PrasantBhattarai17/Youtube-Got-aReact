import React from 'react';
import Sidebar from "./Sidebar";
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  const showMenu=useSelector((store)=>store.menu.isMenu);
  return (
  <div className='flex '>
    {(showMenu) && <Sidebar/>}
    <Outlet/>
  </div> 
 )
}

export default MainContainer;