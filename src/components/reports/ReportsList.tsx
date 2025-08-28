import React, { useState } from 'react';
import { 
  Eye, Download, MoreHorizontal, Calendar, 
  FileText, Users, Clock, CheckCircle,
  AlertTriangle, X, TrendingUp, Award, 
  Shield, Zap, Star, BarChart3
} from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: string;
  description: string;
  generatedBy: string;
  generatedDate: string;
  status: 'completed' | 'processing' | 'failed' | 'scheduled';
  size: string;
  downloads: number;
  format: 'PDF' | 'Excel' | 'CSV' | 'JSON';
  image: string;
  dataRange: string;
  category: string;
}

interface ReportsListProps {
  onSelectReport: (report: Report) => void;
}

const ReportsList: React.FC<ReportsListProps> = ({ onSelectReport }) => {
  const [selectedReports, setSelectedReports] = useState<string[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const reports: Report[] = [
    {
      id: '1',
      name: 'Monthly Financial Report',
      type: 'financial',
      description: 'Comprehensive financial analysis including revenue, expenses, and profit margins',
      generatedBy: 'System Scheduler',
      generatedDate: '2024-01-25',
      status: 'completed',
      size: '2.4 MB',
      downloads: 247,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Jan 1-31, 2024',
      category: 'Finance'
    },
    {
      id: '2',
      name: 'User Engagement Analytics',
      type: 'analytics',
      description: 'Detailed user behavior analysis, engagement metrics, and usage patterns',
      generatedBy: 'Dr. Sarah Johnson',
      generatedDate: '2024-01-24',
      status: 'completed',
      size: '1.8 MB',
      downloads: 156,
      format: 'Excel',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Last 30 days',
      category: 'Analytics'
    },
    {
      id: '3',
      name: 'System Performance Report',
      type: 'performance',
      description: 'Server performance metrics, response times, and system health indicators',
      generatedBy: 'Admin User',
      generatedDate: '2024-01-24',
      status: 'processing',
      size: 'Processing...',
      downloads: 0,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Real-time',
      category: 'System'
    },
    {
      id: '4',
      name: 'Compliance Audit Report',
      type: 'compliance',
      description: 'Security compliance audit, data protection measures, and regulatory adherence',
      generatedBy: 'Security Team',
      generatedDate: '2024-01-23',
      status: 'completed',
      size: '3.2 MB',
      downloads: 89,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Q4 2023',
      category: 'Compliance'
    },
    {
      id: '5',
      name: 'Professional Activity Summary',
      type: 'professional',
      description: 'Healthcare professional activity, appointment statistics, and performance metrics',
      generatedBy: 'HR Department',
      generatedDate: '2024-01-22',
      status: 'failed',
      size: 'Failed',
      downloads: 0,
      format: 'Excel',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Last 7 days',
      category: 'HR'
    },
    {
      id: '6',
      name: 'Customer Satisfaction Report',
      type: 'satisfaction',
      description: 'Customer feedback analysis, satisfaction scores, and improvement recommendations',
      generatedBy: 'Quality Team',
      generatedDate: '2024-01-21',
      status: 'scheduled',
      size: 'Scheduled',
      downloads: 0,
      format: 'PDF',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      dataRange: 'Monthly',
      category: 'Quality'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'failed':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'scheduled':
        return <Calendar className="w-4 h-4 text-purple-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      completed: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      processing: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      failed: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      scheduled: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getFormatColor = (format: string) => {
    const colors = {
      PDF: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      Excel: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      CSV: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      JSON: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    };
    return colors[format as keyof typeof colors] || colors.PDF;
  };

  const handleSelectReport = (reportId: string) => {
    setSelectedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };

  const typeFilters = [
    { value: 'all', label: 'All Reports', count: reports.length },
    { value: 'financial', label: 'Financial', count: reports.filter(r => r.type === 'financial').length },
    { value: 'analytics', label: 'Analytics', count: reports.filter(r => r.type === 'analytics').length },
    { value: 'performance', label: 'Performance', count: reports.filter(r => r.type === 'performance').length },
    { value: 'compliance', label: 'Compliance', count: reports.filter(r => r.type === 'compliance').length },
    { value: 'professional', label: 'Professional', count: reports.filter(r => r.type === 'professional').length }
  ];

  const filteredReports = filterType === 'all' 
    ? reports 
    : reports.filter(report => report.type === filterType);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-400">
      {/* Type Filter Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((filter, index) => (
            <button
              key={filter.value}
              onClick={() => setFilterType(filter.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom ${
                filterType === filter.value
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-medium">{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                filterType === filter.value
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Reports Library ({filteredReports.length} reports)
          </h3>
          <div className="flex items-center space-x-3">
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

      {/* Reports Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report, index) => (
            <div
              key={report.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Report Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={report.image}
                  alt={report.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status and Format badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(report.status)}`}>
                    {getStatusIcon(report.status)}
                    <span className="ml-1">{report.status.charAt(0).toUpperCase() + report.status.slice(1)}</span>
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getFormatColor(report.format)}`}>
                    {report.format}
                  </span>
                </div>
                
                {/* Downloads indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    <Download className="w-3 h-3" />
                    <span>{report.downloads}</span>
                  </div>
                </div>
                
                {/* Report name overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{report.name}</h3>
                  <p className="text-sm text-gray-200">{report.category}</p>
                </div>
              </div>

              {/* Report Details */}
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {report.description}
                </p>

                {/* Report Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{report.dataRange}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{report.generatedBy}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{report.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{report.generatedDate}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => onSelectReport(report)}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  {report.status === 'completed' && (
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Table Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Reports List
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredReports.length} reports
                </span>
                {selectedReports.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {selectedReports.length} selected
                    </span>
                    <button className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors">
                      Bulk Actions
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedReports(filteredReports.map(r => r.id));
                        } else {
                          setSelectedReports([]);
                        }
                      }}
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Report
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Generated By
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Downloads
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredReports.map((report, index) => (
                  <tr 
                    key={report.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 animate-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
                        checked={selectedReports.includes(report.id)}
                        onChange={() => handleSelectReport(report.id)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={report.image}
                            alt={report.name}
                            className="w-12 h-12 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600"
                          />
                          <div className="absolute -bottom-1 -right-1">
                            {getStatusIcon(report.status)}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {report.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {report.dataRange}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 capitalize">
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(report.status)}
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(report.status)}`}>
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 dark:text-white">
                        {report.generatedBy}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 dark:text-white">
                        {report.generatedDate}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          {report.downloads}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => onSelectReport(report)}
                          className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {report.status === 'completed' && (
                          <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing 1 to {filteredReports.length} of {filteredReports.length} reports
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg">
                  1
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  2
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsList;