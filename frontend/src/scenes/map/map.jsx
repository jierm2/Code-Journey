import React, { useState } from 'react';
import './MapPage.css'; 
import { Link } from 'react-router-dom'; 
import AvatarBox from '../avatar/avatar.jsx';


const MapPage = () => {
  const lessons = [
    { id: 'chapter 0', top: '10%', left: '10%', path: '/hello-world',  tooltip: 'Chapter 1: Introduction' },
    { id: 'chapter 1', top: '20%', left: '30%', path: '/hello-world',  tooltip: 'Chapter 2: Introduction'},
    { id: 'chapter 2', top: '40%', left: '15%', path: '/hello-world',  tooltip: 'Chapter 3: Introduction' },
    { id: 'chapter 3', top: '49%', left: '37%', path: '/hello-world',  tooltip: 'Chapter 4: Introduction' },
    { id: 'chapter 4', top: '55%', left: '55%', path: '/hello-world',  tooltip: 'Chapter 5: Introduction' },
    { id: 'chapter 5', top: '70%', left: '37%', path: '/hello-world',  tooltip: 'Chapter 6: Introduction' },
    { id: 'chapter 6', top: '78%', left: '65%', path: '/hello-world',  tooltip: 'Chapter 7: Introduction' },
  ];

  return (
    <div className="map-container">
     
     <svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none">

        <line x1="15%" y1="15%" x2="35%" y2="25%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="15%" y1="15%" x2="20%" y2="45%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="20%" y1="45%" x2="42%" y2="54%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="35%" y1="25%" x2="42%" y2="54%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="42%" y1="54%" x2="60%" y2="60%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="42%" y1="54%" x2="42%" y2="75%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="60%" y1="60%" x2="70%" y2="83%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
        <line x1="42%" y1="75%" x2="70%" y2="83%" stroke="red" strokeDasharray="2" strokeWidth="0.5" />
     </svg>


      {lessons.map((lesson) => (
        <Link key={lesson.id} to={lesson.path} className="skull-node" style={{ top: lesson.top, left: lesson.left }}>
        <img src="skull.png" alt={lesson.id} />
        <div className="skull-tooltip">{lesson.tooltip}</div>
        </Link>
      ))}

    <h1 class="text-pirate text-black font-bold mb-8">
        
        <a>
            Start Your Journey Here
        </a>
        
        
    </h1>
    </div>
  );
};

export default MapPage;
