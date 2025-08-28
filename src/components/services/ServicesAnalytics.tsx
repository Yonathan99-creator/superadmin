import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, 
  Download, Filter, RefreshCw, Activity,
  DollarSign, Users, Star, Clock, Award,
  ArrowUp, ArrowDown, Eye, Calendar
} from 'lucide-react';

const ServicesAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('bookings');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'bookings', label: 'Bookings', icon: Calendar },
    { value: 'revenue', label: 'Revenue', icon: DollarSign },
    { value: 'ratings', label: 'Ratings', icon: Star },
    { value: 'providers', label: 'Providers', icon: Users }
  ];

  const analyticsData = {
    totalBookings: 15492,
    totalRevenue: 284750,
    averageRating: 4.8,
    activeProviders: 2847,
    growthRate: 18.5,
    completionRate: 94.2
  };

  const topServices = [
    {
      name: 'General Medical Consultation',
      bookings: 4647,
      revenue: '$139,410',
      growth: '+12%',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Cardiac Screening & ECG',
      bookings: 3408,
      revenue: '$102,240',
      growth: '+18%',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Mental Health Counseling',
      bookings: 2479,
      revenue: '$74,370',
      growth: '+25%',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dental Cleaning & Checkup',
      bookings: 1859,
      revenue: '$55,770',
      growth: '+8%',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  const categoryPerformance = [
    { category: 'Medical Consultation', bookings: 4647, revenue: 139410, growth: 12 },
    { category: 'Diagnostic Services', bookings: 3408, revenue: 102240, growth: 18 },
    { category: 'Therapy Sessions', bookings: 2479, revenue: 74370, growth: 25 },
    { category: 'Dental Care', bookings: 1859, revenue: 55770, growth: 8 },
    { category: 'Vision Care', bookings: 1549, revenue: 46470, growth: 22 },
    { category: 'Emergency Care', bookings: 1550, revenue: 46500, growth: 15 }
  ];

  const monthlyData = [
    { month: 'Jan', bookings: 1247, revenue: 18500 },
    { month: 'Feb', bookings: 1456, revenue: 22300 },
    { month: 'Mar', bookings: 1334, revenue: 19800 },
    { month: 'Apr', bookings: 1678, revenue: 25600 },
    { month: 'May', bookings: 1823, revenue: 28900 },
    { month: 'Jun', bookings: 1567, revenue: 24700 },
    { month: 'Jul', bookings: 1945, revenue: 31200 },
    { month: 'Aug', bookings: 1876, revenue: 29800 },
    { month: 'Sep', bookings: 1689, revenue: 26400 },
    { month: 'Oct', bookings: 2134, revenue: 33100 },
    { month: 'Nov', bookings: 2267, revenue: 35600 },
    { month: 'Dec', bookings: 2456, revenue: 38200 }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Services Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into service performance and trends
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
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Bookings', value: analyticsData.totalBookings.toLocaleString(), change: '+18.5%', icon: Calendar, color: 'blue' },
          { label: 'Total Revenue', value: `$${(analyticsData.totalRevenue / 1000).toFixed(0)}K`, change: '+23.4%', icon: DollarSign, color: 'green' },
          { label: 'Average Rating', value: analyticsData.averageRating.toString(), change: '+0.2', icon: Star, color: 'yellow' },
          { label: 'Active Providers', value: analyticsData.activeProviders.toLocaleString(), change: '+12%', icon: Users, color: 'purple' },
          { label: 'Growth Rate', value: `${analyticsData.growthRate}%`, change: '+5.2%', icon: TrendingUp, color: 'emerald' },
          { label: 'Completion Rate', value: `${analyticsData.completionRate}%`, change: '+2.1%', icon: Award, color: 'orange' }
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
                metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                metric.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
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
        {/* Revenue & Bookings Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue & Bookings Trend</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-purple-500 animate-pulse" />
              <span className="text-sm text-purple-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t transition-all duration-1000 hover:from-pink-600 hover:to-pink-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
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

        {/* Category Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Category Performance</h3>
          
          <div className="space-y-4">
            {categoryPerformance.map((category, index) => (
              <div
                key={category.category}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {category.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {category.bookings.toLocaleString()}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      category.growth > 15 ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                      category.growth > 10 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}>
                      +{category.growth}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-105 group-hover:shadow-lg"
                    style={{ 
                      width: `${(category.bookings / 5000) * 100}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Services and Performance Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Performing Services */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Performing Services</h3>
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topServices.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-purple-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {service.name}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {service.bookings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {service.revenue}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {service.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Performance Insights</h3>
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">+18.5%</div>
              <div className="text-sm text-purple-100">Overall Growth</div>
              <div className="text-xs text-purple-200 mt-1">vs last month</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">1.8s</div>
              <div className="text-sm text-purple-100">Avg Response</div>
              <div className="text-xs text-purple-200 mt-1">booking time</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">94.2%</div>
              <div className="text-sm text-purple-100">Satisfaction</div>
              <div className="text-xs text-purple-200 mt-1">service rating</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">15</div>
              <div className="text-sm text-purple-100">Categories</div>
              <div className="text-xs text-purple-200 mt-1">active services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAnalytics;