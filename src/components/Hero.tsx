import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80"
          alt="Clean modern interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 flex h-full items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Professional Property Maintenance in Bern</h1>
          <p className="text-xl mb-8">Maintaining the pristine condition of your property with Swiss precision and dedication</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center hover:bg-blue-700 transition">
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}