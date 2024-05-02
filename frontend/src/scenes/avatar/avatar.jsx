import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './avatar.css';
import defaultAvatar from '../avatar/pngs/defaultGirl2.png';
import hat1 from '../avatar/pngs/hat1.png'
import hat2 from '../avatar/pngs/hat2.png'
import hat3 from '../avatar/pngs/hat3.png'
import hat4 from '../avatar/pngs/hat4.png'


const AvatarBox = ({size, className, src, alt}) => {
  return (
    <div>
      {src ? (
        <img 
          className={`defaultClass ${className}`} 
          src={src} 
          alt={alt} 
          style={{ height: `${size}px`, width: `${size}px` }} // Inline styles for dynamic size
        />
      ) : (
        <img 
          className={`defaultClass ${className}`} 
          src={defaultAvatar} 
          alt={alt} 
          style={{ height: `${size}px`, width: `${size}px` }} // Inline styles for dynamic size
        />
      )}
    </div>
  )
}
export default AvatarBox;