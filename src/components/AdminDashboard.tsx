import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Edit3, 
  Trash2, 
  Plus, 
  Save, 
  X, 
  Eye,
  Settings,
  Users,
  BarChart3,
  FileText,
  LogOut
} from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  order: number;
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock data - in real implementation, this would come from your backend
  useEffect(() => {
    // Load gallery images
    const mockGalleryImages: GalleryImage[] = [
      {
        id: '1',
        src: '/Air Peace Hotel .jpg',
        title: 'Air Peace Hotel',
        category: 'Commercial',
        description: 'Modern hotel design with contemporary architecture',
        order: 1
      },
      {
        id: '2',
        src: '/Air Peace Office 1.png',
        title: 'Air Peace Office Complex',
        category: 'Commercial',
        description: 'Corporate office building with modern facilities',
        order: 2
      }
    ];
    setGalleryImages(mockGalleryImages);

    // Load projects
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'Modern Residential Estate',
        category: 'residential',
        image: '/Wuta Residences 2.jpg',
        location: 'Lekki, Lagos',
        year: '2024',
        description: '50-unit luxury residential estate with modern amenities and sustainable design features.'
      }
    ];
    setProjects(mockProjects);
  }, []);

  const handleImageUpload = async (file: File, type: 'gallery' | 'project') => {
    setIsUploading(true);
    try {
      // In real implementation, upload to your storage service
      const formData = new FormData();
      formData.append('file', file);
      
      // Mock upload - replace with actual upload logic
      const mockUrl = URL.createObjectURL(file);
      
      if (type === 'gallery') {
        const newImage: GalleryImage = {
          id: Date.now().toString(),
          src: mockUrl,
          title: file.name.split('.')[0],
          category: 'Commercial',
          description: 'New uploaded image',
          order: galleryImages.length + 1
        };
        setGalleryImages([...galleryImages, newImage]);
      }
      
      setIsUploading(false);
      return mockUrl;
    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
      throw error;
    }
  };

  const handleDeleteImage = (id: string, type: 'gallery' | 'project') => {
    if (type === 'gallery') {
      setGalleryImages(galleryImages.filter(img => img.id !== id));
    } else {
      setProjects(projects.filter(proj => proj.id !== id));
    }
  };

  const handleSaveEdit = (updatedItem: any, type: 'gallery' | 'project') => {
    if (type === 'gallery') {
      setGalleryImages(galleryImages.map(img => 
        img.id === updatedItem.id ? updatedItem : img
      ));
    } else {
      setProjects(projects.map(proj => 
        proj.id === updatedItem.id ? updatedItem : proj
      ));
    }
    setEditingItem(null);
  };

  const EditModal = ({ item, type, onSave, onClose }: any) => {
    const [formData, setFormData] = useState(item);

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Edit {type === 'gallery' ? 'Gallery Image' : 'Project'}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent"
              >
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Industrial">Industrial</option>
                <option value="Educational">Educational</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent resize-none"
              />
            </div>

            {type === 'project' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                  />
                </div>
              </>
            )}

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => onSave(formData, type)}
                className="px-6 py-3 bg-wine-800 text-white rounded-lg hover:bg-wine-900 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-wine-800 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-2">
                {[
                  { id: 'gallery', name: 'Gallery Management', icon: ImageIcon },
                  { id: 'projects', name: 'Projects', icon: FileText },
                  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
                  { id: 'users', name: 'Users', icon: Users }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-wine-800 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Gallery Management</h2>
                    <div className="flex space-x-4">
                      <label className="bg-wine-800 text-white px-6 py-3 rounded-lg hover:bg-wine-900 transition-colors cursor-pointer flex items-center space-x-2">
                        <Upload className="h-5 w-5" />
                        <span>Upload Images</span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files) {
                              Array.from(e.target.files).forEach(file => {
                                handleImageUpload(file, 'gallery');
                              });
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="bg-gray-50 rounded-xl overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                            <button
                              onClick={() => setEditingItem(image)}
                              className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteImage(image.id, 'gallery')}
                              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{image.category}</p>
                          <p className="text-xs text-gray-500">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="bg-wine-800 text-white px-6 py-3 rounded-lg hover:bg-wine-900 transition-colors flex items-center space-x-2"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Project</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex space-x-4">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                              <p className="text-gray-600 mb-2">{project.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{project.location}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                                <span>•</span>
                                <span className="capitalize">{project.category}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setEditingItem(project)}
                              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteImage(project.id, 'project')}
                              className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-wine-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-wine-900 mb-2">Total Views</h3>
                    <p className="text-3xl font-bold text-wine-800">12,543</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Gallery Views</h3>
                    <p className="text-3xl font-bold text-blue-800">3,421</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Contact Forms</h3>
                    <p className="text-3xl font-bold text-green-800">89</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <EditModal
          item={editingItem}
          type={galleryImages.find(img => img.id === editingItem.id) ? 'gallery' : 'project'}
          onSave={handleSaveEdit}
          onClose={() => setEditingItem(null)}
        />
      )}

      {/* Upload Progress */}
      {isUploading && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-wine-800"></div>
            <span className="text-gray-700">Uploading images...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;