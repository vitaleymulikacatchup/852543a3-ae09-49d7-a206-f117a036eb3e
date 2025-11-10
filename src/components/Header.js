import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-6">
          <span className="text-google-secondary text-sm cursor-pointer hover:underline">Om</span>
          <span className="text-google-secondary text-sm cursor-pointer hover:underline">Store</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-google-secondary text-sm cursor-pointer hover:underline">Gmail</span>
          <span className="text-google-secondary text-sm cursor-pointer hover:underline">Bilder</span>
          <div className="w-6 h-6 grid grid-cols-3 gap-0.5 cursor-pointer">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-google-secondary rounded-sm"></div>
            ))}
          </div>
          <button className="google-button google-button-primary">
            Logga in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;