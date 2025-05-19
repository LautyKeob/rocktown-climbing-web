
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section min-h-[80vh] flex items-center justify-center text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">RockTown Climbing</h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          Descubre la emoción de la escalada en pleno centro de Madrid 🧗‍♂️
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Ofrecemos las mejores clases de escalada, adaptadas a todas las edades y niveles,
          desde principiantes hasta expertos. ¿Quieres probar? ¡Te invitamos a tu 
          <span className="font-bold"> primera clase gratis</span>!
        </p>
        
        <div className="mt-10">
          <button className="bg-rocktown-purple hover:bg-opacity-80 text-white text-xl font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105">
            Contáctanos
          </button>
          <p className="mt-4 text-white/80">
            y empieza a escalar con nosotros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
