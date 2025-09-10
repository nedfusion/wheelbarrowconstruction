import React from 'react';
import { ArrowRight, Award, Users, Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse"
        style={{
          backgroundColor: 'white'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-wine-900/95 via-wine-800/90 to-wine-700/85"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/Cameron Road 1.jpg)'
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/15 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-red-600 pt-24 md:pt-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 text-red-700">
            Redefining
            <span className="block text-red-500 italic">Nigeria's Built</span>
            <span className="block">Environment</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-red-600/90 leading-relaxed max-w-3xl font-light">
            We integrate architectural design, structural engineering, and construction management 
            into a seamless process that transforms ideas into landmark projects across Nigeria.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-wine-900 hover:bg-wine-50 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start space-x-4 mb-3">
                <div className="bg-red-600/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                  <Award className="h-8 w-8 text-red-500" />
                </div>
                <span className="text-4xl lg:text-5xl font-serif font-bold">100+</span>
              </div>
              <p className="text-red-600/80 text-lg">Projects Delivered</p>
            </div>
            
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start space-x-4 mb-3">
                <div className="bg-red-600/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <span className="text-4xl lg:text-5xl font-serif font-bold">200+</span>
              </div>
              <p className="text-red-600/80 text-lg">Happy Clients</p>
            </div>
            
            <div className="text-center sm:text-left group">
              <div className="flex items-center justify-center sm:justify-start space-x-4 mb-3">
                <div className="bg-red-600/10 backdrop-blur-sm p-3 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <span className="text-4xl lg:text-5xl font-serif font-bold">100%</span>
              </div>
              <p className="text-red-600/80 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-600 animate-bounce cursor-pointer"
           onClick={() => scrollToSection('about')}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-red-600/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="h-5 w-5 text-red-600/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;