import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, 
  Download, Filter, RefreshCw, Activity,
  FileText, Users, Star, Clock, Award,
  ArrowUp, ArrowDown, Eye, Calendar, Zap
} from 'lucide-react';

const ReportsAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('generation');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'generation', label: 'Generation', icon: FileText },
    { value: 'downloads', label: 'Downloads', icon: Download },
    { value: 'performance', label: 'Performance', icon: Zap },
    { value: 'usage', label: 'Usage', icon: Users }
  ];

  const analyticsData = {
    totalReports: 15492,
    totalDownloads: 45678,
    averageGenTime: 2.3,
    successRate: 99.2,
    popularFormat: 'PDF',
    peakHour: '9:00 AM'
  };

  const reportsByType = [
    { type: 'Financial Reports', count: 4647, percentage: 30, color: 'emerald' },
    { type: 'User Analytics', count: 3408, percentage: 22, color: 'blue' },
    { type: 'Performance Reports', count: 2479, percentage: 16, color: 'purple' },
    { type: 'Compliance Reports', count: 1859, percentage: 12, color: 'red' },
    { type: 'Professional Reports', count: 1549, percentage: 10, color: 'yellow' },
    { type: 'Custom Reports', count: 1550, percentage: 10, color: 'gray' }
  ];

  const monthlyData = [
    { month: 'Jan', reports: 1247, downloads: 3456, avgTime: 2.1 },
    { month: 'Feb', reports: 1456, downloads: 4123, avgTime: 2.0 },
    { month: 'Mar', reports: 1334, downloads: 3789, avgTime: 2.2 },
    { month: 'Apr', reports: 1678, downloads: 4567, avgTime: 2.1 },
    { month: 'May', reports: 1823, downloads: 5234, avgTime: 1.9 },
    { month: 'Jun', reports: 1567, downloads: 4456, avgTime: 2.0 },
    { month: 'Jul', reports: 1945, downloads: 5678, avgTime: 1.8 },
    { month: 'Aug', reports: 1876, downloads: 5234, avgTime: 1.9 },
    { month: 'Sep', reports: 1689, downloads: 4789, avgTime: 2.1 },
    { month: 'Oct', reports: 2134, downloads: 6123, avgTime: 1.7 },
    { month: 'Nov', reports: 2267, downloads: 6456, avgTime: 1.8 },
    { month: 'Dec', reports: 2456, downloads: 7123, avgTime: 1.6 }
  ];

  const topReports = [
    {
      name: 'Monthly Financial Summary',
      downloads: 1247,
      avgRating: 4.9,
      lastGenerated: '2 hours ago',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'User Engagement Analytics',
      downloads: 1189,
      avgRating: 4.8,
      lastGenerated: '4 hours ago',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'System Performance Report',
      downloads: 1156,
      avgRating: 4.7,
      lastGenerated: '6 hours ago',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Professional Activity Report',
      downloads: 1098,
      avgRating: 4.8,
      lastGenerated: '8 hours ago',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Reports Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into report generation and usage patterns
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Timeframe Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTimeframe === timeframe.value
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {timeframe.label}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Reports', value: analyticsData.totalReports.toLocaleString(), change: '+15%', icon: FileText, color: 'indigo' },
          { label: 'Total Downloads', value: analyticsData.totalDownloads.toLocaleString(), change: '+22%', icon: Download, color: 'green' },
          { label: 'Avg Gen Time', value: `${analyticsData.averageGenTime}s`, change: '-12%', icon: Zap, color: 'yellow' },
          { label: 'Success Rate', value: `${analyticsData.successRate}%`, change: '+0.5%', icon: Award, color: 'emerald' },
          { label: 'Popular Format', value: analyticsData.popularFormat, change: 'PDF', icon: Star, color: 'purple' },
          { label: 'Peak Hour', value: analyticsData.peakHour, change: 'Morning', icon: Clock, color: 'blue' }
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${
                metric.color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' :
                metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                metric.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                metric.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
              } group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-4 h-4" />
              </div>
              {metric.change.includes('%') && (
                <div className={`flex items-center space-x-1 text-xs font-medium ${
                  metric.change.startsWith('+') || metric.change.startsWith('-') && metric.color === 'yellow' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {(metric.change.startsWith('+') || (metric.change.startsWith('-') && metric.color === 'yellow')) ? 
                    <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  <span>{metric.change}</span>
                </div>
              )}
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Generation Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Report Generation Trend</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span className="text-sm text-indigo-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-indigo-50 to-transparent dark:from-indigo-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t transition-all duration-1000 hover:from-purple-600 hover:to-purple-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
                  style={{ 
                    height: `${(data.reports / 2500) * 100}%`, 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.reports}
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Report Types Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Reports by Type</h3>
          
          <div className="space-y-4">
            {reportsByType.map((type, index) => (
              <div
                key={type.type}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {type.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {type.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({type.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      type.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      type.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      type.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      type.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      type.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${type.percentage}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut Chart Representation */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                  className="dark:stroke-gray-600"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeDasharray={`${analyticsData.successRate}, 100`}
                  className="animate-in slide-in-from-bottom duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {analyticsData.successRate}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Reports and Performance Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Downloaded Reports */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Most Downloaded Reports</h3>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topReports.map((report, index) => (
              <div
                key={report.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={report.image}
                    alt={report.name}
                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-indigo-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {report.name}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {report.downloads.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {report.avgRating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {report.lastGenerated}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Performance Insights</h3>
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">15.5K</div>
              <div className="text-sm text-indigo-100">Reports Generated</div>
              <div className="text-xs text-indigo-200 mt-1">this month</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">2.3s</div>
              <div className="text-sm text-indigo-100">Avg Generation</div>
              <div className="text-xs text-indigo-200 mt-1">-12% faster</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">99.2%</div>
              <div className="text-sm text-indigo-100">Success Rate</div>
              <div className="text-xs text-indigo-200 mt-1">+0.5% improvement</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">847</div>
              <div className="text-sm text-indigo-100">Active Users</div>
              <div className="text-xs text-indigo-200 mt-1">generating reports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;