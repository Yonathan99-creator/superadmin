import React from 'react';
import { Calendar, Users, TrendingUp, Clock, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span>System Online - All Services Active</span>
            </div>
            
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  ProBooking
                </span>
                <span className="block text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mt-2">
                  SuperAdmin Dashboard
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Command center for your entire appointment ecosystem. Monitor performance, 
                manage professionals, and drive growth with powerful analytics and real-time insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Access Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2.8K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">28K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Stats Cards */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl animate-pulse"></div>
            
            <div className="relative grid grid-cols-2 gap-6 animate-in slide-in-from-right duration-1000 delay-300">
              {/* Main Dashboard Preview */}
              <div className="col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Analytics</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Real-time insights</p>
                    </div>
                  </div>
                  <span className="text-green-500 text-sm font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+18%</span>
                </div>
                
                {/* Mini Chart */}
                <div className="h-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-2 flex items-end space-x-1">
                  {[40, 65, 45, 80, 60, 95, 70, 85, 75, 90, 85, 95].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm flex-1 transition-all duration-1000 hover:from-purple-500 hover:to-blue-500"
                      style={{ 
                        height: `${height}%`, 
                        animationDelay: `${index * 100}ms` 
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Active Professionals */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+12%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2,847</h3>
                  <p className="text-gray-600 dark:text-gray-400">Active Professionals</p>
                </div>
                <div className="mt-3 flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
                    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
                    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Professional ${index + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                    +99
                  </div>
                </div>
              </div>

              {/* Monthly Revenue */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+23%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$94,250</h3>
                  <p className="text-gray-600 dark:text-gray-400">Monthly Revenue</p>
                </div>
                <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">-15%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2.1s</h3>
                  <p className="text-gray-600 dark:text-gray-400">Avg Response Time</p>
                </div>
                <div className="mt-3 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Excellent</span>
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+8%</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,432</h3>
                  <p className="text-gray-600 dark:text-gray-400">Today's Appointments</p>
                </div>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-green-600 dark:text-green-400">1,247 completed</span> • <span className="text-yellow-600 dark:text-yellow-400">185 pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;