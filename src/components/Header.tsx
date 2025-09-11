import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-wine-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/All caps Transparent.png"
              alt="Wheelbarrow Construction Limited"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Projects', id: 'projects' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-wine-700 hover:text-wine-900' 
                    : 'text-white hover:text-wine-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-wine-800 hover:bg-wine-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'hover:bg-wine-50 text-wine-700' 
                : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-wine-100 mt-4">
            <nav className="p-6 space-y-4">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-wine-700 hover:text-wine-900 hover:bg-wine-50 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-wine-800 hover:bg-wine-900 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
              >
                Get Quote
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;