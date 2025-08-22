import React from 'react';
import { 
  Users, UserCheck, Clock, AlertTriangle, 
  TrendingUp, Star, Calendar, DollarSign,
  Activity, Award, Shield, Globe
} from 'lucide-react';

const ProfessionalsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Professionals',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue',
      description: 'Active healthcare professionals',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Verified Professionals',
      value: '2,824',
      change: '+8%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'green',
      description: 'Fully verified and active',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Pending Approvals',
      value: '23',
      change: '-15%',
      changeType: 'positive',
      icon: Clock,
      color: 'yellow',
      description: 'Awaiting verification',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Suspended Accounts',
      value: '12',
      change: '-25%',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red',
      description: 'Temporarily suspended',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive',
      icon: Star,
      color: 'purple',
      description: 'Overall professional rating',
      trend: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.8, 4.8]
    },
    {
      title: 'Monthly Revenue',
      value: '$94,250',
      change: '+18%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'emerald',
      description: 'Professional fees collected',
      trend: [65, 78, 82, 86, 89, 87, 95, 93, 88, 91, 94, 96]
    }
  ];

  const specialtyStats = [
    { name: 'General Medicine', count: 847, percentage: 30, color: 'blue' },
    { name: 'Dentistry', count: 623, percentage: 22, color: 'green' },
    { name: 'Psychology', count: 456, percentage: 16, color: 'purple' },
    { name: 'Dermatology', count: 334, percentage: 12, color: 'yellow' },
    { name: 'Cardiology', count: 287, percentage: 10, color: 'red' },
    { name: 'Others', count: 300, percentage: 10, color: 'gray' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
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

      {/* Specialty Distribution and Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Specialty Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Specialty Distribution</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {specialtyStats.map((specialty, index) => (
              <div key={specialty.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {specialty.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {specialty.count}
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
                      specialty.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${specialty.percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                action: 'New professional registered',
                professional: 'Dr. Sarah Johnson',
                specialty: 'Cardiology',
                time: '2 min ago',
                type: 'success',
                avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Profile verification completed',
                professional: 'Dr. Michael Chen',
                specialty: 'Dermatology',
                time: '15 min ago',
                type: 'info',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Service added',
                professional: 'Dr. Emma Wilson',
                specialty: 'Psychology',
                time: '1 hour ago',
                type: 'update',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Account suspended',
                professional: 'Dr. James Rodriguez',
                specialty: 'General Medicine',
                time: '2 hours ago',
                type: 'warning',
                avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                <div className="relative">
                  <img
                    src={activity.avatar}
                    alt={activity.professional}
                    className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-400 transition-all duration-300"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    activity.type === 'info' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.professional} • {activity.specialty}
                  </p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsStats;