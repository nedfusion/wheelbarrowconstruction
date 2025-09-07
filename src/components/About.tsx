import React from 'react';
import { CheckCircle, Target, Eye, Award, Lightbulb, Users, Leaf, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Designing with creativity and modern technology to deliver cutting-edge solutions.'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Building trust through transparency and accountability in all our dealings.'
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Consistently delivering projects of the highest quality that exceed expectations.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting green building and eco-friendly solutions for a better future.'
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Ensuring solutions meet the specific needs of every client we serve.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Wheelbarrow Construction
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Transforming Ideas Into
            <span className="block text-wine-700 italic">Landmark Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Nigerian-based architectural engineering company committed to delivering 
            innovative, sustainable, and cost-effective building solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-wine-900 mb-8">
              Our Story & Mission
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Established with a vision to redefine the built environment, Wheelbarrow Construction Limited 
                integrates architectural design, structural engineering, and construction management into a 
                seamless process that transforms ideas into landmark projects.
              </p>

              <p>
                We operate with a focus on excellence, safety, and client satisfaction, ensuring that every 
                project—from concept design to completion—meets global best practices while reflecting 
                Nigeria's unique cultural and environmental context.
              </p>

              <div className="bg-wine-50 border-l-4 border-wine-800 p-6 rounded-r-lg">
                <h4 className="font-serif font-bold text-wine-900 text-xl mb-2">Our Mission</h4>
                <p className="text-wine-800">
                  To provide world-class architectural and engineering solutions that combine creativity, 
                  functionality, and sustainability, thereby shaping modern Nigeria's landscape and 
                  contributing to infrastructure growth.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-2">Our Vision</h4>
                <p className="text-gray-700">
                  To become one of Nigeria's most trusted and innovative architectural engineering firms, 
                  recognized for quality, integrity, and timely delivery.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 bg-wine-50 rounded-xl">
                <div className="text-4xl font-serif font-bold text-wine-800 mb-2">100+</div>
                <div className="text-wine-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-wine-50 rounded-xl">
                <div className="text-4xl font-serif font-bold text-wine-800 mb-2">200+</div>
                <div className="text-wine-600 font-medium">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/Air Peace Hotel .jpg"
                  alt="Modern architectural design and construction"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs border border-wine-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-wine-800 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-wine-900 font-serif">Excellence</div>
                    <div className="text-wine-600">In Every Project</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-wine-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-wine-50 rounded-3xl p-12 lg:p-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-wine-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-wine-700 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-wine-800 transition-colors duration-300 shadow-lg">
                  <value.icon className="h-10 w-10 text-wine-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-serif font-bold text-wine-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-wine-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-wine-900 mb-12">
            Why Choose Wheelbarrow Construction?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Experienced team of architects, engineers, and project managers',
              'Proven record of delivering on time and within budget',
              'Strong commitment to safety and sustainability',
              'Modern technology-driven approach (BIM, CAD, 3D visualization)'
            ].map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-wine-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-wine-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;