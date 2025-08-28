import React, { useState } from 'react';
import { 
  Plus, Edit, Trash2, Eye, Star, CheckCircle,
  DollarSign, Users, Zap, Shield, Award,
  TrendingUp, Clock, Settings, Crown
} from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  subscribers: number;
  revenue: number;
  status: 'active' | 'inactive' | 'draft';
  popular: boolean;
  image: string;
  limits: {
    users: number;
    storage: number;
    apiCalls: number;
    support: string;
  };
}

const PlansManagement: React.FC = () => {
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      id: '1',
      name: 'Basic Plan',
      description: 'Perfect for individuals and small practices getting started',
      price: 19.99,
      billingCycle: 'monthly',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      subscribers: 1247,
      revenue: 24940,
      status: 'active',
      popular: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      limits: {
        users: 5,
        storage: 10,
        apiCalls: 1000,
        support: 'Email'
      }
    },
    {
      id: '2',
      name: 'Professional Plan',
      description: 'Ideal for growing practices and professional healthcare providers',
      price: 49.99,
      billingCycle: 'monthly',
      features: [
        'Up to 15 team members',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'Advanced integrations',
        'API access',
        'Automated workflows'
      ],
      subscribers: 892,
      revenue: 44596,
      status: 'active',
      popular: true,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      limits: {
        users: 15,
        storage: 50,
        apiCalls: 10000,
        support: 'Priority'
      }
    },
    {
      id: '3',
      name: 'Premium Plan',
      description: 'Advanced features for established practices and clinics',
      price: 99.99,
      billingCycle: 'monthly',
      features: [
        'Up to 50 team members',
        '200GB storage',
        'Premium analytics',
        '24/7 phone support',
        'White-label solution',
        'All integrations',
        'Advanced API access',
        'Custom workflows',
        'Dedicated account manager'
      ],
      subscribers: 456,
      revenue: 45600,
      status: 'active',
      popular: false,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      limits: {
        users: 50,
        storage: 200,
        apiCalls: 50000,
        support: '24/7 Phone'
      }
    },
    {
      id: '4',
      name: 'Enterprise Plan',
      description: 'Custom solutions for large healthcare organizations',
      price: 199.99,
      billingCycle: 'monthly',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise analytics',
        'Dedicated support team',
        'Custom development',
        'Enterprise integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      subscribers: 189,
      revenue: 37800,
      status: 'active',
      popular: false,
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      limits: {
        users: -1, // Unlimited
        storage: -1, // Unlimited
        apiCalls: -1, // Unlimited
        support: 'Dedicated Team'
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      inactive: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      draft: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
    };
    return badges[status as keyof typeof badges] || badges.draft;
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Plans Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <Settings className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{plans.length}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Total Plans</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Available subscription plans</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {plans.reduce((sum, plan) => sum + plan.subscribers, 0).toLocaleString()}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Total Subscribers</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Across all plans</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${(plans.reduce((sum, plan) => sum + plan.revenue, 0) / 1000).toFixed(0)}K
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Monthly Revenue</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">From all plans</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${(plans.reduce((sum, plan) => sum + plan.revenue, 0) / plans.reduce((sum, plan) => sum + plan.subscribers, 0)).toFixed(0)}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Average Revenue</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Per subscriber</p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Subscription Plans</h3>
          <button
            onClick={() => setShowAddPlan(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Plan</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 group animate-in slide-in-from-bottom ${
                plan.popular 
                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Crown className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Image */}
              <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(plan.status)}`}>
                    {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Plan Header */}
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{plan.description}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/{plan.billingCycle.slice(0, -2)}</span>
                </div>
              </div>

              {/* Plan Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-white dark:bg-gray-600 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{plan.subscribers.toLocaleString()}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Subscribers</div>
                </div>
                <div className="text-center p-2 bg-white dark:bg-gray-600 rounded-lg">
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${(plan.revenue / 1000).toFixed(0)}K</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Revenue</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h5>
                <div className="space-y-1">
                  {plan.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 3 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{plan.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 hover:scale-105"
                >
                  <Eye className="w-3 h-3" />
                  <span className="text-xs">View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration-200 hover:scale-105">
                  <Edit className="w-3 h-3" />
                  <span className="text-xs">Edit</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Plan Modal */}
      {showAddPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Plan</h3>
                <button
                  onClick={() => setShowAddPlan(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Plan Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700"
                      placeholder="Enter plan name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700"
                    placeholder="Enter plan description"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Billing Cycle
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700">
                      <option>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Status
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700">
                      <option>Draft</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="popular"
                    className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="popular" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mark as popular plan
                  </label>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddPlan(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Create Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Plan Details Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedPlan.name}</h3>
                  {selectedPlan.popular && (
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Plan Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Price:</span> ${selectedPlan.price}/{selectedPlan.billingCycle.slice(0, -2)}</p>
                    <p><span className="font-medium">Subscribers:</span> {selectedPlan.subscribers.toLocaleString()}</p>
                    <p><span className="font-medium">Revenue:</span> ${selectedPlan.revenue.toLocaleString()}</p>
                    <p><span className="font-medium">Status:</span> {selectedPlan.status}</p>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 mt-6">Plan Limits</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Users:</span> {selectedPlan.limits.users === -1 ? 'Unlimited' : selectedPlan.limits.users}</p>
                    <p><span className="font-medium">Storage:</span> {selectedPlan.limits.storage === -1 ? 'Unlimited' : `${selectedPlan.limits.storage}GB`}</p>
                    <p><span className="font-medium">API Calls:</span> {selectedPlan.limits.apiCalls === -1 ? 'Unlimited' : selectedPlan.limits.apiCalls.toLocaleString()}</p>
                    <p><span className="font-medium">Support:</span> {selectedPlan.limits.support}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
                  <div className="space-y-2">
                    {selectedPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Edit Plan
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Delete Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansManagement;