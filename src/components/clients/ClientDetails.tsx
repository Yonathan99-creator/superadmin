import React, { useState } from 'react';
import { 
  X, Star, MapPin, Phone, Mail, Calendar, 
  DollarSign, Users, Clock, Award, Shield,
  Edit, Ban, CheckCircle, AlertTriangle,
  Activity, TrendingUp, Settings, Eye,
  CreditCard, Heart, MessageSquare, FileText
} from 'lucide-react';

interface ClientDetailsProps {
  client: any;
  onClose: () => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'billing', label: 'Billing History', icon: CreditCard },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const appointmentHistory = [
    {
      id: '1',
      service: 'General Consultation',
      professional: 'Dr. Sarah Johnson',
      date: '2024-01-20',
      time: '10:30 AM',
      status: 'completed',
      amount: '$75',
      rating: 5
    },
    {
      id: '2',
      service: 'Cardiac Screening',
      professional: 'Dr. Michael Chen',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'completed',
      amount: '$150',
      rating: 5
    },
    {
      id: '3',
      service: 'Physical Therapy',
      professional: 'Dr. Emma Wilson',
      date: '2024-01-10',
      time: '4:30 PM',
      status: 'completed',
      amount: '$90',
      rating: 4
    },
    {
      id: '4',
      service: 'Dental Cleaning',
      professional: 'Dr. James Wilson',
      date: '2024-01-25',
      time: '11:00 AM',
      status: 'upcoming',
      amount: '$120',
      rating: null
    }
  ];

  const billingHistory = [
    { date: '2024-01-20', description: 'General Consultation', amount: '$75.00', status: 'paid', method: '**** 4242' },
    { date: '2024-01-15', description: 'Cardiac Screening', amount: '$150.00', status: 'paid', method: '**** 4242' },
    { date: '2024-01-10', description: 'Physical Therapy', amount: '$90.00', status: 'paid', method: '**** 4242' },
    { date: '2024-01-05', description: 'Professional Plan Subscription', amount: '$49.99', status: 'paid', method: '**** 4242' },
    { date: '2023-12-20', description: 'Mental Health Counseling', amount: '$110.00', status: 'refunded', method: '**** 4242' }
  ];

  const communications = [
    {
      id: '1',
      type: 'email',
      subject: 'Appointment Confirmation',
      content: 'Your appointment with Dr. Sarah Johnson has been confirmed for January 25th at 10:30 AM.',
      timestamp: '2024-01-24 14:30',
      status: 'sent'
    },
    {
      id: '2',
      type: 'sms',
      subject: 'Appointment Reminder',
      content: 'Reminder: You have an appointment tomorrow at 10:30 AM with Dr. Sarah Johnson.',
      timestamp: '2024-01-24 18:00',
      status: 'delivered'
    },
    {
      id: '3',
      type: 'email',
      subject: 'Welcome to ProBooking',
      content: 'Welcome to ProBooking! We\'re excited to have you as part of our healthcare community.',
      timestamp: '2024-01-15 09:00',
      status: 'opened'
    }
  ];

  const clientMetrics = [
    { metric: 'Total Appointments', value: client.totalAppointments, trend: '+12%', color: 'blue' },
    { metric: 'Total Spent', value: client.totalSpent, trend: '+18%', color: 'green' },
    { metric: 'Average Rating', value: client.rating, trend: '+0.2', color: 'yellow' },
    { metric: 'Referrals Made', value: client.referrals, trend: '+2', color: 'purple' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-16 h-16 rounded-full ring-4 ring-white/20"
                />
                {client.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-cyan-600" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{client.name}</h2>
                <p className="text-cyan-100">{client.subscription}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{client.rating}</span>
                    <span className="text-cyan-200">rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-cyan-200">{client.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-cyan-200 capitalize">{client.loyaltyTier} Member</span>
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
                      ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
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
              {/* Left Column - Client Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contact Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{client.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{client.location}</span>
                    </div>
                  </div>
                </div>

                {/* Account Status */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        client.status === 'active' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : client.status === 'pending'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      }`}>
                        {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Verified</span>
                      <span className={`flex items-center space-x-1 ${
                        client.verified ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {client.verified ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        <span className="text-xs font-medium">
                          {client.verified ? 'Verified' : 'Pending'}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Loyalty Tier</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{client.loyaltyTier}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                      <Edit className="w-4 h-4" />
                      <span>Edit Client</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Ban className="w-4 h-4" />
                      <span>Suspend Account</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Activity */}
              <div className="lg:col-span-2 space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {clientMetrics.map((metric, index) => (
                    <div key={metric.metric} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
                      <div className={`text-xs font-medium mt-1 ${
                        metric.trend.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {metric.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Journey Timeline */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Client Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Account Created</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Joined ProBooking platform</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{client.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">First Appointment</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Booked first healthcare service</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">3 days after registration</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Subscription Upgrade</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Upgraded to {client.subscription}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">2 weeks after first appointment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Current Status</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Active {client.loyaltyTier} member</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Last active: {client.lastActive}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Appointment History</h3>
              <div className="space-y-4">
                {appointmentHistory.map((appointment, index) => (
                  <div key={appointment.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{appointment.service}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                            appointment.status === 'upcoming' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          }`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          with {appointment.professional} • {appointment.date} at {appointment.time}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{appointment.amount}</span>
                          </div>
                          {appointment.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{appointment.rating}/5</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {billingHistory.map((bill, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{bill.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{bill.description}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{bill.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            bill.status === 'paid' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                            bill.status === 'refunded' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                            'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
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

          {activeTab === 'communications' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Communication History</h3>
              <div className="space-y-4">
                {communications.map((comm, index) => (
                  <div key={comm.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        comm.type === 'email' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                        'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      }`}>
                        {comm.type === 'email' ? <Mail className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{comm.subject}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            comm.status === 'sent' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                            comm.status === 'delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                            'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                          }`}>
                            {comm.status.charAt(0).toUpperCase() + comm.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{comm.content}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{comm.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Client Settings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={client.name}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={client.email}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={client.phone}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Status
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700">
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Loyalty Tier
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700">
                      <option value="bronze">Bronze</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="platinum">Platinum</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="verified"
                      checked={client.verified}
                      className="rounded border-gray-300 dark:border-gray-600 text-cyan-600 focus:ring-cyan-500"
                    />
                    <label htmlFor="verified" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Verified Account
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
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

export default ClientDetails;