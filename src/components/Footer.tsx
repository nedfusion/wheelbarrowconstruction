import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-wine-700 p-3 rounded-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Wheelbarrow Construction</h3>
                <p className="text-wine-300 text-sm font-medium">Limited</p>
              </div>
            </div>
            
            <p className="text-wine-200 leading-relaxed mb-8 max-w-md text-lg">
              Nigerian-based architectural engineering and construction company committed to 
              delivering innovative, sustainable, and cost-effective building solutions across Africa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-wine-800 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-wine-200" />
                </div>
                <span className="text-wine-200">+234 (0) 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-wine-800 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-wine-200" />
                </div>
                <span className="text-wine-200">info@wheelbarrowconstruction.com</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-wine-800 p-2 rounded-lg mt-1">
                  <MapPin className="h-5 w-5 text-wine-200" />
                </div>
                <span className="text-wine-200 leading-relaxed">289A Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-8 text-wine-100">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
               { name: 'Gallery', id: 'gallery' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-wine-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-8 text-wine-100">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">Architectural Design</span></li>
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">Engineering Services</span></li>
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">Urban Development</span></li>
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">BIM & Technology</span></li>
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">Facility Management</span></li>
              <li><span className="text-wine-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium">Sustainability Consulting</span></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="border-t border-wine-800 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            
            {/* Social Media */}
            <div className="flex items-center space-x-8 mb-8 lg:mb-0">
              <span className="text-wine-300 font-serif font-medium text-lg">Follow Us:</span>
              <div className="flex space-x-6">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-wine-400 hover:text-white transition-all duration-300 transform hover:scale-110 bg-wine-800 p-3 rounded-lg hover:bg-wine-700"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                CAC Registered
              </div>
              <div className="bg-wine-100 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold">
                ISO 9001 Certified
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                COREN Approved
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-wine-800 mt-12 pt-8 text-center">
          <p className="text-wine-400 text-lg">
            © {currentYear} Wheelbarrow Construction Limited (RC: 123456). All rights reserved. 
            <span className="mx-3">|</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</span>
            <span className="mx-3">|</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;