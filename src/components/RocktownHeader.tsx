
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const RocktownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-rocktown-purple text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold">RT</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#clases" className="hover:text-gray-300 transition-colors">Clases Escalada</a>
          <a href="#cumple" className="hover:text-gray-300 transition-colors">Cumple Peques</a>
          <a href="#horarios" className="hover:text-gray-300 transition-colors">Horarios y Precios</a>
          <a href="#normas" className="hover:text-gray-300 transition-colors">Condiciones y Normas</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mt-4 px-6">
          <a href="#home" className="hover:text-gray-300 transition-colors py-2">Home</a>
          <a href="#clases" className="hover:text-gray-300 transition-colors py-2">Clases Escalada</a>
          <a href="#cumple" className="hover:text-gray-300 transition-colors py-2">Cumple Peques</a>
          <a href="#horarios" className="hover:text-gray-300 transition-colors py-2">Horarios y Precios</a>
          <a href="#normas" className="hover:text-gray-300 transition-colors py-2">Condiciones y Normas</a>
        </nav>
      )}
    </header>
  );
};

export default RocktownHeader;
