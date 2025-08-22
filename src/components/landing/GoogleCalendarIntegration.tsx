import React, { useState } from 'react';
import { Calendar, FolderSync as Sync, CheckCircle, AlertCircle, Clock, Users, Settings, Activity, Zap, Globe } from 'lucide-react';

const GoogleCalendarIntegration: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
    }, 2000);
  };

  const integrationStats = [
    { label: 'Events Synced Today', value: '1,247', change: '+12%', color: 'blue' },
    { label: 'Successful Syncs', value: '1,245', change: '+8%', color: 'green' },
    { label: 'Sync Errors', value: '2', change: '-50%', color: 'red' },
    { label: 'Response Time', value: '0.8s', change: '-15%', color: 'purple' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full mb-6 animate-pulse">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Google Calendar Integration</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Seamless Calendar Synchronization
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Keep all appointments synchronized across Google Calendar and ProBooking in real-time with advanced conflict resolution
          </p>
        </div>

        {/* Integration Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrationStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom border border-gray-200 dark:border-gray-700 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {stat.label}
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                  stat.color === 'red' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                  'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Integration Status & Controls */}
          <div className="space-y-8">
            {/* Enhanced Connection Status */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-left delay-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Integration Status</h3>
                {isConnected ? (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 animate-pulse">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Connected & Active
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Disconnected
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">API Status</span>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Last Sync</span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Sync Speed</span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">Real-time</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Calendars Connected</span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">847</span>
                </div>
              </div>
            </div>

            {/* Enhanced Sync Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-left delay-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Sync Management</h3>
              
              <div className="space-y-4">
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                  <Sync className={`w-5 h-5 ${syncing ? 'animate-spin' : 'group-hover:rotate-180'} transition-transform duration-500`} />
                  <span>{syncing ? 'Syncing All Calendars...' : 'Force Full Sync'}</span>
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105 group">
                    <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105 group">
                    <Clock className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>History</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Calendar Preview & Activity */}
          <div className="space-y-8">
            {/* Today's Sync Summary with Visual Elements */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-right delay-400">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Live Sync Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-xl hover:scale-105 transition-transform duration-300 group">
                  <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Events Synced</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 rounded-xl hover:scale-105 transition-transform duration-300 group">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.8%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>

              {/* Enhanced Recent Sync Activities */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Activity className="w-4 h-4 mr-2" />
                  Recent Sync Activities
                </h4>
                {[
                  { time: '14:30', action: 'New appointment synced', professional: 'Dr. Sarah Johnson', type: 'success', avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
                  { time: '14:28', action: 'Appointment updated', professional: 'Dr. Michael Chen', type: 'update', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
                  { time: '14:25', action: 'Cancellation synced', professional: 'Dr. Emma Wilson', type: 'warning', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
                  { time: '14:20', action: 'New appointment synced', professional: 'Dr. Alex Rodriguez', type: 'success', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group">
                    <img
                      src={activity.avatar}
                      alt={activity.professional}
                      className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800 group-hover:scale-110 transition-transform duration-200"
                    />
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500 animate-pulse' :
                      activity.type === 'warning' ? 'bg-yellow-500 animate-pulse' :
                      'bg-blue-500 animate-pulse'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.professional}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Integration Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-600">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Integration Benefits</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Real-time bidirectional sync</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Automatic conflict resolution</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Multi-calendar support</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Smart notification system</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendarIntegration;