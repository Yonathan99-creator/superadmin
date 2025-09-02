import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, 
  Download, Filter, RefreshCw, Activity,
  DollarSign, Users, Star, Clock, Award,
  ArrowUp, ArrowDown, Eye, Calendar, Globe,
  Heart, Target, Zap, Shield
} from 'lucide-react';

const ClientsAnalytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('registrations');

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { value: 'registrations', label: 'Registrations', icon: Users },
    { value: 'engagement', label: 'Engagement', icon: Activity },
    { value: 'retention', label: 'Retention', icon: Heart },
    { value: 'satisfaction', label: 'Satisfaction', icon: Star }
  ];

  const analyticsData = {
    totalClients: 28405,
    activeClients: 26847,
    newRegistrations: 1558,
    retentionRate: 94.2,
    satisfactionScore: 4.8,
    lifetimeValue: 1247
  };

  const clientsByTier = [
    { tier: 'Bronze', count: 15420, percentage: 54, color: 'orange' },
    { tier: 'Silver', count: 7890, percentage: 28, color: 'gray' },
    { tier: 'Gold', count: 3456, percentage: 12, color: 'yellow' },
    { tier: 'Platinum', count: 1639, percentage: 6, color: 'purple' }
  ];

  const monthlyData = [
    { month: 'Jan', registrations: 1247, active: 24500, retention: 92.1 },
    { month: 'Feb', registrations: 1456, active: 25200, retention: 93.2 },
    { month: 'Mar', registrations: 1334, active: 25800, retention: 93.8 },
    { month: 'Apr', registrations: 1678, active: 26100, retention: 94.1 },
    { month: 'May', registrations: 1823, active: 26400, retention: 94.3 },
    { month: 'Jun', registrations: 1567, active: 26200, retention: 94.0 },
    { month: 'Jul', registrations: 1945, active: 26600, retention: 94.2 },
    { month: 'Aug', registrations: 1876, active: 26800, retention: 94.1 },
    { month: 'Sep', registrations: 1689, active: 26700, retention: 94.0 },
    { month: 'Oct', registrations: 2134, active: 26900, retention: 94.2 },
    { month: 'Nov', registrations: 2267, active: 27100, retention: 94.3 },
    { month: 'Dec', registrations: 2456, active: 27300, retention: 94.2 }
  ];

  const topSegments = [
    {
      name: 'Healthcare Professionals',
      clients: 8450,
      growth: '+18%',
      value: '$425K',
      engagement: '89%',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Individual Patients',
      clients: 12340,
      growth: '+12%',
      value: '$234K',
      engagement: '76%',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Corporate Clients',
      clients: 2890,
      growth: '+25%',
      value: '$567K',
      engagement: '94%',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Insurance Partners',
      clients: 4725,
      growth: '+15%',
      value: '$789K',
      engagement: '87%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Analytics Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Client Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into client behavior, engagement, and growth patterns
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
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'Total Clients', value: analyticsData.totalClients.toLocaleString(), change: '+12%', icon: Users, color: 'cyan' },
          { label: 'Active Clients', value: analyticsData.activeClients.toLocaleString(), change: '+8%', icon: Activity, color: 'green' },
          { label: 'New Registrations', value: analyticsData.newRegistrations.toLocaleString(), change: '+25%', icon: TrendingUp, color: 'blue' },
          { label: 'Retention Rate', value: `${analyticsData.retentionRate}%`, change: '+2.1%', icon: Heart, color: 'pink' },
          { label: 'Satisfaction', value: analyticsData.satisfactionScore.toString(), change: '+0.2', icon: Star, color: 'yellow' },
          { label: 'Lifetime Value', value: `$${analyticsData.lifetimeValue}`, change: '+15%', icon: Award, color: 'purple' }
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${
                metric.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' :
                metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                metric.color === 'pink' ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' :
                metric.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
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
        {/* Client Growth Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Client Growth & Retention</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span className="text-sm text-cyan-500 font-medium">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-t from-cyan-50 to-transparent dark:from-cyan-900/20 rounded-lg p-4 flex items-end space-x-2 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-gray-300 dark:border-gray-600" style={{ top: `${i * 25}%` }} />
              ))}
            </div>
            
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all duration-1000 hover:from-blue-600 hover:to-blue-400 w-full animate-in slide-in-from-bottom relative group cursor-pointer"
                  style={{ 
                    height: `${(data.registrations / 2500) * 100}%`, 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.registrations}
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loyalty Tier Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Loyalty Tier Distribution</h3>
          
          <div className="space-y-4">
            {clientsByTier.map((tier, index) => (
              <div
                key={tier.tier}
                className="group animate-in slide-in-from-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Award className={`w-5 h-5 ${
                      tier.color === 'orange' ? 'text-orange-500' :
                      tier.color === 'gray' ? 'text-gray-500' :
                      tier.color === 'yellow' ? 'text-yellow-500' :
                      'text-purple-500'
                    }`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tier.tier} Members
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {tier.count.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({tier.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      tier.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      tier.color === 'gray' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
                      tier.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-purple-500 to-purple-600'
                    } group-hover:scale-105 group-hover:shadow-lg`}
                    style={{ 
                      width: `${tier.percentage}%`,
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
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeDasharray={`${analyticsData.retentionRate}, 100`}
                  className="animate-in slide-in-from-bottom duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {analyticsData.retentionRate}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Segments and Insights */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Client Segments */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-left delay-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Client Segments</h3>
            <button className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {topSegments.map((segment, index) => (
              <div
                key={segment.name}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={segment.image}
                    alt={segment.name}
                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-cyan-400 transition-all duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {segment.name}
                  </p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {segment.clients.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {segment.value}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {segment.engagement}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {segment.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Insights */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Client Insights</h3>
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">94.2%</div>
              <div className="text-sm text-cyan-100">Retention Rate</div>
              <div className="text-xs text-cyan-200 mt-1">+2.1% improvement</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">4.8</div>
              <div className="text-sm text-cyan-100">Satisfaction</div>
              <div className="text-xs text-cyan-200 mt-1">+0.2 increase</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">+25%</div>
              <div className="text-sm text-cyan-100">Growth Rate</div>
              <div className="text-xs text-cyan-200 mt-1">new registrations</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">$1,247</div>
              <div className="text-sm text-cyan-100">Lifetime Value</div>
              <div className="text-xs text-cyan-200 mt-1">average per client</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAnalytics;