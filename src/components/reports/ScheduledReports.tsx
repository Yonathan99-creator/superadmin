import React, { useState } from 'react';
import { 
  Calendar, Clock, Play, Pause, Edit, 
  Trash2, Plus, CheckCircle, AlertTriangle,
  Users, FileText, BarChart3, Settings,
  Eye, Download, RefreshCw, Zap
} from 'lucide-react';

interface ScheduledReport {
  id: string;
  name: string;
  type: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  nextRun: string;
  lastRun: string;
  status: 'active' | 'paused' | 'error';
  recipients: string[];
  format: string;
  description: string;
  image: string;
  createdBy: string;
  totalRuns: number;
  successRate: number;
}

const ScheduledReports: React.FC = () => {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduledReport | null>(null);

  const scheduledReports: ScheduledReport[] = [
    {
      id: '1',
      name: 'Daily Financial Summary',
      type: 'financial',
      frequency: 'daily',
      nextRun: '2024-01-26 08:00 AM',
      lastRun: '2024-01-25 08:00 AM',
      status: 'active',
      recipients: ['admin@probooking.com', 'finance@probooking.com'],
      format: 'PDF',
      description: 'Daily revenue and transaction summary for management review',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdBy: 'Finance Team',
      totalRuns: 365,
      successRate: 99.2
    },
    {
      id: '2',
      name: 'Weekly User Analytics',
      type: 'analytics',
      frequency: 'weekly',
      nextRun: '2024-01-29 09:00 AM',
      lastRun: '2024-01-22 09:00 AM',
      status: 'active',
      recipients: ['analytics@probooking.com', 'product@probooking.com'],
      format: 'Excel',
      description: 'Weekly user engagement and behavior analysis report',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdBy: 'Analytics Team',
      totalRuns: 52,
      successRate: 98.1
    },
    {
      id: '3',
      name: 'Monthly Performance Report',
      type: 'performance',
      frequency: 'monthly',
      nextRun: '2024-02-01 10:00 AM',
      lastRun: '2024-01-01 10:00 AM',
      status: 'active',
      recipients: ['tech@probooking.com', 'admin@probooking.com'],
      format: 'PDF',
      description: 'Comprehensive system performance and health metrics',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdBy: 'Tech Team',
      totalRuns: 12,
      successRate: 100
    },
    {
      id: '4',
      name: 'Quarterly Compliance Audit',
      type: 'compliance',
      frequency: 'quarterly',
      nextRun: '2024-04-01 11:00 AM',
      lastRun: '2024-01-01 11:00 AM',
      status: 'paused',
      recipients: ['legal@probooking.com', 'compliance@probooking.com'],
      format: 'PDF',
      description: 'Quarterly security and compliance audit report',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdBy: 'Legal Team',
      totalRuns: 4,
      successRate: 100
    },
    {
      id: '5',
      name: 'Weekly Professional Summary',
      type: 'professional',
      frequency: 'weekly',
      nextRun: '2024-01-28 07:00 AM',
      lastRun: '2024-01-21 07:00 AM',
      status: 'error',
      recipients: ['hr@probooking.com'],
      format: 'Excel',
      description: 'Professional activity and performance summary',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      createdBy: 'HR Team',
      totalRuns: 48,
      successRate: 95.8
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'paused':
        return <Pause className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      paused: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getFrequencyColor = (frequency: string) => {
    const colors = {
      daily: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      weekly: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      monthly: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      quarterly: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
    };
    return colors[frequency as keyof typeof colors] || colors.monthly;
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Scheduled Reports Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{scheduledReports.length}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Total Scheduled</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Automated reports</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {scheduledReports.filter(r => r.status === 'active').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Active</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Currently running</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <Pause className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {scheduledReports.filter(r => r.status === 'paused').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Paused</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Temporarily disabled</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {scheduledReports.filter(r => r.status === 'error').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Errors</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Need attention</p>
        </div>
      </div>

      {/* Scheduled Reports List */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Scheduled Reports</h3>
            <button
              onClick={() => setShowAddSchedule(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Add Schedule</span>
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {scheduledReports.map((report, index) => (
            <div
              key={report.id}
              className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 animate-in slide-in-from-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={report.image}
                    alt={report.name}
                    className="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-200 dark:ring-gray-600"
                  />
                  <div className="absolute -bottom-1 -right-1">
                    {getStatusIcon(report.status)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {report.name}
                    </h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(report.status)}`}>
                      {getStatusIcon(report.status)}
                      <span className="ml-1">{report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(report.frequency)}`}>
                      {report.frequency.charAt(0).toUpperCase() + report.frequency.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {report.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Next Run</p>
                        <p className="text-gray-600 dark:text-gray-400">{report.nextRun}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Recipients</p>
                        <p className="text-gray-600 dark:text-gray-400">{report.recipients.length} users</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Success Rate</p>
                        <p className="text-gray-600 dark:text-gray-400">{report.successRate}%</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RefreshCw className="w-4 h-4 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Total Runs</p>
                        <p className="text-gray-600 dark:text-gray-400">{report.totalRuns}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedSchedule(report)}
                    className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Schedule Modal */}
      {showAddSchedule && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Schedule New Report</h3>
                <button
                  onClick={() => setShowAddSchedule(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Report Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                      placeholder="Enter report name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Report Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700">
                      <option>Financial</option>
                      <option>Analytics</option>
                      <option>Performance</option>
                      <option>Compliance</option>
                      <option>Professional</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    placeholder="Enter report description"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Frequency
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Format
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                      <option>JSON</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Recipients (comma-separated emails)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    placeholder="admin@probooking.com, finance@probooking.com"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddSchedule(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Schedule Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Details Modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedSchedule.name}</h3>
                <button
                  onClick={() => setSelectedSchedule(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Schedule Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Type:</span> {selectedSchedule.type}</p>
                    <p><span className="font-medium">Frequency:</span> {selectedSchedule.frequency}</p>
                    <p><span className="font-medium">Next Run:</span> {selectedSchedule.nextRun}</p>
                    <p><span className="font-medium">Last Run:</span> {selectedSchedule.lastRun}</p>
                    <p><span className="font-medium">Format:</span> {selectedSchedule.format}</p>
                    <p><span className="font-medium">Created By:</span> {selectedSchedule.createdBy}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Total Runs:</span> {selectedSchedule.totalRuns}</p>
                    <p><span className="font-medium">Success Rate:</span> {selectedSchedule.successRate}%</p>
                    <p><span className="font-medium">Recipients:</span> {selectedSchedule.recipients.length}</p>
                    <div className="mt-3">
                      <p className="font-medium mb-2">Recipients:</p>
                      <div className="space-y-1">
                        {selectedSchedule.recipients.map((email, idx) => (
                          <div key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {email}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Run Now
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Edit Schedule
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Delete Schedule
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

export default ScheduledReports;