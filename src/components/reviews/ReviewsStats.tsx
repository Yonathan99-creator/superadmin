import React from 'react';
import { 
  Star, ThumbsUp, MessageSquare, TrendingUp, 
  Users, Award, Shield, Activity,
  CheckCircle, AlertTriangle, Clock, Eye
} from 'lucide-react';

const ReviewsStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Reviews',
      value: '12,340',
      change: '+18%',
      changeType: 'positive',
      icon: MessageSquare,
      color: 'yellow',
      description: 'All time reviews',
      trend: [65, 78, 82, 56, 89, 67, 95, 73, 88, 91, 84, 76]
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      changeType: 'positive',
      icon: Star,
      color: 'orange',
      description: 'Overall satisfaction',
      trend: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.8, 4.8, 4.8, 4.8]
    },
    {
      title: 'Approved Reviews',
      value: '12,293',
      change: '+15%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green',
      description: 'Published reviews',
      trend: [45, 68, 72, 86, 79, 87, 85, 93, 78, 81, 94, 86]
    },
    {
      title: 'Pending Moderation',
      value: '47',
      change: '-12%',
      changeType: 'positive',
      icon: Clock,
      color: 'blue',
      description: 'Awaiting review',
      trend: [35, 48, 52, 36, 49, 47, 55, 43, 58, 51, 44, 36]
    },
    {
      title: 'Flagged Reviews',
      value: '23',
      change: '-25%',
      changeType: 'positive',
      icon: AlertTriangle,
      color: 'red',
      description: 'Require attention',
      trend: [25, 28, 22, 16, 19, 17, 15, 13, 18, 21, 14, 12]
    },
    {
      title: 'Response Rate',
      value: '94.2%',
      change: '+5%',
      changeType: 'positive',
      icon: ThumbsUp,
      color: 'purple',
      description: 'Professional responses',
      trend: [85, 88, 90, 91, 92, 93, 93, 94, 94, 94, 94, 94]
    }
  ];

  const ratingDistribution = [
    { rating: 5, count: 8456, percentage: 68.5, color: 'green' },
    { rating: 4, count: 2468, percentage: 20.0, color: 'lime' },
    { rating: 3, count: 987, percentage: 8.0, color: 'yellow' },
    { rating: 2, count: 296, percentage: 2.4, color: 'orange' },
    { rating: 1, count: 133, percentage: 1.1, color: 'red' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400'
    };
    return colors[color as keyof typeof colors] || colors.yellow;
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
                    stat.color === 'yellow' ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' :
                    stat.color === 'orange' ? 'bg-gradient-to-t from-orange-500 to-orange-400' :
                    stat.color === 'green' ? 'bg-gradient-to-t from-green-500 to-green-400' :
                    stat.color === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                    stat.color === 'red' ? 'bg-gradient-to-t from-red-500 to-red-400' :
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

      {/* Rating Distribution and Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Rating Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-500">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rating Distribution</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">4.8</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {ratingDistribution.map((rating, index) => (
              <div key={rating.rating} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {rating.rating} Stars
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < rating.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {rating.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({rating.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      rating.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      rating.color === 'lime' ? 'bg-gradient-to-r from-lime-500 to-lime-600' :
                      rating.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      rating.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${rating.percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating Display */}
          <div className="mt-6 text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-8 h-8 text-yellow-500 fill-current animate-pulse" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">4.8</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on {ratingDistribution.reduce((sum, r) => sum + r.count, 0).toLocaleString()} reviews
            </p>
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
                action: 'New 5-star review received',
                customer: 'Sarah Johnson',
                professional: 'Dr. Michael Chen',
                time: '2 min ago',
                type: 'success',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
                rating: 5
              },
              {
                action: 'Review flagged for moderation',
                customer: 'John Smith',
                professional: 'Dr. Emma Wilson',
                time: '15 min ago',
                type: 'warning',
                avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
                rating: 2
              },
              {
                action: 'Professional responded to review',
                customer: 'Maria Garcia',
                professional: 'Dr. Sarah Johnson',
                time: '1 hour ago',
                type: 'info',
                avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
                rating: 4
              },
              {
                action: 'Review approved after moderation',
                customer: 'David Wilson',
                professional: 'Dr. James Rodriguez',
                time: '2 hours ago',
                type: 'success',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
                rating: 5
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                <div className="relative">
                  <img
                    src={activity.avatar}
                    alt={activity.customer}
                    className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-yellow-400 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 flex space-x-0.5">
                    {[...Array(activity.rating)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.customer} → {activity.professional}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500 animate-pulse' :
                    activity.type === 'warning' ? 'bg-yellow-500 animate-pulse' :
                    'bg-blue-500 animate-pulse'
                  }`}></div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Insights Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl shadow-lg p-6 text-white mb-8 animate-in slide-in-from-bottom delay-900">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Reviews Insights</h3>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Real-time Analytics</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Star className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">4.8</div>
            <div className="text-sm text-yellow-100">Avg Rating</div>
            <div className="text-xs text-yellow-200 mt-1">+0.2 this month</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <ThumbsUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">94.2%</div>
            <div className="text-sm text-yellow-100">Satisfaction</div>
            <div className="text-xs text-yellow-200 mt-1">customer approval</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">+18%</div>
            <div className="text-sm text-yellow-100">Growth Rate</div>
            <div className="text-xs text-yellow-200 mt-1">new reviews</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">99.6%</div>
            <div className="text-sm text-yellow-100">Quality Score</div>
            <div className="text-xs text-yellow-200 mt-1">content quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsStats;