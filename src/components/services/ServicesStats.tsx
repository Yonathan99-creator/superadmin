import React from 'react';
import { 
  Settings, CheckCircle, Clock, AlertTriangle, 
  TrendingUp, Star, DollarSign, Users,
  Activity, Award, Shield, Zap
} from 'lucide-react';

const ServicesStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Services',
      value: '1,247',
      change: '+15%',
      changeType: 'positive',
      icon: Settings,
      color: 'purple',
      description: 'Available services',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Active Services',
      value: '1,189',
      change: '+8%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green',
      description: 'Currently bookable',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Pending Approval',
      value: '58',
      change: '-12%',
      changeType: 'positive',
      icon: Clock,
      color: 'yellow',
      description: 'Awaiting review',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Inactive Services',
      value: '23',
      change: '-25%',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red',
      description: 'Temporarily disabled',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.3',
      changeType: 'positive',
      icon: Star,
      color: 'yellow',
      description: 'Service satisfaction',
      trend: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.8, 4.8]
    },
    {
      title: 'Total Revenue',
      value: '$284,750',
      change: '+22%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'emerald',
      description: 'Monthly earnings',
      trend: [65, 78, 82, 86, 89, 87, 95, 93, 88, 91, 94, 96]
    }
  ];

  const categoryStats = [
    { name: 'Medical Consultation', count: 456, percentage: 37, color: 'blue', growth: '+12%' },
    { name: 'Diagnostic Services', count: 234, percentage: 19, color: 'green', growth: '+8%' },
    { name: 'Therapy Sessions', count: 189, percentage: 15, color: 'purple', growth: '+15%' },
    { name: 'Dental Care', count: 167, percentage: 13, color: 'yellow', growth: '+5%' },
    { name: 'Emergency Care', count: 112, percentage: 9, color: 'red', growth: '+18%' },
    { name: 'Others', count: 89, percentage: 7, color: 'gray', growth: '+3%' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
    };
    return colors[color as keyof typeof colors] || colors.purple;
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
                    stat.color === 'purple' ? 'bg-gradient-to-t from-purple-500 to-purple-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
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

      {/* Category Distribution and Performance */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Category Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service Categories</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {categoryStats.map((category, index) => (
              <div key={category.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {category.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {category.count}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {category.growth}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      category.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      category.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      category.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      category.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      category.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${category.percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:scale-105 transition-transform duration-300 group">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">95.2%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl hover:scale-105 transition-transform duration-300 group">
              <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1.8s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Response</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              Recent Service Updates
            </h4>
            {[
              { service: 'Cardiac Screening', action: 'Price updated', time: '5 min ago', type: 'update' },
              { service: 'Mental Health Counseling', action: 'New provider added', time: '12 min ago', type: 'success' },
              { service: 'Dental Cleaning', action: 'Service enhanced', time: '25 min ago', type: 'info' },
              { service: 'Physical Therapy', action: 'Availability increased', time: '1 hour ago', type: 'success' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500 animate-pulse' :
                  activity.type === 'update' ? 'bg-blue-500 animate-pulse' :
                  'bg-purple-500 animate-pulse'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.service}
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

export default ServicesStats;