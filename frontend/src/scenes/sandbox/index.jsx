import React from 'react';

const Sandbox = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <iframe 
        src="https://trinket.io/embed/python/d6665f17fa"
        title="Sandbox"
        className="w-full h-full" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Sandbox;
