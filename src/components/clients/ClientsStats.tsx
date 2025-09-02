import React from 'react';
import { 
  UserCheck, Users, TrendingUp, Star, 
  Calendar, DollarSign, Globe, Activity,
  Award, Shield, Zap, Clock, MapPin, Heart
} from 'lucide-react';

const ClientsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Clients',
      value: '28,405',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'cyan',
      description: 'Registered clients',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Active Clients',
      value: '26,847',
      change: '+8%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'green',
      description: 'Active this month',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'New Registrations',
      value: '1,558',
      change: '+25%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'blue',
      description: 'This month',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 56]
    },
    {
      title: 'Client Satisfaction',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive',
      icon: Star,
      color: 'yellow',
      description: 'Average rating',
      trend: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.8, 4.8]
    },
    {
      title: 'Lifetime Value',
      value: '$1,247',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'emerald',
      description: 'Average CLV',
      trend: [55, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 96]
    },
    {
      title: 'Retention Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Heart,
      color: 'pink',
      description: 'Client retention',
      trend: [85, 88, 90, 91, 92, 93, 93, 94, 94, 94, 94, 94]
    }
  ];

  const locationStats = [
    { country: 'United States', clients: 12450, percentage: 44, color: 'blue', flag: '🇺🇸' },
    { country: 'Canada', clients: 5680, percentage: 20, color: 'red', flag: '🇨🇦' },
    { country: 'United Kingdom', clients: 3420, percentage: 12, color: 'purple', flag: '🇬🇧' },
    { country: 'Australia', clients: 2840, percentage: 10, color: 'green', flag: '🇦🇺' },
    { country: 'Germany', clients: 2130, percentage: 8, color: 'yellow', flag: '🇩🇪' },
    { country: 'Others', clients: 1885, percentage: 6, color: 'gray', flag: '🌍' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
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
                    stat.color === 'cyan' ? 'bg-gradient-to-t from-cyan-500 to-cyan-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    stat.color === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                    stat.color === 'yellow' ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    stat.color === 'emerald' ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' :
                    'bg-gradient-to-t from-pink-500 to-pink-400'
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

      {/* Geographic Distribution and Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Geographic Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Geographic Distribution</h3>
            <Globe className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {locationStats.map((location, index) => (
              <div key={location.country} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{location.flag}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {location.country}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {location.clients.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({location.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      location.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      location.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      location.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      location.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      location.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${location.percentage}%`,
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
                action: 'New client registered',
                client: 'Sarah Johnson',
                location: 'New York, NY',
                time: '2 min ago',
                type: 'success',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Profile updated',
                client: 'Michael Chen',
                location: 'Los Angeles, CA',
                time: '8 min ago',
                type: 'info',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Subscription upgraded',
                client: 'Emma Wilson',
                location: 'Chicago, IL',
                time: '15 min ago',
                type: 'update',
                avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Left 5-star review',
                client: 'James Rodriguez',
                location: 'Houston, TX',
                time: '1 hour ago',
                type: 'success',
                avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              },
              {
                action: 'Account deactivated',
                client: 'Lisa Thompson',
                location: 'Phoenix, AZ',
                time: '2 hours ago',
                type: 'warning',
                avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                <div className="relative">
                  <img
                    src={activity.avatar}
                    alt={activity.client}
                    className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-cyan-400 transition-all duration-300"
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
                    {activity.client} • {activity.location}
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

      {/* Client Insights Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white mb-8 animate-in slide-in-from-bottom delay-900">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Client Insights</h3>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Real-time Analytics</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2.3s</div>
            <div className="text-sm text-cyan-100">Avg Session</div>
            <div className="text-xs text-cyan-200 mt-1">engagement time</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">94.2%</div>
            <div className="text-sm text-cyan-100">Satisfaction</div>
            <div className="text-xs text-cyan-200 mt-1">client rating</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">+25%</div>
            <div className="text-sm text-cyan-100">Growth Rate</div>
            <div className="text-xs text-cyan-200 mt-1">new registrations</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">99.8%</div>
            <div className="text-sm text-cyan-100">Data Security</div>
            <div className="text-xs text-cyan-200 mt-1">compliance rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsStats;