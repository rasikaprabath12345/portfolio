import React from 'react';

const DefaultAvatar = ({ name = "RP", size = "full" }) => {
  return (
    <div className={`${size === 'full' ? 'w-full h-full' : 'w-16 h-16'} rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center shadow-lg`}>
      <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold select-none">
        {name}
      </span>
    </div>
  );
};

export default DefaultAvatar;