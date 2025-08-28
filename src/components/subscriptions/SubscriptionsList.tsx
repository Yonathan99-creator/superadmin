import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, Calendar, 
  DollarSign, Users, CheckCircle, Clock,
  AlertTriangle, X, CreditCard, Shield
} from 'lucide-react';

interface Subscription {
  id: string;
  customerName: string;
  customerEmail: string;
  customerAvatar: string;
  planName: string;
  planType: 'basic' | 'professional' | 'premium' | 'enterprise';
  status: 'active' | 'expired' | 'cancelled' | 'pending';
  startDate: string;
  endDate: string;
  amount: string;
  billingCycle: 'monthly' | 'yearly';
  nextBilling: string;
  paymentMethod: string;
  features: string[];
}

interface SubscriptionsListProps {
  onSelectSubscription: (subscription: Subscription) => void;
}

const SubscriptionsList: React.FC<SubscriptionsListProps> = ({ onSelectSubscription }) => {
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const subscriptions: Subscription[] = [
    {
      id: '1',
      customerName: 'Dr. Sarah Johnson',
      customerEmail: 'sarah.johnson@email.com',
      customerAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      planName: 'Professional Plan',
      planType: 'professional',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2025-01-15',
      amount: '$49.99',
      billingCycle: 'monthly',
      nextBilling: '2024-02-15',
      paymentMethod: '**** 4242',
      features: ['Advanced Analytics', 'Priority Support', 'Custom Branding']
    },
    {
      id: '2',
      customerName: 'Dr. Michael Chen',
      customerEmail: 'michael.chen@email.com',
      customerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      planName: 'Premium Plan',
      planType: 'premium',
      status: 'active',
      startDate: '2023-12-01',
      endDate: '2024-12-01',
      amount: '$99.99',
      billingCycle: 'monthly',
      nextBilling: '2024-02-01',
      paymentMethod: '**** 5555',
      features: ['All Features', 'API Access', 'White Label']
    },
    {
      id: '3',
      customerName: 'Dr. Emma Wilson',
      customerEmail: 'emma.wilson@email.com',
      customerAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      planName: 'Basic Plan',
      planType: 'basic',
      status: 'expired',
      startDate: '2023-11-15',
      endDate: '2024-01-15',
      amount: '$19.99',
      billingCycle: 'monthly',
      nextBilling: 'Expired',
      paymentMethod: '**** 1234',
      features: ['Basic Features', 'Email Support']
    },
    {
      id: '4',
      customerName: 'Dr. James Rodriguez',
      customerEmail: 'james.rodriguez@email.com',
      customerAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      planName: 'Enterprise Plan',
      planType: 'enterprise',
      status: 'active',
      startDate: '2023-10-01',
      endDate: '2024-10-01',
      amount: '$199.99',
      billingCycle: 'monthly',
      nextBilling: '2024-02-01',
      paymentMethod: '**** 9876',
      features: ['Enterprise Features', 'Dedicated Support', 'Custom Integration']
    },
    {
      id: '5',
      customerName: 'Dr. Lisa Thompson',
      customerEmail: 'lisa.thompson@email.com',
      customerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      planName: 'Professional Plan',
      planType: 'professional',
      status: 'cancelled',
      startDate: '2023-09-15',
      endDate: '2024-01-20',
      amount: '$49.99',
      billingCycle: 'monthly',
      nextBilling: 'Cancelled',
      paymentMethod: '**** 3456',
      features: ['Advanced Analytics', 'Priority Support']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'expired':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'cancelled':
        return <X className="w-4 h-4 text-red-500" />;
      case 'pending':
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      expired: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      cancelled: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      pending: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getPlanColor = (planType: string) => {
    const colors = {
      basic: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      professional: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
      premium: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      enterprise: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
    };
    return colors[planType as keyof typeof colors] || colors.basic;
  };

  const handleSelectSubscription = (subscriptionId: string) => {
    setSelectedSubscriptions(prev => 
      prev.includes(subscriptionId) 
        ? prev.filter(id => id !== subscriptionId)
        : [...prev, subscriptionId]
    );
  };

  const statusFilters = [
    { value: 'all', label: 'All Subscriptions', count: subscriptions.length },
    { value: 'active', label: 'Active', count: subscriptions.filter(s => s.status === 'active').length },
    { value: 'expired', label: 'Expired', count: subscriptions.filter(s => s.status === 'expired').length },
    { value: 'cancelled', label: 'Cancelled', count: subscriptions.filter(s => s.status === 'cancelled').length },
    { value: 'pending', label: 'Pending', count: subscriptions.filter(s => s.status === 'pending').length }
  ];

  const filteredSubscriptions = filterStatus === 'all' 
    ? subscriptions 
    : subscriptions.filter(subscription => subscription.status === filterStatus);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-400">
      {/* Status Filter Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((filter, index) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom ${
                filterStatus === filter.value
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-medium">{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                filterStatus === filter.value
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Subscriptions List
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredSubscriptions.length} subscriptions
              </span>
              {selectedSubscriptions.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {selectedSubscriptions.length} selected
                  </span>
                  <button className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors">
                    Bulk Actions
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedSubscriptions(filteredSubscriptions.map(s => s.id));
                      } else {
                        setSelectedSubscriptions([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Next Billing
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredSubscriptions.map((subscription, index) => (
                <tr 
                  key={subscription.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                      checked={selectedSubscriptions.includes(subscription.id)}
                      onChange={() => handleSelectSubscription(subscription.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={subscription.customerAvatar}
                          alt={subscription.customerName}
                          className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CreditCard className="w-2 h-2 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {subscription.customerName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {subscription.customerEmail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlanColor(subscription.planType)}`}>
                        {subscription.planName}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {subscription.billingCycle}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(subscription.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(subscription.status)}`}>
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {subscription.amount}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      /{subscription.billingCycle.slice(0, -2)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {subscription.nextBilling}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {subscription.paymentMethod}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => onSelectSubscription(subscription)}
                        className="p-2 text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to {filteredSubscriptions.length} of {filteredSubscriptions.length} subscriptions
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-lg">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                2
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsList;