import React, { useState } from 'react';
import { 
  BarChart3, Users, Calendar, Star, 
  TrendingUp, Clock, CheckCircle, AlertCircle,
  DollarSign, Activity, ArrowUp, ArrowDown,
  Eye, Filter, Download
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  const timeframes = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  return (
    <section id="home" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real-Time System Overview
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Monitor your entire booking ecosystem with comprehensive analytics, live metrics, and actionable insights
          </p>
          
          {/* Timeframe Selector */}
          <div className="flex justify-center mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg border border-gray-200 dark:border-gray-700">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTimeframe === timeframe.value
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {timeframe.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom delay-100 group border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center space-x-1">
                <ArrowUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-500 font-semibold">+15%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8,249</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Clients</p>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom delay-200 group border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex items-center space-x-1">
                <ArrowUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-500 font-semibold">+22%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,432</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today's Appointments</p>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom delay-300 group border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex items-center space-x-1">
                <ArrowUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-500 font-semibold">+18%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$12,840</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today's Revenue</p>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div className="bg-purple-500 h-1 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom delay-400 group border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex items-center space-x-1">
                <ArrowUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-500 font-semibold">+0.2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4.8</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
            <div className="mt-2 flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Revenue Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-in slide-in-from-left delay-500 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Analytics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Track performance across all channels</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                    <span className="text-sm text-green-500 font-medium">Live</span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Filter className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              
              {/* Enhanced Chart Area */}
              <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent dark:from-blue-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
                  ))}
                </div>
                
                {[65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76, 92, 85, 79, 88].map((height, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-1000 hover:from-purple-600 hover:to-purple-400 flex-1 animate-in slide-in-from-bottom relative group cursor-pointer"
                    style={{ 
                      height: `${height}%`, 
                      animationDelay: `${index * 50}ms` 
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${(height * 100).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projected</span>
                </div>
              </div>
            </div>

            {/* Enhanced Appointment Status */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-in slide-in-from-left delay-700 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointment Status Overview</h3>
                <button className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <Eye className="w-4 h-4" />
                  <span>View All</span>
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer group">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completed</div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">+12% from yesterday</div>
                </div>
                <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors cursor-pointer group">
                  <Clock className="w-10 h-10 text-yellow-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">185</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending</div>
                  <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">-5% from yesterday</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors cursor-pointer group">
                  <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">23</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cancelled</div>
                  <div className="text-xs text-red-600 dark:text-red-400 font-medium">-8% from yesterday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity with Images */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-in slide-in-from-right delay-600 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">Live</span>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'Dr. Sarah Johnson', action: 'completed appointment with Maria Garcia', time: '2 min ago', avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', type: 'success' },
                  { user: 'Michael Chen', action: 'booked premium consultation service', time: '5 min ago', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', type: 'info' },
                  { user: 'Emma Wilson', action: 'left 5-star review for Dr. Rodriguez', time: '12 min ago', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', type: 'success' },
                  { user: 'Alex Rodriguez', action: 'updated professional profile', time: '1 hour ago', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', type: 'info' },
                  { user: 'Lisa Thompson', action: 'cancelled appointment - rescheduled', time: '2 hours ago', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', type: 'warning' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                    <div className="relative">
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-400 transition-all duration-300"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                        activity.type === 'success' ? 'bg-green-500' : 
                        activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {activity.user}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {activity.action}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-in slide-in-from-right delay-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">View Today's Schedule</span>
                  </div>
                  <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                <button className="w-full text-left p-4 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Generate Report</span>
                  </div>
                  <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                <button className="w-full text-left p-4 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Manage Users</span>
                  </div>
                  <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl shadow-lg animate-in slide-in-from-right delay-1000 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">System Health</h3>
                <div className="w-3 h-3 bg-green-200 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Server Uptime</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Response Time</span>
                  <span className="font-semibold">2.1s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Active Sessions</span>
                  <span className="font-semibold">2,847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;