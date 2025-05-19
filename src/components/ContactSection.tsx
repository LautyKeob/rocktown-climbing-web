
import React from 'react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-rocktown-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-rocktown-dark-gray">Contact Us</h2>
        <p className="text-lg mb-6 text-rocktown-medium-gray">
          Puedes contactarnos aquí:
        </p>
        <div className="space-y-2 mb-8">
          <p className="text-rocktown-medium-gray">
            <span className="font-semibold">Correo:</span> rocktown@rocktownclimb.com
          </p>
          <p className="text-rocktown-medium-gray">
            <span className="font-semibold">Teléfono (WhatsApp):</span> +34 613 19 70 87
          </p>
        </div>
        <Button className="bg-rocktown-purple hover:bg-rocktown-purple-light text-white text-xl font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 h-auto">
          CONTACTAR
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
