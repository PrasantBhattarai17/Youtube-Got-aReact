import React from 'react';
import ButtonBar from './ButtonBar';
import VideoContainer from './VideoContainer';

const BodyPage = () => {
  return (
    <div className='w-11/12' >
        <ButtonBar/>
        <div className='m-2 p-2 ml-4'>
        <VideoContainer/>
        </div>
    </div>
  )
}

export default BodyPage;