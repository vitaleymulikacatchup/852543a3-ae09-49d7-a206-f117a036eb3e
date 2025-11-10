import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-google-light-gray border-t border-gray-200 py-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <span className="text-google-secondary text-sm">Sverige</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-google-secondary text-sm hover:underline">Annonsering</button>
          <button className="text-google-secondary text-sm hover:underline">Företagslösningar</button>
          <button className="text-google-secondary text-sm hover:underline">Så fungerar Sök</button>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-google-secondary text-sm">Koldioxidneutral sedan 2007</span>
          </div>
          <button className="text-google-secondary text-sm hover:underline">Integritet</button>
          <button className="text-google-secondary text-sm hover:underline">Villkor</button>
          <button className="text-google-secondary text-sm hover:underline">Inställningar</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;