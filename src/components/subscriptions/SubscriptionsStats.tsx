import React from 'react';
import { 
  CreditCard, CheckCircle, Clock, AlertTriangle, 
  TrendingUp, Star, DollarSign, Users,
  Activity, Award, Shield, Zap
} from 'lucide-react';

const SubscriptionsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Subscriptions',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: CreditCard,
      color: 'emerald',
      description: 'Active subscriptions',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Active Subscriptions',
      value: '2,824',
      change: '+8%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green',
      description: 'Currently active',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Expiring Soon',
      value: '156',
      change: '-5%',
      changeType: 'positive',
      icon: Clock,
      color: 'yellow',
      description: 'Next 30 days',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Cancelled',
      value: '23',
      change: '-15%',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red',
      description: 'This month',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Monthly Revenue',
      value: '$94,250',
      change: '+18%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'blue',
      description: 'Recurring revenue',
      trend: [55, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 96]
    },
    {
      title: 'Churn Rate',
      value: '2.1%',
      change: '-0.3%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'purple',
      description: 'Monthly churn',
      trend: [3.2, 3.1, 2.9, 2.8, 2.6, 2.4, 2.3, 2.2, 2.1, 2.1, 2.1, 2.1]
    }
  ];

  const planStats = [
    { name: 'Basic Plan', subscribers: 1247, percentage: 44, color: 'blue', revenue: '$24,940' },
    { name: 'Professional Plan', subscribers: 892, percentage: 31, color: 'emerald', revenue: '$35,680' },
    { name: 'Premium Plan', subscribers: 456, percentage: 16, color: 'purple', revenue: '$22,800' },
    { name: 'Enterprise Plan', subscribers: 189, percentage: 7, color: 'yellow', revenue: '$18,900' },
    { name: 'Custom Plan', subscribers: 63, percentage: 2, color: 'red', revenue: '$12,600' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
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
                    stat.color === 'emerald' ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    stat.color === 'yellow' ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    stat.color === 'red' ? 'bg-gradient-to-t from-red-500 to-red-400' :
                    stat.color === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
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

      {/* Plan Distribution and Revenue Breakdown */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Plan Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Plan Distribution</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {planStats.map((plan, index) => (
              <div key={plan.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {plan.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {plan.subscribers.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({plan.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      plan.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      plan.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      plan.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      plan.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${plan.percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {plan.subscribers} subscribers
                  </span>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {plan.revenue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Insights */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Revenue Insights</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$94,250</div>
              <div className="text-sm text-emerald-100">Monthly Revenue</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$1.13M</div>
              <div className="text-sm text-emerald-100">Annual Revenue</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
              <span className="text-emerald-100">Average Revenue Per User</span>
              <span className="font-semibold">$33.12</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
              <span className="text-emerald-100">Customer Lifetime Value</span>
              <span className="font-semibold">$1,247</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
              <span className="text-emerald-100">Revenue Growth Rate</span>
              <span className="font-semibold">+18.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsStats;