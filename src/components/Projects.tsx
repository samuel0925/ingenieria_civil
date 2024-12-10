import React from 'react';

const projects = [
  {
    title: 'Torre Residencial Marina',
    description: 'Edificio de 30 pisos con vista al mar',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
  },
  {
    title: 'Puente Metropolitano',
    description: 'Infraestructura vial de 2km de longitud',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
  },
  {
    title: 'Centro Comercial Plaza',
    description: 'Complejo comercial de 50,000 m²',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
  },
];

export function Projects() {
  return (
    <div id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Conoce nuestras obras más emblemáticas
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}