import React, { useState } from 'react';
import { 
  Target, Users, TrendingUp, DollarSign, 
  Star, Clock, Award, Activity, Plus,
  Edit, Trash2, Eye, Filter, Search,
  MapPin, Calendar, Heart, Zap, Shield
} from 'lucide-react';

interface Segment {
  id: string;
  name: string;
  description: string;
  criteria: string[];
  clientCount: number;
  averageValue: string;
  growthRate: string;
  engagementRate: string;
  color: string;
  image: string;
  createdDate: string;
  lastUpdated: string;
}

const ClientsSegmentation: React.FC = () => {
  const [showCreateSegment, setShowCreateSegment] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null);

  const segments: Segment[] = [
    {
      id: '1',
      name: 'High-Value Clients',
      description: 'Clients with high lifetime value and frequent bookings',
      criteria: ['Total spent > $1000', 'Appointments > 15', 'Rating > 4.5'],
      clientCount: 2847,
      averageValue: '$2,340',
      growthRate: '+18%',
      engagementRate: '94%',
      color: 'emerald',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2024-01-15',
      lastUpdated: '2024-01-25'
    },
    {
      id: '2',
      name: 'New Registrations',
      description: 'Recently registered clients in their first 30 days',
      criteria: ['Registration < 30 days', 'Appointments < 3', 'Active status'],
      clientCount: 1558,
      averageValue: '$156',
      growthRate: '+25%',
      engagementRate: '67%',
      color: 'blue',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2024-01-10',
      lastUpdated: '2024-01-25'
    },
    {
      id: '3',
      name: 'At-Risk Clients',
      description: 'Clients showing signs of potential churn',
      criteria: ['No activity > 60 days', 'Rating < 4.0', 'Cancelled appointments > 2'],
      clientCount: 892,
      averageValue: '$450',
      growthRate: '-12%',
      engagementRate: '23%',
      color: 'red',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2024-01-08',
      lastUpdated: '2024-01-24'
    },
    {
      id: '4',
      name: 'Corporate Clients',
      description: 'Business and enterprise clients with team subscriptions',
      criteria: ['Enterprise plan', 'Team size > 10', 'Corporate email domain'],
      clientCount: 456,
      averageValue: '$5,670',
      growthRate: '+32%',
      engagementRate: '89%',
      color: 'purple',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2024-01-05',
      lastUpdated: '2024-01-23'
    },
    {
      id: '5',
      name: 'Loyal Advocates',
      description: 'Long-term clients with high satisfaction and referrals',
      criteria: ['Member > 1 year', 'Referrals > 3', 'Rating > 4.8'],
      clientCount: 1234,
      averageValue: '$3,450',
      growthRate: '+8%',
      engagementRate: '96%',
      color: 'yellow',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2023-12-20',
      lastUpdated: '2024-01-22'
    },
    {
      id: '6',
      name: 'Geographic Focus - West Coast',
      description: 'Clients located in California, Oregon, and Washington',
      criteria: ['Location: CA, OR, WA', 'Active status', 'Any subscription'],
      clientCount: 3456,
      averageValue: '$890',
      growthRate: '+15%',
      engagementRate: '78%',
      color: 'cyan',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdDate: '2024-01-12',
      lastUpdated: '2024-01-25'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Segmentation Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Client Segmentation
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage client segments for targeted marketing and analysis
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCreateSegment(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Create Segment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Segments Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
              <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{segments.length}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Total Segments</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active client segments</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {segments.reduce((sum, segment) => sum + segment.clientCount, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Segmented Clients</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Clients in segments</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">+18%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Avg Growth Rate</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Across all segments</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$2,340</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Avg Segment Value</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Per client value</p>
        </div>
      </div>

      {/* Segments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {segments.map((segment, index) => (
          <div
            key={segment.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Segment Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={segment.image}
                alt={segment.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Growth indicator */}
              <div className="absolute top-4 right-4">
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  segment.growthRate.startsWith('+') ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{segment.growthRate}</span>
                </div>
              </div>
              
              {/* Segment name overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{segment.name}</h3>
                <p className="text-sm text-gray-200">{segment.clientCount.toLocaleString()} clients</p>
              </div>
            </div>

            {/* Segment Details */}
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {segment.description}
              </p>

              {/* Criteria */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Criteria:</h4>
                <div className="space-y-1">
                  {segment.criteria.map((criterion, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{criterion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segment Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{segment.averageValue}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Avg Value</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Activity className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{segment.engagementRate}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Engagement</div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                <p>Created: {new Date(segment.createdDate).toLocaleDateString()}</p>
                <p>Last updated: {new Date(segment.lastUpdated).toLocaleDateString()}</p>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedSegment(segment)}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-200 hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Segment Modal */}
      {showCreateSegment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Segment</h3>
                <button
                  onClick={() => setShowCreateSegment(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Segment Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                    placeholder="Enter segment name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                    placeholder="Describe this client segment"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Segmentation Criteria
                  </label>
                  <div className="space-y-2">
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700">
                      <option>Total Spent</option>
                      <option>Number of Appointments</option>
                      <option>Registration Date</option>
                      <option>Location</option>
                      <option>Subscription Plan</option>
                      <option>Rating</option>
                    </select>
                    <div className="grid grid-cols-3 gap-2">
                      <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700">
                        <option>Greater than</option>
                        <option>Less than</option>
                        <option>Equal to</option>
                        <option>Between</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Value"
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                      />
                      <button
                        type="button"
                        className="px-3 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateSegment(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Create Segment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Segment Details Modal */}
      {selectedSegment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedSegment.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(selectedSegment.color)}`}>
                    {selectedSegment.clientCount.toLocaleString()} clients
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSegment(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Segment Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Description:</span> {selectedSegment.description}</p>
                    <p><span className="font-medium">Client Count:</span> {selectedSegment.clientCount.toLocaleString()}</p>
                    <p><span className="font-medium">Average Value:</span> {selectedSegment.averageValue}</p>
                    <p><span className="font-medium">Growth Rate:</span> {selectedSegment.growthRate}</p>
                    <p><span className="font-medium">Engagement:</span> {selectedSegment.engagementRate}</p>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 mt-6">Criteria</h4>
                  <div className="space-y-2">
                    {selectedSegment.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Shield className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Users className="w-6 h-6 text-cyan-500 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{selectedSegment.clientCount.toLocaleString()}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Total Clients</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{selectedSegment.averageValue}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Avg Value</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{selectedSegment.growthRate}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Growth Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Activity className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{selectedSegment.engagementRate}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                    Export Segment
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Create Campaign
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Edit Segment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsSegmentation;