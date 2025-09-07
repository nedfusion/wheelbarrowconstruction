import React from 'react';
import { Home, Building2, Factory, Wrench, Compass, PaintBucket, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Architectural Design & Consultancy',
      description: 'Comprehensive architectural services from concept to completion with modern design principles.',
      features: ['Residential, commercial, and industrial design', 'Space planning and interior design', '3D visualization and modeling', 'Architectural consultancy services']
    },
    {
      icon: Building2,
      title: 'Engineering & Construction',
      description: 'Full-service engineering and construction management for all project types.',
      features: ['Structural, mechanical, and electrical engineering', 'Civil works and infrastructure development', 'Building construction and project management', 'Quality assurance and control']
    },
    {
      icon: Factory,
      title: 'Urban Development & Housing',
      description: 'Large-scale development projects including estate layouts and mass housing.',
      features: ['Estate layouts and mass housing projects', 'Mixed-use and commercial developments', 'Infrastructure planning and development', 'Community facility integration']
    },
    {
      icon: PaintBucket,
      title: 'Renovation & Facility Management',
      description: 'Professional renovation services and long-term facility management solutions.',
      features: ['Remodeling and restoration of existing structures', 'Long-term building maintenance', 'Facility management services', 'Preventive maintenance programs']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Comprehensive
            <span className="block text-wine-700 italic">Construction Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From architectural design to construction management, we deliver exceptional 
            services with unmatched quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-wine-100"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-wine-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-wine-900 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-wine-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-wine-800 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="group/btn flex items-center space-x-2 text-wine-800 hover:text-wine-900 font-semibold transition-colors duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-wine-50 px-8 lg:px-10 py-4 group-hover:bg-wine-100 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-wine-700 font-medium">Professional Service</span>
                  <div className="w-8 h-8 bg-wine-200 rounded-full flex items-center justify-center group-hover:bg-wine-300 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-wine-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-wine-800 rounded-3xl p-12 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Specialized Services
            </h3>
            <p className="text-xl text-wine-200 max-w-2xl mx-auto">
              Advanced solutions for modern construction challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold">BIM & Technology Solutions</h4>
              </div>
              <p className="text-wine-200 leading-relaxed">
                Modern technology-driven approach using BIM, CAD, and 3D visualization 
                for precise project planning and execution.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold">Sustainability Consulting</h4>
              </div>
              <p className="text-wine-200 leading-relaxed">
                Green building solutions and eco-friendly construction practices 
                for environmentally responsible development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;