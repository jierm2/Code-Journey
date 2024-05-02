import React, { useState } from 'react'
import AvatarBox from '../avatar/avatar'
import defaultAvatar from '../avatar/pngs/defaultGirl2.png';
import hat1 from '../avatar/pngs/hat1.png'
import hat2 from '../avatar/pngs/hat2.png'
import hat3 from '../avatar/pngs/hat3.png'
import hat4 from '../avatar/pngs/hat4.png'
import dhat1 from '../avatar/pngs/dhat1.png'
import dhat2 from '../avatar/pngs/dhat2.png'
import dhat3 from '../avatar/pngs/dhat3.png'
import dhat4 from '../avatar/pngs/dhat4.png'



const Personal = () => {
  const [currentSrc, setCurrentSrc] = useState(defaultAvatar);

   
  const handleImageChange = (newSrc) => {
   
    setCurrentSrc(newSrc);
  };
  return (
    
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AvatarBox size="700" src = {currentSrc} alt = "Avatar"></AvatarBox>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center' }}>
          <div style={{ marginRight: '10px', cursor: 'pointer' }}onClick={() => handleImageChange(dhat1)}><AvatarBox size="200" src = {hat1} ></AvatarBox></div>
          <div style={{ marginRight: '10px', cursor: 'pointer' }}onClick={() => handleImageChange(dhat2)}><AvatarBox size="200"src = {hat2} ></AvatarBox></div>
          <div style={{ marginRight: '10px', cursor: 'pointer' }}onClick={() => handleImageChange(dhat3)}><AvatarBox size="200" src = {hat3}></AvatarBox></div>
          <div style={{ marginRight: '10px', cursor: 'pointer' }}onClick={() => handleImageChange(dhat4)}><AvatarBox size="200" src = {hat4}></AvatarBox></div>
        </div>

      </div>

  );
};

export default Personal;