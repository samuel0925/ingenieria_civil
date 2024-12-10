import React from 'react';
import { 
  Building2, 
  Construction, 
  Factory, 
  Mountain, 
  Ruler, 
  Hammer, 
  Warehouse, 
  Wrench, 
  HardHat,
  Compass
} from 'lucide-react';

const services = [
  {
    title: 'Construcción Residencial',
    description: 'Diseño y construcción de edificios residenciales con los más altos estándares de calidad y confort.',
    icon: Building2,
  },
  {
    title: 'Infraestructura Vial',
    description: 'Desarrollo de puentes, carreteras y obras públicas de gran envergadura para conectar comunidades.',
    icon: Construction,
  },
  {
    title: 'Proyectos Industriales',
    description: 'Construcción de plantas industriales y estructuras especializadas para el sector productivo.',
    icon: Factory,
  },
  {
    title: 'Geotecnia y Cimentaciones',
    description: 'Estudios de suelo y diseño de cimentaciones para garantizar la estabilidad estructural.',
    icon: Mountain,
  },
  {
    title: 'Diseño Estructural',
    description: 'Cálculo y diseño de estructuras optimizadas para máxima eficiencia y seguridad.',
    icon: Ruler,
  },
  {
    title: 'Remodelaciones',
    description: 'Renovación y modernización de espacios existentes adaptándolos a nuevas necesidades.',
    icon: Hammer,
  },
  {
    title: 'Bodegas y Almacenes',
    description: 'Construcción de espacios industriales y comerciales para almacenamiento y distribución.',
    icon: Warehouse,
  },
  {
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo para infraestructuras existentes.',
    icon: Wrench,
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento técnico especializado en proyectos de ingeniería civil y construcción.',
    icon: HardHat,
  },
  {
    title: 'Topografía',
    description: 'Levantamientos topográficos y estudios de terreno con tecnología de última generación.',
    icon: Compass,
  }
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-secondary">
            Soluciones integrales en ingeniería civil
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-secondary text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-secondary text-center text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}