import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, 
  Download, Filter, RefreshCw, Activity,
  DollarSign, Users, Star, Clock, Award,
  ArrowUp, ArrowDown, Eye, Calendar, CreditCard
} from 'lucide-react';

const SubscriptionsAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'revenue', label: 'Revenue', icon: DollarSign },
    { value: 'subscribers', label: 'Subscribers', icon: Users },
    { value: 'churn', label: 'Churn Rate', icon: TrendingUp },
    { value: 'growth', label: 'Growth', icon: Award }
  ];

  const analyticsData = {
    totalRevenue: 284750,
    totalSubscribers: 2847,
    churnRate: 2.1,
    growthRate: 18.5,
    averageRevenue: 33.12,
    lifetimeValue: 1247
  };

  const revenueByPlan = [
    { plan: 'Basic Plan', revenue: 24940, subscribers: 1247, color: 'blue' },
    { plan: 'Professional Plan', revenue: 44596, subscribers: 892, color: 'emerald' },
    { plan: 'Premium Plan', revenue: 45600, subscribers: 456, color: 'purple' },
    { plan: 'Enterprise Plan', revenue: 37800, subscribers: 189, color: 'yellow' }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 18500, subscribers: 1247, churn: 2.8 },
    { month: 'Feb', revenue: 22300, subscribers: 1456, churn: 2.6 },
    { month: 'Mar', revenue: 19800, subscribers: 1334, churn: 2.4 },
    { month: 'Apr', revenue: 25600, subscribers: 1678, churn: 2.2 },
    { month: 'May', revenue: 28900, subscribers: 1823, churn: 2.0 },
    { month: 'Jun', revenue: 24700, subscribers: 1567, churn: 1.9 },
    { month: 'Jul', revenue: 31200, subscribers: 1945, churn: 1.8 },
    { month: 'Aug', revenue: 29800, subscribers: 1876, churn: 2.1 },
    { month: 'Sep', revenue: 26400, subscribers: 1689, churn: 2.3 },
    { month: 'Oct', revenue: 33100, subscribers: 2134, churn: 2.0 },
    { month: 'Nov', revenue: 35600, subscribers: 2267, churn: 1.9 },
    { month: 'Dec', revenue: 38200, subscribers: 2456, churn: 2.1 }
  ];

  const topPerformers = [
    {
      name: 'Professional Plan',
      subscribers: 892,
      revenue: '$44,596',
      growth: '+18%',
      churn: '1.8%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Premium Plan',
      subscribers: 456,
      revenue: '$45,600',
      growth: '+25%',
      churn: '1.5%',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Enterprise Plan',
      subscribers: 189,
      revenue: '$37,800',
      growth: '+32%',
      churn: '0.8%',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Basic Plan',
      subscribers: 1247,
      revenue: '$24,940',
      growth: '+12%',
      churn: '3.2%',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Subscriptions Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into subscription performance and revenue trends
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
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Revenue', value: `$${(analyticsData.totalRevenue / 1000).toFixed(0)}K`, change: '+18.5%', icon: DollarSign, color: 'emerald' },
          { label: 'Total Subscribers', value: analyticsData.totalSubscribers.toLocaleString(), change: '+12%', icon: Users, color: 'blue' },
          { label: 'Churn Rate', value: `${analyticsData.churnRate}%`, change: '-0.3%', icon: TrendingUp, color: 'red' },
          { label: 'Growth Rate', value: `${analyticsData.growthRate}%`, change: '+5.2%', icon: Award, color: 'purple' },
          { label: 'Avg Revenue/User', value: `$${analyticsData.averageRevenue}`, change: '+8.1%', icon: Star, color: 'yellow' },
          { label: 'Lifetime Value', value: `$${analyticsData.lifetimeValue}`, change: '+15.3%', icon: Clock, color: 'indigo' }
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${
                metric.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                metric.color === 'red' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                metric.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
              } group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-4 h-4" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 
                metric.change.startsWith('-') && metric.color === 'red' ? 'text-green-600 dark:text-green-400' :
                'text-red-600 dark:text-red-400'
              }`}>
                {(metric.change.startsWith('+') || (metric.change.startsWith('-') && metric.color === 'red')) ? 
                  <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
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
        {/* Revenue Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue & Subscribers Trend</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-emerald-50 to-transparent dark:from-emerald-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t transition-all duration-1000 hover:from-teal-600 hover:to-teal-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
                  style={{ 
                    height: `${(data.revenue / 40000) * 100}%`, 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${(data.revenue / 1000).toFixed(0)}K
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Revenue Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Revenue by Plan</h3>
          
          <div className="space-y-4">
            {revenueByPlan.map((plan, index) => (
              <div
                key={plan.plan}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {plan.plan}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      ${(plan.revenue / 1000).toFixed(0)}K
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({plan.subscribers} subs)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      plan.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      plan.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      plan.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${(plan.revenue / 50000) * 100}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut Chart Representation */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                  className="dark:stroke-gray-600"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray={`${(revenueByPlan[1].revenue / revenueByPlan.reduce((sum, p) => sum + p.revenue, 0)) * 100}, 100`}
                  className="animate-in slide-in-from-bottom duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    ${(revenueByPlan.reduce((sum, p) => sum + p.revenue, 0) / 1000).toFixed(0)}K
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Plans and Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Performing Plans */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Performing Plans</h3>
            <button className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topPerformers.map((plan, index) => (
              <div
                key={plan.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-emerald-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {plan.name}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {plan.subscribers}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">
                        {plan.revenue}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {plan.growth}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Churn: {plan.churn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Performance Insights</h3>
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$284K</div>
              <div className="text-sm text-emerald-100">Monthly Revenue</div>
              <div className="text-xs text-emerald-200 mt-1">+18.5% growth</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">2,847</div>
              <div className="text-sm text-emerald-100">Active Subscribers</div>
              <div className="text-xs text-emerald-200 mt-1">+12% growth</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">2.1%</div>
              <div className="text-sm text-emerald-100">Churn Rate</div>
              <div className="text-xs text-emerald-200 mt-1">-0.3% improvement</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$1,247</div>
              <div className="text-sm text-emerald-100">Lifetime Value</div>
              <div className="text-xs text-emerald-200 mt-1">+15.3% increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsAnalytics;