import React from 'react';
import { 
  FileText, Download, Clock, CheckCircle, 
  TrendingUp, Star, BarChart3, Users,
  Activity, Award, Shield, Zap, Calendar,
  Eye, RefreshCw, AlertTriangle
} from 'lucide-react';

const ReportsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Reports',
      value: '1,247',
      change: '+15%',
      changeType: 'positive',
      icon: FileText,
      color: 'indigo',
      description: 'Generated reports',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Downloaded Today',
      value: '189',
      change: '+22%',
      changeType: 'positive',
      icon: Download,
      color: 'green',
      description: 'Reports downloaded',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Scheduled Reports',
      value: '45',
      change: '+8%',
      changeType: 'positive',
      icon: Clock,
      color: 'blue',
      description: 'Auto-generated',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Processing Time',
      value: '2.3s',
      change: '-12%',
      changeType: 'positive',
      icon: Zap,
      color: 'yellow',
      description: 'Average generation time',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Success Rate',
      value: '99.2%',
      change: '+0.5%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'emerald',
      description: 'Report generation success',
      trend: [95, 96, 97, 98, 98, 99, 99, 99, 99, 99, 99, 99]
    },
    {
      title: 'Data Sources',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: BarChart3,
      color: 'purple',
      description: 'Connected data sources',
      trend: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12]
    }
  ];

  const reportTypes = [
    { name: 'Financial Reports', count: 456, percentage: 37, color: 'emerald', growth: '+12%' },
    { name: 'User Analytics', count: 234, percentage: 19, color: 'blue', growth: '+18%' },
    { name: 'Performance Reports', count: 189, percentage: 15, color: 'purple', growth: '+25%' },
    { name: 'System Health', count: 167, percentage: 13, color: 'yellow', growth: '+8%' },
    { name: 'Compliance Reports', count: 112, percentage: 9, color: 'red', growth: '+15%' },
    { name: 'Custom Reports', count: 89, percentage: 7, color: 'gray', growth: '+22%' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
    };
    return colors[color as keyof typeof colors] || colors.indigo;
  };

  return (
    <div className="mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 p-6 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                {stat.change}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {stat.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </p>
            </div>

            {/* Mini Chart */}
            <div className="h-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-2 flex items-end space-x-1">
              {stat.trend.map((height, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-sm transition-all duration-1000 ${
                    stat.color === 'indigo' ? 'bg-gradient-to-t from-indigo-500 to-indigo-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    stat.color === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                    stat.color === 'yellow' ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    stat.color === 'emerald' ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' :
                    'bg-gradient-to-t from-purple-500 to-purple-400'
                  }`}
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${idx * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Report Types Distribution and Real-time Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Report Types Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Report Types Distribution</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {reportTypes.map((type, index) => (
              <div key={type.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {type.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {type.count}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {type.growth}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      type.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      type.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      type.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      type.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      type.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${type.percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Real-time Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                action: 'Financial report generated',
                user: 'System Scheduler',
                time: '2 min ago',
                type: 'success',
                icon: FileText,
                details: 'Monthly revenue report completed'
              },
              {
                action: 'User analytics exported',
                user: 'Admin User',
                time: '8 min ago',
                type: 'info',
                icon: Download,
                details: 'User engagement data exported'
              },
              {
                action: 'Performance report scheduled',
                user: 'Dr. Sarah Johnson',
                time: '15 min ago',
                type: 'update',
                icon: Calendar,
                details: 'Weekly performance report scheduled'
              },
              {
                action: 'Report generation failed',
                user: 'System',
                time: '1 hour ago',
                type: 'error',
                icon: AlertTriangle,
                details: 'Data source connection timeout'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                  activity.type === 'error' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                  activity.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                  'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.details}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      by {activity.user}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      • {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Performance Insights */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white mb-8 animate-in slide-in-from-bottom delay-900">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">System Performance</h3>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Auto-updating</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2.3s</div>
            <div className="text-sm text-indigo-100">Avg Generation</div>
            <div className="text-xs text-indigo-200 mt-1">-12% faster</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">99.2%</div>
            <div className="text-sm text-indigo-100">Success Rate</div>
            <div className="text-xs text-indigo-200 mt-1">+0.5% improvement</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Activity className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">847</div>
            <div className="text-sm text-indigo-100">Active Sessions</div>
            <div className="text-xs text-indigo-200 mt-1">real-time monitoring</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-indigo-100">Data Security</div>
            <div className="text-xs text-indigo-200 mt-1">encrypted reports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsStats;