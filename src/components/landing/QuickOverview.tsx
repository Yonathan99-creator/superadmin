import React from 'react';
import { 
  Users, Calendar, Star, TrendingUp, 
  Clock, CheckCircle, Settings, Shield,
  Zap, Globe, Award, Target
} from 'lucide-react';

const QuickOverview: React.FC = () => {
  const modules = [
    {
      title: 'Professionals',
      count: '2,847',
      change: '+12%',
      icon: Users,
      color: 'blue',
      description: 'Active healthcare professionals',
      status: 'online',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'Appointments',
      count: '15,492',
      change: '+8%',
      icon: Calendar,
      color: 'green',
      description: 'Monthly bookings',
      status: 'active',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'Services',
      count: '1,247',
      change: '+15%',
      icon: Settings,
      color: 'purple',
      description: 'Available services',
      status: 'managed',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'Reviews',
      count: '4.8/5',
      change: '+0.2',
      icon: Star,
      color: 'yellow',
      description: 'Average rating',
      status: 'excellent',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'Clients',
      count: '28,405',
      change: '+23%',
      icon: Users,
      color: 'indigo',
      description: 'Registered users',
      status: 'growing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'Revenue',
      count: '$94,250',
      change: '+18%',
      icon: TrendingUp,
      color: 'emerald',
      description: 'Monthly earnings',
      status: 'profitable',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times globally',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Available in 50+ countries',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Industry recognition and certifications',
      color: 'purple'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Complete System Overview
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive control of your booking ecosystem with real-time insights and advanced analytics
          </p>
        </div>

        {/* Enhanced Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                    {module.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(module.color)} group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-green-500 text-sm font-semibold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                      {module.change}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {module.count}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {module.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ${
                        module.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        module.color === 'green' ? 'from-green-500 to-green-600' :
                        module.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        module.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                        module.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                        'from-emerald-500 to-emerald-600'
                      }`}
                      style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                    />
                  </div>
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>

                <button className="w-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                  <span>View Details</span>
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${(index + 6) * 150}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                feature.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                feature.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                feature.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
              }`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced System Status */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 animate-in slide-in-from-bottom delay-1000 border border-green-200 dark:border-green-800">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  All Systems Operational
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Last updated: {new Date().toLocaleString()} • Uptime: 99.9%
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2.1s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2,847</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;