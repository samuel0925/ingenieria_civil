import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    title: 'Sede Principal Bogotá',
    email: 'bogota@ingenieriayalturas.com',
    phone: '+57 601 234 5678',
    address: 'Calle 100 #9-45, Edificio Commercial Park',
    schedule: 'Lun - Vie: 8:00 AM - 6:00 PM'
  },
  {
    title: 'Sede Medellín',
    email: 'medellin@ingenieriayalturas.com',
    phone: '+57 604 567 8901',
    address: 'Carrera 43A #1-50, Torre Empresarial',
    schedule: 'Lun - Vie: 8:00 AM - 6:00 PM'
  },
  {
    title: 'Sede Barranquilla',
    email: 'barranquilla@ingenieriayalturas.com',
    phone: '+57 605 890 1234',
    address: 'Calle 76 #54-11, Centro Ejecutivo',
    schedule: 'Lun - Vie: 8:00 AM - 6:00 PM'
  }
];

export function Contact() {
  return (
    <div id="contact" className="py-24 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Nuestras Sedes
          </h2>
          <p className="mt-4 text-xl text-secondary">
            Contáctanos en cualquiera de nuestras oficinas
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactInfo.map((office) => (
            <div key={office.title} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-secondary mb-6">{office.title}</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="ml-3 text-secondary text-sm">{office.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="ml-3 text-secondary text-sm">{office.phone}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="ml-3 text-secondary text-sm">{office.address}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="ml-3 text-secondary text-sm">{office.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Envíanos un mensaje</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary px-6 py-3 rounded-md hover:bg-primary-hover"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}