import React from 'react';
import { Home, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">SwissClean Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}