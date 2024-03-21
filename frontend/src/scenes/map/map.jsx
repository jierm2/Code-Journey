import React from 'react';
import './MapPage.css'; 

const MapPage = () => {
  const lessons = [
    { id: 'chapter0', top: '10%', left: '10%' },
    { id: 'chapter1', top: '20%', left: '30%' },
    { id: 'chapter2', top: '40%', left: '15%' },
    { id: 'chapter3', top: '49%', left: '37%' },
    { id: 'chapter4', top: '55%', left: '55%' },
    { id: 'chapter5', top: '70%', left: '37%' },
    { id: 'chapter6', top: '78%', left: '65%' },
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
        <img
          key={lesson.id}
          src="skull.png" 
          alt={lesson.id}
          className="skull-node"
          style={{ top: lesson.top, left: lesson.left }}
        />
      ))}
    </div>
  );
};

export default MapPage;
