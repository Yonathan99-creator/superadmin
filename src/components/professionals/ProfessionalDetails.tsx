import React, { useState } from 'react';
import { 
  X, Star, MapPin, Phone, Mail, Calendar, 
  DollarSign, Users, Clock, Award, Shield,
  Edit, Ban, CheckCircle, AlertTriangle,
  Activity, TrendingUp, Settings, Eye
} from 'lucide-react';

interface ProfessionalDetailsProps {
  professional: any;
  onClose: () => void;
}

const ProfessionalDetails: React.FC<ProfessionalDetailsProps> = ({ professional, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'permissions', label: 'Permissions', icon: Shield },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  ];

  const permissions = [
    { name: 'Create Appointments', granted: true, description: 'Allow creating new appointments' },
    { name: 'Modify Schedule', granted: true, description: 'Allow modifying availability schedule' },
    { name: 'Access Patient Data', granted: true, description: 'View patient information and history' },
    { name: 'Send Messages', granted: true, description: 'Send messages to patients' },
    { name: 'Generate Reports', granted: false, description: 'Generate and download reports' },
    { name: 'Manage Services', granted: true, description: 'Add, edit, or remove services' },
    { name: 'View Analytics', granted: false, description: 'Access detailed analytics dashboard' },
    { name: 'Export Data', granted: false, description: 'Export patient and appointment data' },
  ];

  const recentActivity = [
    { action: 'Completed appointment', patient: 'John Smith', time: '2 hours ago', type: 'success' },
    { action: 'Updated availability', time: '4 hours ago', type: 'info' },
    { action: 'Added new service', service: 'Stress Test', time: '1 day ago', type: 'update' },
    { action: 'Received 5-star review', patient: 'Mary Johnson', time: '2 days ago', type: 'success' },
    { action: 'Cancelled appointment', patient: 'David Wilson', time: '3 days ago', type: 'warning' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={professional.avatar}
                  alt={professional.name}
                  className="w-16 h-16 rounded-full ring-4 ring-white/20"
                />
                {professional.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{professional.name}</h2>
                <p className="text-blue-100">{professional.specialty}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{professional.rating}</span>
                    <span className="text-blue-200">({professional.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-blue-200">{professional.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1 p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Basic Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contact Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{professional.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{professional.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{professional.location}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Status & Actions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Account Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        professional.status === 'active' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : professional.status === 'pending'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      }`}>
                        {professional.status.charAt(0).toUpperCase() + professional.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Verification</span>
                      <span className={`flex items-center space-x-1 ${
                        professional.verified ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {professional.verified ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        <span className="text-xs font-medium">
                          {professional.verified ? 'Verified' : 'Pending'}
                        </span>
                      </span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                          <Ban className="w-4 h-4" />
                          <span>Suspend</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Activity */}
              <div className="lg:col-span-2 space-y-6">
                {/* Performance Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                    <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{professional.appointments.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Appointments</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                    <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{professional.revenue}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Revenue</div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 text-center">
                    <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{professional.rating}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{professional.reviews}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'success' ? 'bg-green-500' :
                          activity.type === 'warning' ? 'bg-yellow-500' :
                          activity.type === 'info' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {activity.action}
                            {activity.patient && <span className="text-gray-600 dark:text-gray-400"> - {activity.patient}</span>}
                            {activity.service && <span className="text-gray-600 dark:text-gray-400"> - {activity.service}</span>}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Services Offered</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Add Service
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {professional.services.map((service: string, index: number) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">{service}</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active service</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Access Permissions</h3>
              <div className="space-y-4">
                {permissions.map((permission, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{permission.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{permission.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={permission.granted}
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Analytics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Monthly Appointments</h4>
                  <div className="h-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-2 flex items-end space-x-1">
                    {[65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76].map((height, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm flex-1"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Revenue Trend</h4>
                  <div className="h-32 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-2 flex items-end space-x-1">
                    {[45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86].map((height, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-t from-green-500 to-emerald-500 rounded-sm flex-1"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;