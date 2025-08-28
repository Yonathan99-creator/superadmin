import React from 'react';
import { Stethoscope, Brain, Heart, Bluetooth as Tooth, Eye, Activity, Shield, Zap, Plus, TrendingUp } from 'lucide-react';

interface ServiceCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  const categories = [
    { 
      id: 'all', 
      name: 'All Services', 
      count: 1247, 
      icon: Activity, 
      color: 'gray',
      description: 'All available services',
      growth: '+12%'
    },
    { 
      id: 'consultation', 
      name: 'Medical Consultation', 
      count: 456, 
      icon: Stethoscope, 
      color: 'blue',
      description: 'General medical consultations',
      growth: '+8%'
    },
    { 
      id: 'diagnostic', 
      name: 'Diagnostic Services', 
      count: 234, 
      icon: Heart, 
      color: 'red',
      description: 'Medical tests and diagnostics',
      growth: '+15%'
    },
    { 
      id: 'therapy', 
      name: 'Therapy Sessions', 
      count: 189, 
      icon: Brain, 
      color: 'purple',
      description: 'Mental health and therapy',
      growth: '+22%'
    },
    { 
      id: 'dental', 
      name: 'Dental Care', 
      count: 167, 
      icon: Tooth, 
      color: 'green',
      description: 'Dental treatments and care',
      growth: '+5%'
    },
    { 
      id: 'vision', 
      name: 'Vision Care', 
      count: 89, 
      icon: Eye, 
      color: 'yellow',
      description: 'Eye care and vision services',
      growth: '+18%'
    },
    { 
      id: 'emergency', 
      name: 'Emergency Care', 
      count: 112, 
      icon: Shield, 
      color: 'orange',
      description: 'Emergency medical services',
      growth: '+25%'
    }
  ];

  const getColorClasses = (color: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg';
    }
    
    const colors = {
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30',
      yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
      orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="mb-8 animate-in slide-in-from-bottom duration-700 delay-400">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service Categories</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Browse services by category</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <Plus className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Add Category</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 group text-left animate-in slide-in-from-bottom ${
                  getColorClasses(category.color, isSelected)
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    isSelected 
                      ? 'bg-white/20' 
                      : category.color === 'gray' 
                        ? 'bg-gray-200 dark:bg-gray-600' 
                        : 'bg-white dark:bg-gray-800'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${
                      isSelected 
                        ? 'text-white' 
                        : category.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          category.color === 'red' ? 'text-red-600 dark:text-red-400' :
                          category.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          category.color === 'green' ? 'text-green-600 dark:text-green-400' :
                          category.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                          category.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                          'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className={`w-3 h-3 ${
                      isSelected ? 'text-white' : 'text-green-500'
                    }`} />
                    <span className={`text-xs font-medium ${
                      isSelected ? 'text-white' : 'text-green-600 dark:text-green-400'
                    }`}>
                      {category.growth}
                    </span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h4 className={`font-semibold text-sm mb-1 ${
                    isSelected ? 'text-white' : ''
                  }`}>
                    {category.name}
                  </h4>
                  <p className={`text-xs ${
                    isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {category.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${
                    isSelected ? 'text-white' : ''
                  }`}>
                    {category.count.toLocaleString()}
                  </span>
                  <span className={`text-xs ${
                    isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    services
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className={`mt-3 w-full rounded-full h-1 ${
                  isSelected ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-600'
                }`}>
                  <div
                    className={`h-1 rounded-full transition-all duration-1000 ${
                      isSelected 
                        ? 'bg-white' 
                        : category.color === 'blue' ? 'bg-blue-500' :
                          category.color === 'red' ? 'bg-red-500' :
                          category.color === 'purple' ? 'bg-purple-500' :
                          category.color === 'green' ? 'bg-green-500' :
                          category.color === 'yellow' ? 'bg-yellow-500' :
                          category.color === 'orange' ? 'bg-orange-500' :
                          'bg-gray-500'
                    }`}
                    style={{ 
                      width: `${Math.min((category.count / 456) * 100, 100)}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;