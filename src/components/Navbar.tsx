import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary">Inicio</a>
            <a href="#services" className="text-secondary hover:text-primary">Servicios</a>
            <a href="#projects" className="text-secondary hover:text-primary">Proyectos</a>
            <a href="#contact" className="text-secondary hover:text-primary">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-secondary hover:text-primary">Inicio</a>
            <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary">Servicios</a>
            <a href="#projects" className="block px-3 py-2 text-secondary hover:text-primary">Proyectos</a>
            <a href="#contact" className="block px-3 py-2 text-secondary hover:text-primary">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}