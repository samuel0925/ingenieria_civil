import React from 'react';

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Construyendo el Futuro
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Soluciones innovadoras en ingeniería civil para proyectos que transforman ciudades
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary-hover"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}