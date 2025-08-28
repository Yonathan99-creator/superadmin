import React from 'react';
import { 
  Calendar, CheckCircle, Clock, X, 
  TrendingUp, Users, DollarSign, Star,
  Activity, AlertTriangle, RefreshCw, Zap
} from 'lucide-react';

const AppointmentsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Appointments',
      value: '15,492',
      change: '+8%',
      changeType: 'positive',
      icon: Calendar,
      color: 'blue',
      description: 'This month',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Completed Today',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green',
      description: 'Successfully completed',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Pending',
      value: '185',
      change: '-5%',
      changeType: 'positive',
      icon: Clock,
      color: 'yellow',
      description: 'Awaiting confirmation',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Cancelled',
      value: '23',
      change: '-15%',
      changeType: 'positive',
      icon: X,
      color: 'red',
      description: 'Cancelled today',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Revenue Today',
      value: '$12,840',
      change: '+18%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'emerald',
      description: 'From appointments',
      trend: [55, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 96]
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.1',
      changeType: 'positive',
      icon: Star,
      color: 'purple',
      description: 'Service satisfaction',
      trend: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.8, 4.8]
    }
  ];

  const realtimeStats = [
    { label: 'Active Sessions', value: '847', icon: Activity, color: 'blue' },
    { label: 'Queue Length', value: '12', icon: Clock, color: 'yellow' },
    { label: 'Response Time', value: '1.2s', icon: Zap, color: 'green' },
    { label: 'System Load', value: '68%', icon: TrendingUp, color: 'purple' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
                    stat.color === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    stat.color === 'purple' ? 'bg-gradient-to-t from-purple-500 to-purple-400' :
                    stat.color === 'yellow' ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    stat.color === 'red' ? 'bg-gradient-to-t from-red-500 to-red-400' :
                    'bg-gradient-to-t from-emerald-500 to-emerald-400'
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

      {/* Real-time Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white mb-8 animate-in slide-in-from-bottom delay-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Real-time System Status</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {realtimeStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsStats;