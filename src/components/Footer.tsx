import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#home" className="text-gray-400 hover:text-primary">Inicio</a>
          <a href="#services" className="text-gray-400 hover:text-primary">Servicios</a>
          <a href="#projects" className="text-gray-400 hover:text-primary">Proyectos</a>
          <a href="#contact" className="text-gray-400 hover:text-primary">Contacto</a>
        </div>
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Ingeniería y Alturas S.A.S. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}