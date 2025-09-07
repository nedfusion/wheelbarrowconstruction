import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 (0) 1 234 5678',
      subtext: 'Mon-Fri 8AM-6PM WAT'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@wheelbarrowconstruction.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '289A Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria',
      subtext: 'Main Office & Showroom'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM WAT',
      subtext: 'Saturday: 9:00 AM - 2:00 PM WAT'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-3xl p-16 border border-green-200">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-8" />
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to discuss your construction project!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Let's Build Something
            <span className="block text-wine-700 italic">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Get in touch with our expert team 
            for a free consultation and detailed project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-wine-50 rounded-3xl p-8 lg:p-12 border border-wine-100">
            <h3 className="text-3xl font-serif font-bold text-wine-900 mb-8">
              Get Your Free Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-wine-800 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-wine-200 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-wine-800 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-wine-200 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-wine-800 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-wine-200 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="+234 (0) 1 234 5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-wine-800 mb-3">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-wine-200 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Design & Construction</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="industrial">Industrial & Infrastructure</option>
                    <option value="renovation">Renovation & Facility Management</option>
                    <option value="urban">Urban Development & Housing</option>
                    <option value="consulting">Architectural Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-wine-800 mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-wine-200 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-wine-800 hover:bg-wine-900 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-wine-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're here to help bring your construction dreams to reality. 
                Reach out to us through any of the methods below, and we'll 
                get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-wine-50 transition-all duration-300 border border-gray-200 hover:border-wine-200">
                  <div className="bg-wine-800 p-4 rounded-xl group-hover:bg-wine-900 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine-900 mb-2 text-lg">{info.title}</h4>
                    <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-wine-800 border-l-4 border-wine-600 p-8 rounded-r-2xl text-white">
              <h4 className="font-serif font-bold text-xl mb-3">Project Consultation</h4>
              <p className="text-wine-200 mb-3 leading-relaxed">Free consultation available for all project types</p>
              <p className="text-white font-semibold text-lg">Consultation Line: +234 (0) 1 234 5679</p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-wine-50 border border-wine-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-wine-400 mx-auto mb-4" />
                <p className="text-wine-700 font-serif font-bold text-lg mb-2">Interactive Map</p>
                <p className="text-wine-600">Dolphin Estate, Ikoyi, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;