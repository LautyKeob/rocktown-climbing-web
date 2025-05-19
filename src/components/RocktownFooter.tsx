
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const RocktownFooter = () => {
  return (
    <footer className="bg-rocktown-purple text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">¡Síguenos!</h2>
            <div className="space-y-3 text-white/80">
              <p>Barrio de Prosperidad - Avenida de América - Madrid</p>
              <p>C/López de Hoyos 74 Local 3. Esquina con Calle Quintiliano</p>
              <p>Teléfono contacto (WhatsApp): +34 613 19 70 87</p>
            </div>
            
            <div className="flex mt-6 space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <nav className="flex flex-col md:items-end space-y-3">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#clases" className="hover:text-gray-300 transition-colors">Clases Escalada</a>
              <a href="#cumple" className="hover:text-gray-300 transition-colors">Cumple Peques</a>
              <a href="#horarios" className="hover:text-gray-300 transition-colors">Horarios y Precios</a>
              <a href="#normas" className="hover:text-gray-300 transition-colors">Condiciones y Normas</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/60">
          © 2021 BlockMania NineBPlus SLL
        </div>
      </div>
    </footer>
  );
};

export default RocktownFooter;
