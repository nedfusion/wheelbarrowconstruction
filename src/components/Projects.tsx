import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Estate',
      category: 'residential',
      image: '/Wuta Residences 2.jpg',
      location: 'Lekki, Lagos',
      year: '2024',
      description: '50-unit luxury residential estate with modern amenities and sustainable design features.'
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      category: 'commercial',
      image: '/Air Peace Office 1.png',
      location: 'Victoria Island, Lagos',
      year: '2023',
      description: '15-story office complex with sustainable design and modern workspace solutions.'
    },
    {
      id: 3,
      title: 'Industrial Manufacturing Hub',
      category: 'industrial',
      image: '/Cameron Road 3.jpg',
      location: 'Lagos State',
      year: '2023',
      description: '75,000 sq ft state-of-the-art manufacturing facility with advanced automation systems.'
    },
    {
      id: 4,
      title: 'Private Housing Complex',
      category: 'commercial',
      image: '/EKWERE AZU VILLA 4.jpg',
      location: 'Imo State',
      year: '2022',
      description: 'Multi-purpose complex featuring retail, office spaces, and residential units.'
    },
    {
      id: 5,
      title: 'Government Housing Project',
      category: 'residential',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kano State',
      year: '2022',
      description: '500-unit affordable housing development with community facilities and green spaces.'
    },
    {
      id: 6,
      title: 'Educational Institution',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Port Harcourt, Rivers',
      year: '2021',
      description: 'Modern university campus with lecture halls, laboratories, and student facilities.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-wine-50 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Featured
            <span className="block text-wine-700 italic">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful construction projects that showcase 
            our expertise across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-wine-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-wine-700 hover:bg-wine-50 hover:text-wine-900 border border-wine-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-wine-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-serif font-bold text-wine-900">
                    {selectedProject.title}
                  </h3>
                  <span className="bg-wine-100 text-wine-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-wine-600" />
                    <span className="text-gray-700 font-medium">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-wine-600" />
                    <span className="text-gray-700 font-medium">Completed in {selectedProject.year}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="bg-wine-50 rounded-xl p-6">
                  <h4 className="text-xl font-serif font-bold text-wine-900 mb-4">Project Highlights</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wine-800 rounded-full mr-3 mt-2"></div>
                      <span>Modern architectural design with sustainable features</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wine-800 rounded-full mr-3 mt-2"></div>
                      <span>High-quality construction materials and finishes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wine-800 rounded-full mr-3 mt-2"></div>
                      <span>Delivered on time and within budget</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wine-800 rounded-full mr-3 mt-2"></div>
                      <span>Client satisfaction and positive feedback</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => {
                      closeProjectDetails();
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-wine-800 hover:bg-wine-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Start Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-wine-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-wine-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="bg-white text-wine-900 px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 hover:bg-wine-50 transition-colors duration-200"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-wine-900 mb-3 group-hover:text-wine-700 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-wine-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-wine-600" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-wine-800 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-wine-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can bring your construction vision to life with 
            our proven expertise and commitment to excellence.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-white text-wine-900 hover:bg-wine-50 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
          >
            <span>Get Your Free Consultation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;