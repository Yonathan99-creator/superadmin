import React, { useState } from 'react';
import { 
  X, Star, DollarSign, Calendar, CreditCard, 
  Edit, Ban, CheckCircle, AlertTriangle,
  Activity, TrendingUp, Settings, Eye,
  Award, Shield, Zap, Clock, User, Mail, Phone
} from 'lucide-react';

interface SubscriptionDetailsProps {
  subscription: any;
  onClose: () => void;
}

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({ subscription, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'billing', label: 'Billing History', icon: CreditCard },
    { id: 'usage', label: 'Usage Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const billingHistory = [
    { date: '2024-01-15', amount: '$49.99', status: 'paid', invoice: 'INV-2024-001', method: '**** 4242' },
    { date: '2023-12-15', amount: '$49.99', status: 'paid', invoice: 'INV-2023-012', method: '**** 4242' },
    { date: '2023-11-15', amount: '$49.99', status: 'paid', invoice: 'INV-2023-011', method: '**** 4242' },
    { date: '2023-10-15', amount: '$49.99', status: 'failed', invoice: 'INV-2023-010', method: '**** 4242' },
  ];

  const usageMetrics = [
    { metric: 'API Calls', current: 8450, limit: 10000, percentage: 84.5 },
    { metric: 'Storage Used', current: 2.3, limit: 5, percentage: 46, unit: 'GB' },
    { metric: 'Team Members', current: 8, limit: 15, percentage: 53.3 },
    { metric: 'Projects', current: 12, limit: 25, percentage: 48 },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={subscription.customerAvatar}
                  alt={subscription.customerName}
                  className="w-16 h-16 rounded-full ring-4 ring-white/20"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <CreditCard className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{subscription.customerName}</h2>
                <p className="text-emerald-100">{subscription.planName}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-medium">{subscription.amount}</span>
                    <span className="text-emerald-200">/{subscription.billingCycle.slice(0, -2)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-emerald-200">Next: {subscription.nextBilling}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1 p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Customer Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Customer Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{subscription.customerName}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{subscription.customerEmail}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">Member since {subscription.startDate}</span>
                    </div>
                  </div>
                </div>

                {/* Subscription Status */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscription Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        subscription.status === 'active' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : subscription.status === 'expired'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      }`}>
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Plan</span>
                      <span className="font-medium text-gray-900 dark:text-white">{subscription.planName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Billing Cycle</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{subscription.billingCycle}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Next Billing</span>
                      <span className="font-medium text-gray-900 dark:text-white">{subscription.nextBilling}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      <Edit className="w-4 h-4" />
                      <span>Edit Subscription</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Shield className="w-4 h-4" />
                      <span>Update Payment</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Ban className="w-4 h-4" />
                      <span>Cancel Subscription</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Plan Details & Features */}
              <div className="lg:col-span-2 space-y-6">
                {/* Plan Features */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Plan Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {subscription.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-white dark:bg-gray-600 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-900 dark:text-white">Payment Method</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{subscription.paymentMethod}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="font-medium text-gray-900 dark:text-white">Amount</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{subscription.amount} / {subscription.billingCycle.slice(0, -2)}</p>
                    </div>
                  </div>
                </div>

                {/* Subscription Timeline */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscription Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Subscription Started</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{subscription.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Current Period</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Active until {subscription.endDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Billing History</h3>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 dark:bg-gray-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Invoice</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {billingHistory.map((bill, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{bill.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{bill.invoice}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{bill.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            bill.status === 'paid' 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                          }`}>
                            {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{bill.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Usage Analytics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {usageMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">{metric.metric}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {metric.current}{metric.unit || ''} / {metric.limit}{metric.unit || ''}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          metric.percentage > 80 ? 'bg-red-500' :
                          metric.percentage > 60 ? 'bg-yellow-500' :
                          'bg-emerald-500'
                        }`}
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {metric.percentage.toFixed(1)}% used
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Subscription Settings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Plan Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700">
                      <option>Basic Plan</option>
                      <option selected>Professional Plan</option>
                      <option>Premium Plan</option>
                      <option>Enterprise Plan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Billing Cycle
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700">
                      <option selected>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="autoRenew"
                      checked
                      className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="autoRenew" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Auto-renewal enabled
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked
                      className="rounded border-gray-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="notifications" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email notifications
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;