import React from 'react';
import Buttons from './Buttons';

const ButtonBar = () => {
  const titleList=["All","Trending","Indian","funny","Sports","Cricket","Football","movies","News","action","entertainment","Nepali","Politics","Adventure","music"];
  return (
    <div className='flex m-1 p-1  '>
   { titleList.map((title)=>
      <Buttons name={title}/>)}
    </div>
  )
}

export default ButtonBar;