import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, 
  Download, Filter, RefreshCw, Activity,
  Star, Users, MessageSquare, Clock, Award,
  ArrowUp, ArrowDown, Eye, Calendar, ThumbsUp,
  Shield, Zap, Target, Globe
} from 'lucide-react';

const ReviewsAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('ratings');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'ratings', label: 'Ratings', icon: Star },
    { value: 'sentiment', label: 'Sentiment', icon: ThumbsUp },
    { value: 'engagement', label: 'Engagement', icon: Activity },
    { value: 'moderation', label: 'Moderation', icon: Shield }
  ];

  const analyticsData = {
    totalReviews: 12340,
    averageRating: 4.8,
    responseRate: 94.2,
    moderationAccuracy: 98.7,
    sentimentScore: 0.85,
    engagementRate: 76.3
  };

  const ratingTrends = [
    { rating: 5, count: 8456, trend: '+12%', color: 'green' },
    { rating: 4, count: 2468, trend: '+8%', color: 'lime' },
    { rating: 3, count: 987, trend: '-5%', color: 'yellow' },
    { rating: 2, count: 296, trend: '-15%', color: 'orange' },
    { rating: 1, count: 133, trend: '-25%', color: 'red' }
  ];

  const monthlyData = [
    { month: 'Jan', reviews: 1247, rating: 4.6, sentiment: 0.82 },
    { month: 'Feb', reviews: 1456, rating: 4.7, sentiment: 0.84 },
    { month: 'Mar', reviews: 1334, rating: 4.7, sentiment: 0.83 },
    { month: 'Apr', reviews: 1678, rating: 4.8, sentiment: 0.85 },
    { month: 'May', reviews: 1823, rating: 4.8, sentiment: 0.86 },
    { month: 'Jun', reviews: 1567, rating: 4.8, sentiment: 0.85 },
    { month: 'Jul', reviews: 1945, rating: 4.9, sentiment: 0.87 },
    { month: 'Aug', reviews: 1876, rating: 4.8, sentiment: 0.86 },
    { month: 'Sep', reviews: 1689, rating: 4.8, sentiment: 0.85 },
    { month: 'Oct', reviews: 2134, rating: 4.9, sentiment: 0.88 },
    { month: 'Nov', reviews: 2267, rating: 4.8, sentiment: 0.87 },
    { month: 'Dec', reviews: 2456, rating: 4.8, sentiment: 0.85 }
  ];

  const topProfessionals = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      reviews: 247,
      rating: 4.9,
      responseRate: 98,
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      reviews: 189,
      rating: 4.8,
      responseRate: 95,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. Emma Wilson',
      specialty: 'Psychology',
      reviews: 156,
      rating: 4.9,
      responseRate: 100,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Dr. James Rodriguez',
      specialty: 'General Medicine',
      reviews: 203,
      rating: 4.7,
      responseRate: 92,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  const sentimentAnalysis = [
    { sentiment: 'Very Positive', percentage: 68.5, count: 8456, color: 'green' },
    { sentiment: 'Positive', percentage: 20.0, count: 2468, color: 'lime' },
    { sentiment: 'Neutral', percentage: 8.0, count: 987, color: 'yellow' },
    { sentiment: 'Negative', percentage: 2.4, count: 296, color: 'orange' },
    { sentiment: 'Very Negative', percentage: 1.1, count: 133, color: 'red' }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Reviews Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into review patterns, sentiment, and engagement
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Timeframe Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTimeframe === timeframe.value
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {timeframe.label}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Reviews', value: analyticsData.totalReviews.toLocaleString(), change: '+18%', icon: MessageSquare, color: 'blue' },
          { label: 'Average Rating', value: analyticsData.averageRating.toString(), change: '+0.2', icon: Star, color: 'yellow' },
          { label: 'Response Rate', value: `${analyticsData.responseRate}%`, change: '+5%', icon: ThumbsUp, color: 'green' },
          { label: 'Moderation Accuracy', value: `${analyticsData.moderationAccuracy}%`, change: '+1.2%', icon: Shield, color: 'purple' },
          { label: 'Sentiment Score', value: analyticsData.sentimentScore.toString(), change: '+0.05', icon: Activity, color: 'emerald' },
          { label: 'Engagement Rate', value: `${analyticsData.engagementRate}%`, change: '+8.3%', icon: TrendingUp, color: 'orange' }
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${
                metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                metric.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                metric.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
              } group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-4 h-4" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.change.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Reviews & Rating Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Reviews & Rating Trend</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-sm text-yellow-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-yellow-50 to-transparent dark:from-yellow-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t transition-all duration-1000 hover:from-orange-600 hover:to-orange-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
                  style={{ 
                    height: `${(data.reviews / 2500) * 100}%`, 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.reviews}
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Sentiment Analysis</h3>
          
          <div className="space-y-4">
            {sentimentAnalysis.map((sentiment, index) => (
              <div
                key={sentiment.sentiment}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {sentiment.sentiment}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {sentiment.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({sentiment.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      sentiment.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      sentiment.color === 'lime' ? 'bg-gradient-to-r from-lime-500 to-lime-600' :
                      sentiment.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      sentiment.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${sentiment.percentage}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Overall Sentiment Score */}
          <div className="mt-6 text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <ThumbsUp className="w-8 h-8 text-green-500" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">0.85</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Overall Sentiment Score (Very Positive)
            </p>
          </div>
        </div>
      </div>

      {/* Top Professionals and Performance Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Rated Professionals */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Rated Professionals</h3>
            <button className="text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topProfessionals.map((professional, index) => (
              <div
                key={professional.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={professional.avatar}
                    alt={professional.name}
                    className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-yellow-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {professional.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {professional.specialty}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {professional.reviews}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {professional.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {professional.responseRate}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Performance Insights</h3>
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">4.8</div>
              <div className="text-sm text-yellow-100">Average Rating</div>
              <div className="text-xs text-yellow-200 mt-1">+0.2 this month</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <ThumbsUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">94.2%</div>
              <div className="text-sm text-yellow-100">Response Rate</div>
              <div className="text-xs text-yellow-200 mt-1">professional responses</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">98.7%</div>
              <div className="text-sm text-yellow-100">Moderation Accuracy</div>
              <div className="text-xs text-yellow-200 mt-1">automated filtering</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">+18%</div>
              <div className="text-sm text-yellow-100">Growth Rate</div>
              <div className="text-xs text-yellow-200 mt-1">new reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Distribution Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-bottom delay-1000">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Rating Distribution & Trends</h3>
        
        <div className="grid md:grid-cols-5 gap-4">
          {ratingTrends.map((rating, index) => (
            <div
              key={rating.rating}
              className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="text-lg font-bold text-gray-900 dark:text-white">{rating.rating}</span>
                <Star className={`w-5 h-5 ${
                  rating.rating >= 4 ? 'text-green-500' :
                  rating.rating >= 3 ? 'text-yellow-500' :
                  'text-red-500'
                } fill-current group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {rating.count.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">reviews</div>
              <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                rating.trend.startsWith('+') ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                {rating.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAnalytics;