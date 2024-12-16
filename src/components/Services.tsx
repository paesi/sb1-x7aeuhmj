import React from 'react';
import { Sparkles, Droplets, Home, Brush, ThermometerSun, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of all spaces using eco-friendly products'
  },
  {
    icon: Droplets,
    title: 'Window Cleaning',
    description: 'Professional window and glass surface cleaning services'
  },
  {
    icon: Home,
    title: 'Property Maintenance',
    description: 'Regular maintenance to keep your property in perfect condition'
  },
  {
    icon: Brush,
    title: 'Exterior Cleaning',
    description: 'Facade and exterior surface cleaning services'
  },
  {
    icon: ThermometerSun,
    title: 'HVAC Maintenance',
    description: 'Regular inspection and maintenance of heating and cooling systems'
  },
  {
    icon: Shield,
    title: 'Security Checks',
    description: 'Regular property security and safety inspections'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive property maintenance solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}