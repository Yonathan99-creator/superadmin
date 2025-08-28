import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, Clock, 
  DollarSign, Users, CheckCircle, AlertTriangle,
  X, TrendingUp, Award, Shield, Zap
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  providers: number;
  bookings: number;
  rating: number;
  reviews: number;
  status: 'active' | 'inactive' | 'pending';
  image: string;
  growth: string;
  featured: boolean;
}

interface ServicesListProps {
  selectedCategory: string;
  onSelectService: (service: Service) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({ selectedCategory, onSelectService }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const services: Service[] = [
    {
      id: '1',
      name: 'General Medical Consultation',
      category: 'consultation',
      description: 'Comprehensive medical consultation with experienced healthcare professionals for general health concerns and preventive care.',
      price: '$75',
      duration: '30 min',
      providers: 247,
      bookings: 12450,
      rating: 4.8,
      reviews: 1247,
      status: 'active',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+12%',
      featured: true
    },
    {
      id: '2',
      name: 'Cardiac Screening & ECG',
      category: 'diagnostic',
      description: 'Complete cardiac health evaluation including ECG, blood pressure monitoring, and cardiovascular risk assessment.',
      price: '$150',
      duration: '45 min',
      providers: 89,
      bookings: 3420,
      rating: 4.9,
      reviews: 567,
      status: 'active',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+18%',
      featured: true
    },
    {
      id: '3',
      name: 'Mental Health Counseling',
      category: 'therapy',
      description: 'Professional mental health counseling sessions with licensed therapists for anxiety, depression, and stress management.',
      price: '$110',
      duration: '50 min',
      providers: 156,
      bookings: 5670,
      rating: 4.9,
      reviews: 892,
      status: 'active',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+25%',
      featured: false
    },
    {
      id: '4',
      name: 'Dental Cleaning & Checkup',
      category: 'dental',
      description: 'Professional dental cleaning, oral health assessment, and preventive care with experienced dental hygienists.',
      price: '$120',
      duration: '45 min',
      providers: 134,
      bookings: 8920,
      rating: 4.7,
      reviews: 1156,
      status: 'active',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+8%',
      featured: false
    },
    {
      id: '5',
      name: 'Physical Therapy Session',
      category: 'therapy',
      description: 'Individual physical therapy sessions for rehabilitation, injury recovery, and mobility improvement.',
      price: '$90',
      duration: '60 min',
      providers: 78,
      bookings: 4560,
      rating: 4.8,
      reviews: 678,
      status: 'active',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+15%',
      featured: false
    },
    {
      id: '6',
      name: 'Eye Examination',
      category: 'vision',
      description: 'Comprehensive eye examination including vision testing, eye health assessment, and prescription updates.',
      price: '$85',
      duration: '40 min',
      providers: 67,
      bookings: 2340,
      rating: 4.6,
      reviews: 445,
      status: 'pending',
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      growth: '+22%',
      featured: false
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      inactive: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    };
    return badges[status as keyof typeof badges] || badges.inactive;
  };

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="animate-in slide-in-from-bottom duration-700 delay-600">
      {/* List Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Services List
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {filteredServices.length} services found
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="bookings">Sort by Bookings</option>
            </select>
            
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 shadow-sm'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 shadow-sm'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="w-4 h-4 flex flex-col space-y-1">
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status and Featured badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(service.status)}`}>
                    {getStatusIcon(service.status)}
                    <span className="ml-1">{service.status.charAt(0).toUpperCase() + service.status.slice(1)}</span>
                  </span>
                  {service.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Growth indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{service.growth}</span>
                  </div>
                </div>
                
                {/* Service name overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-200 capitalize">{service.category.replace('_', ' ')}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{service.providers} providers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{service.rating} ({service.reviews})</span>
                  </div>
                </div>

                {/* Booking Stats */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{service.bookings.toLocaleString()}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Total Bookings</div>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.growth}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    {service.featured && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                        {service.name}
                      </h4>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(service.status)}`}>
                        {getStatusIcon(service.status)}
                        <span className="ml-1">{service.status.charAt(0).toUpperCase() + service.status.slice(1)}</span>
                      </span>
                      <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-medium">{service.growth}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-1">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span>{service.providers} providers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{service.rating} ({service.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-gray-400" />
                        <span>{service.bookings.toLocaleString()} bookings</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesList;