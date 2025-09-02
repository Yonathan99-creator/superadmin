import React from 'react';
import { 
  UserCheck, Plus, BarChart3, Download, 
  Search, Filter, Zap, Shield, Award,
  TrendingUp, Users, Star, Settings,
  Activity, Globe, Target
} from 'lucide-react';

interface ClientsHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ClientsHeader: React.FC<ClientsHeaderProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Clients Overview', icon: UserCheck, count: '28,405' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, count: 'Live' },
    { id: 'segmentation', label: 'Segmentation', icon: Target, count: '12' },
  ];

  return (
    <div className="mb-8 animate-in slide-in-from-top duration-700">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Clients Management
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Manage customer relationships, analytics, and engagement
                </p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">26,847 Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">1,558 New This Month</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">4.8 Avg Rating</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Plus className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Add Client</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Activity className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Live Monitor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-2">
        <div className="flex space-x-1">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${
                  isActive ? 'text-white' : ''
                }`} />
                <span className="font-medium">{tab.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 mt-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients by name, email, location, or registration date..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
              <Filter className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Filters</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group">
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;