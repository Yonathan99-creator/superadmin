import React, { useState } from 'react';
import { 
  X, Star, Download, Calendar, FileText, 
  Edit, Share, CheckCircle, AlertTriangle,
  Activity, TrendingUp, Settings, Eye,
  Award, Shield, Zap, Clock, User, Mail,
  BarChart3, Users, Database, RefreshCw
} from 'lucide-react';

interface ReportDetailsProps {
  report: any;
  onClose: () => void;
}

const ReportDetails: React.FC<ReportDetailsProps> = ({ report, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'data', label: 'Data Sources', icon: Database },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const dataSources = [
    { name: 'Appointments Database', records: '15,492', lastSync: '2 min ago', status: 'connected' },
    { name: 'User Management', records: '28,405', lastSync: '5 min ago', status: 'connected' },
    { name: 'Payment Gateway', records: '45,678', lastSync: '1 min ago', status: 'connected' },
    { name: 'Analytics Engine', records: 'Real-time', lastSync: 'Live', status: 'connected' }
  ];

  const downloadHistory = [
    { user: 'Admin User', date: '2024-01-25 14:30', format: 'PDF', size: '2.4 MB' },
    { user: 'Dr. Sarah Johnson', date: '2024-01-25 10:15', format: 'Excel', size: '1.8 MB' },
    { user: 'Finance Team', date: '2024-01-24 16:45', format: 'PDF', size: '2.4 MB' },
    { user: 'Analytics Team', date: '2024-01-24 09:30', format: 'CSV', size: '0.9 MB' }
  ];

  const reportMetrics = [
    { metric: 'Generation Time', value: '2.3s', trend: '-12%', color: 'green' },
    { metric: 'File Size', value: '2.4 MB', trend: '+5%', color: 'blue' },
    { metric: 'Data Points', value: '15,492', trend: '+8%', color: 'purple' },
    { metric: 'Accuracy Score', value: '99.2%', trend: '+0.3%', color: 'emerald' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={report.image}
                  alt={report.name}
                  className="w-16 h-16 rounded-xl ring-4 ring-white/20 object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <FileText className="w-3 h-3 text-indigo-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{report.name}</h2>
                <p className="text-indigo-100 capitalize">{report.type} Report</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-indigo-200">{report.dataRange}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span className="text-indigo-200">{report.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span className="text-indigo-200">{report.format}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
                <Share className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
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
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
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
              {/* Left Column - Report Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Report Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Report Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Type</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{report.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Format</span>
                      <span className="font-medium text-gray-900 dark:text-white">{report.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Size</span>
                      <span className="font-medium text-gray-900 dark:text-white">{report.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Generated By</span>
                      <span className="font-medium text-gray-900 dark:text-white">{report.generatedBy}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Generated Date</span>
                      <span className="font-medium text-gray-900 dark:text-white">{report.generatedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download Report</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Share className="w-4 h-4" />
                      <span>Share Report</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <RefreshCw className="w-4 h-4" />
                      <span>Regenerate</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {reportMetrics.map((metric, index) => (
                    <div key={metric.metric} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
                      <div className={`text-xs font-medium mt-1 ${
                        metric.trend.startsWith('+') && metric.color !== 'blue' ? 'text-green-600 dark:text-green-400' :
                        metric.trend.startsWith('-') && metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {metric.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Report Description */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {report.description}
                  </p>
                </div>

                {/* Download History */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Downloads</h3>
                  <div className="space-y-3">
                    {downloadHistory.map((download, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <User className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{download.user}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{download.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{download.format}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{download.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Sources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dataSources.map((source, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="font-medium text-gray-900 dark:text-white">{source.name}</span>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        source.status === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                      }`}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Records</p>
                        <p className="font-medium text-gray-900 dark:text-white">{source.records}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Last Sync</p>
                        <p className="font-medium text-gray-900 dark:text-white">{source.lastSync}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Report Analytics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Download Trend</h4>
                  <div className="h-32 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-2 flex items-end space-x-1">
                    {[65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76].map((height, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-t from-indigo-500 to-purple-500 rounded-sm flex-1"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Usage Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Views</span>
                      <span className="font-medium text-gray-900 dark:text-white">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Unique Users</span>
                      <span className="font-medium text-gray-900 dark:text-white">1,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Avg View Time</span>
                      <span className="font-medium text-gray-900 dark:text-white">3m 24s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Report Settings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Report Name
                    </label>
                    <input
                      type="text"
                      value={report.name}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700">
                      <option>Financial</option>
                      <option>Analytics</option>
                      <option>Performance</option>
                      <option>Compliance</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="public"
                      className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="public" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Make report public
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked
                      className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="notifications" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="archive"
                      className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="archive" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Auto-archive after 90 days
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                Archive Report
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;