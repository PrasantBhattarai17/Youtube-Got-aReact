import React from 'react';
import ButtonBar from './ButtonBar';
import VideoContainer from './VideoContainer';

const BodyPage = () => {
  return (
    <div >
        <ButtonBar/>
        <div className='m-2 p-2 ml-4'>
        <VideoContainer/>
        </div>
    </div>
  )
}

export default BodyPage;