import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/Air Peace Hotel .jpg',
      title: 'Air Peace Hotel',
      category: 'Commercial',
      description: 'Modern hotel design with contemporary architecture'
    },
    {
      src: '/Air Peace Office 1.png',
      title: 'Air Peace Office Complex',
      category: 'Commercial',
      description: 'Corporate office building with modern facilities'
    },
    {
      src: '/Air Peace Office 2.jpg',
      title: 'Air Peace Office Interior',
      category: 'Commercial',
      description: 'Professional workspace design and layout'
    },
    {
      src: '/Air Peace Office 3.jpg',
      title: 'Air Peace Office Exterior',
      category: 'Commercial',
      description: 'Impressive exterior facade and landscaping'
    },
    {
      src: '/Cameron Road 1.jpg',
      title: 'Cameron Road Development',
      category: 'Residential',
      description: 'Premium residential development project'
    },
    {
      src: '/Cameron Road 2.jpg',
      title: 'Cameron Road Complex',
      category: 'Educational',
      description: 'Educational facility with modern amenities'
    },
    {
      src: '/Cameron Road 3.jpg',
      title: 'Cameron Road Industrial',
      category: 'Industrial',
      description: 'Industrial facility with advanced infrastructure'
    },
    {
      src: '/Cameron Road 1 copy.jpg',
      title: 'Cameron Road Alternative View',
      category: 'Residential',
      description: 'Alternative perspective of the development'
    },
    {
      src: '/Cameron Road Option 2.jpg',
      title: 'Cameron Road Option 2',
      category: 'Residential',
      description: 'Second design option for the development'
    },
    {
      src: '/EKWERE AZU VILLA 1.jpg',
      title: 'Ekwere Azu Villa',
      category: 'Residential',
      description: 'Luxury villa with premium finishes'
    },
    {
      src: '/EKWERE AZU VILLA 2.jpg',
      title: 'Ekwere Azu Villa Interior',
      category: 'Residential',
      description: 'Elegant interior design and layout'
    },
    {
      src: '/EKWERE AZU VILLA 4.jpg',
      title: 'Ekwere Azu Villa Exterior',
      category: 'Residential',
      description: 'Beautiful exterior architecture and landscaping'
    },
    {
      src: '/EKWERE AZU VILLA  3 (NIGHT).jpg',
      title: 'Ekwere Azu Villa Night View',
      category: 'Residential',
      description: 'Stunning night illumination of the villa'
    },
    {
      src: '/Melrose Residences 1.png',
      title: 'Melrose Residences',
      category: 'Residential',
      description: 'Luxury apartment complex with modern amenities'
    },
    {
      src: '/Wuta Residences 1.jpg',
      title: 'Wuta Residences',
      category: 'Residential',
      description: 'Contemporary residential development'
    },
    {
      src: '/Wuta Residences 2.jpg',
      title: 'Wuta Residences Complex',
      category: 'Residential',
      description: 'Multi-unit residential complex with gardens'
    },
    {
      src: '/Wuta Residences 3.jpg',
      title: 'Wuta Residences Amenities',
      category: 'Residential',
      description: 'Premium amenities and recreational facilities'
    },
    {
      src: '/XX ABOYADE COLE 1.png',
      title: 'Aboyade Cole Project',
      category: 'Commercial',
      description: 'Commercial development in prime location'
    },
    {
      src: '/XX ABOYADE COLE 2.png',
      title: 'Aboyade Cole Complex',
      category: 'Commercial',
      description: 'Modern commercial complex with retail spaces'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Educational'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Project Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Our Work
            <span className="block text-wine-700 italic">In Pictures</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio showcasing the quality and craftsmanship 
            that defines Wheelbarrow Construction Limited.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-wine-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-wine-700 hover:bg-wine-50 hover:text-wine-900 border border-wine-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900/80 via-wine-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-wine-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-wine-900 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ZoomIn className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-serif font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.title}
                  </h3>
                  <p className="text-sm text-wine-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={filteredImages[currentIndex]?.src}
                  alt={filteredImages[currentIndex]?.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <div className="text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-serif font-bold">
                        {filteredImages[currentIndex]?.title}
                      </h3>
                      <span className="bg-wine-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {filteredImages[currentIndex]?.category}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {filteredImages[currentIndex]?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-wine-800 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Inspired by Our Work?
          </h3>
          <p className="text-xl text-wine-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create something amazing together. Contact us to discuss your next construction project.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-wine-900 hover:bg-wine-50 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Start Your Project
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;