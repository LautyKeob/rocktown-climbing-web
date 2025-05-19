
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16 bg-rocktown-medium-gray text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-400 h-96 w-full rounded-lg flex items-center justify-center">
              <MapPin size={48} className="text-rocktown-purple" />
              <span className="ml-2 text-rocktown-purple font-semibold">Mapa ubicación</span>
            </div>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">
              Estamos en el corazón de Madrid 🗺️
            </h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={20} />
                <span>Calle López de Hoyos, 74, Local 3 Posterior</span>
              </p>
              <p>28002 - Madrid</p>
              <p>(Esquina con Calle Quintiliano)</p>
              <p className="mt-6">
                Nos encontrarás en el barrio de Prosperidad, cerca de Avenida de América.
              </p>
              <p className="font-bold mt-4">
                ¡Ven a visitarnos y descubre nuestro rocódromo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
