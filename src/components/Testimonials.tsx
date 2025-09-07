import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Ogundimu',
      role: 'Managing Director',
      company: 'Lagos State Development Corporation',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Wheelbarrow Construction Limited delivered exceptional results on our mass housing project. Their innovative approach to sustainable design and commitment to quality made them the perfect partner for our urban development initiatives.'
    },
    {
      name: 'Fatima Al-Hassan',
      role: 'CEO',
      company: 'Northern Properties Ltd',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Wheelbarrow Construction was a game-changer for our commercial development. Their architectural expertise and engineering precision resulted in a building that perfectly balances functionality with aesthetic appeal.'
    },
    {
      name: 'Chukwuma Okafor',
      role: 'Project Director',
      company: 'Federal Ministry of Works',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The professionalism and technical expertise demonstrated by Wheelbarrow Construction on our infrastructure project was outstanding. They consistently met deadlines while maintaining the highest safety and quality standards.'
    },
    {
      name: 'Amina Bello',
      role: 'Facilities Manager',
      company: 'West Africa Business Hub',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'From initial design to final handover, Wheelbarrow Construction exceeded our expectations. Their BIM technology and modern construction methods delivered a facility that perfectly serves our operational needs.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            What Our
            <span className="block text-wine-700 italic">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Wheelbarrow Construction Limited.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative border border-wine-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-16 w-16 text-wine-800" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-light">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-wine-100"
                />
                <div>
                  <div className="font-serif font-bold text-wine-900 text-lg">{testimonial.name}</div>
                  <div className="text-wine-600 font-medium">{testimonial.role}</div>
                  <div className="text-wine-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-wine-800 rounded-3xl p-12 lg:p-16 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-5xl font-serif font-bold text-wine-200 mb-3 group-hover:text-white transition-colors duration-300">100%</div>
              <div className="text-wine-300 font-medium">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-5xl font-serif font-bold text-wine-200 mb-3 group-hover:text-white transition-colors duration-300">100+</div>
              <div className="text-wine-300 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-serif font-bold text-wine-200 mb-3 group-hover:text-white transition-colors duration-300">5</div>
              <div className="text-wine-300 font-medium">States Covered</div>
            </div>
            <div className="group">
              <div className="text-5xl font-serif font-bold text-wine-200 mb-3 group-hover:text-white transition-colors duration-300">24/7</div>
              <div className="text-wine-300 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;