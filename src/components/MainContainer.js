import React from 'react';
import ButtonBar from './ButtonBar';
import VideoContainer from './VideoContainer';
import Sidebar from "./Sidebar";
import BodyPage from './BodyPage';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const showMenu=useSelector((store)=>store.menu.isMenu);
  return (
  <div className='flex '>
    {(showMenu) && <Sidebar/>}
    <BodyPage/>
  </div> 
 )
}

export default MainContainer;