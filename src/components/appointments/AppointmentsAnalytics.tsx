import React, { useState } from 'react';
import { 
  TrendingUp, Calendar, Users, DollarSign, 
  Clock, Star, Activity, BarChart3,
  PieChart, LineChart, Download, Filter,
  ArrowUp, ArrowDown, Eye, RefreshCw, CheckCircle, AlertTriangle
} from 'lucide-react';

const AppointmentsAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('appointments');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'appointments', label: 'Appointments', icon: Calendar },
    { value: 'revenue', label: 'Revenue', icon: DollarSign },
    { value: 'ratings', label: 'Ratings', icon: Star },
    { value: 'professionals', label: 'Professionals', icon: Users }
  ];

  const analyticsData = {
    totalAppointments: 15492,
    completionRate: 94.2,
    averageRating: 4.8,
    totalRevenue: 284750,
    growthRate: 18.5,
    cancelationRate: 5.8
  };

  const appointmentsByStatus = [
    { status: 'Completed', count: 14589, percentage: 94.2, color: 'green' },
    { status: 'Cancelled', count: 903, percentage: 5.8, color: 'red' },
    { status: 'No Show', count: 0, percentage: 0, color: 'orange' }
  ];

  const appointmentsBySpecialty = [
    { specialty: 'General Medicine', count: 4647, percentage: 30, color: 'blue' },
    { specialty: 'Dentistry', count: 3408, percentage: 22, color: 'green' },
    { specialty: 'Cardiology', count: 2479, percentage: 16, color: 'purple' },
    { specialty: 'Dermatology', count: 1859, percentage: 12, color: 'yellow' },
    { specialty: 'Psychology', count: 1549, percentage: 10, color: 'pink' },
    { specialty: 'Others', count: 1550, percentage: 10, color: 'gray' }
  ];

  const revenueByMonth = [
    { month: 'Jan', revenue: 18500, appointments: 1247 },
    { month: 'Feb', revenue: 22300, appointments: 1456 },
    { month: 'Mar', revenue: 19800, appointments: 1334 },
    { month: 'Apr', revenue: 25600, appointments: 1678 },
    { month: 'May', revenue: 28900, appointments: 1823 },
    { month: 'Jun', revenue: 24700, appointments: 1567 },
    { month: 'Jul', revenue: 31200, appointments: 1945 },
    { month: 'Aug', revenue: 29800, appointments: 1876 },
    { month: 'Sep', revenue: 26400, appointments: 1689 },
    { month: 'Oct', revenue: 33100, revenue: 2134 },
    { month: 'Nov', revenue: 35600, appointments: 2267 },
    { month: 'Dec', revenue: 38200, appointments: 2456 }
  ];

  const topProfessionals = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      appointments: 1247,
      revenue: '$24,580',
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      appointments: 1189,
      revenue: '$23,780',
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. Emma Wilson',
      specialty: 'Psychology',
      appointments: 1156,
      revenue: '$23,120',
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. James Rodriguez',
      specialty: 'General Medicine',
      appointments: 1098,
      revenue: '$21,960',
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Appointments Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into appointment patterns and performance
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
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Appointments', value: analyticsData.totalAppointments.toLocaleString(), change: '+18.5%', icon: Calendar, color: 'blue' },
          { label: 'Completion Rate', value: `${analyticsData.completionRate}%`, change: '+2.1%', icon: CheckCircle, color: 'green' },
          { label: 'Average Rating', value: analyticsData.averageRating.toString(), change: '+0.2', icon: Star, color: 'yellow' },
          { label: 'Total Revenue', value: `$${(analyticsData.totalRevenue / 1000).toFixed(0)}K`, change: '+23.4%', icon: DollarSign, color: 'emerald' },
          { label: 'Growth Rate', value: `${analyticsData.growthRate}%`, change: '+5.2%', icon: TrendingUp, color: 'purple' },
          { label: 'Cancellation Rate', value: `${analyticsData.cancelationRate}%`, change: '-1.3%', icon: AlertTriangle, color: 'red' }
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${
                metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                metric.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                metric.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              } group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-4 h-4" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.change.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                <span>{metric.change}</span>
              </div>
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
        {/* Revenue Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue & Appointments Trend</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-500 animate-pulse" />
              <span className="text-sm text-green-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-green-50 to-transparent dark:from-green-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {revenueByMonth.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-1000 hover:from-blue-600 hover:to-blue-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
                  style={{ 
                    height: `${(data.revenue / 40000) * 100}%`, 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${(data.revenue / 1000).toFixed(0)}K
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Appointments by Status */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Appointments by Status</h3>
          
          <div className="space-y-4">
            {appointmentsByStatus.map((item, index) => (
              <div
                key={item.status}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({item.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      item.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      item.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-orange-500 to-orange-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${item.percentage}%`,
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
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray={`${analyticsData.completionRate}, 100`}
                  className="animate-in slide-in-from-bottom duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {analyticsData.completionRate}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty Distribution and Top Professionals */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Appointments by Specialty */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Appointments by Specialty</h3>
          
          <div className="space-y-4">
            {appointmentsBySpecialty.map((specialty, index) => (
              <div
                key={specialty.specialty}
                className="group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {specialty.specialty}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {specialty.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({specialty.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      specialty.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      specialty.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      specialty.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      specialty.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      specialty.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${specialty.percentage}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Professionals */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Professionals</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topProfessionals.map((professional, index) => (
              <div
                key={professional.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={professional.avatar}
                    alt={professional.name}
                    className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {professional.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {professional.specialty}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {professional.appointments}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {professional.revenue}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {professional.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-bottom delay-1000">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Performance Insights</h3>
          <RefreshCw className="w-5 h-5 animate-spin" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">+18.5%</div>
            <div className="text-sm text-blue-100">Growth Rate</div>
            <div className="text-xs text-blue-200 mt-1">vs last month</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2.1s</div>
            <div className="text-sm text-blue-100">Avg Response</div>
            <div className="text-xs text-blue-200 mt-1">booking time</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">94.2%</div>
            <div className="text-sm text-blue-100">Satisfaction</div>
            <div className="text-xs text-blue-200 mt-1">patient rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsAnalytics;