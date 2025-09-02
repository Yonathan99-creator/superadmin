import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, MapPin, 
  Calendar, Phone, Mail, Shield, Award,
  CheckCircle, Clock, AlertTriangle, Ban,
  Users, Activity, TrendingUp, DollarSign
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  joinDate: string;
  lastActive: string;
  totalAppointments: number;
  totalSpent: string;
  rating: number;
  subscription: string;
  verified: boolean;
  loyaltyTier: 'bronze' | 'silver' | 'gold' | 'platinum';
  referrals: number;
}

interface ClientsListProps {
  onSelectClient: (client: Client) => void;
}

const ClientsList: React.FC<ClientsListProps> = ({ onSelectClient }) => {
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const clients: Client[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2 hours ago',
      totalAppointments: 24,
      totalSpent: '$1,840',
      rating: 4.9,
      subscription: 'Professional Plan',
      verified: true,
      loyaltyTier: 'gold',
      referrals: 3
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Los Angeles, CA',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'active',
      joinDate: '2023-02-20',
      lastActive: '1 hour ago',
      totalAppointments: 18,
      totalSpent: '$1,350',
      rating: 4.8,
      subscription: 'Premium Plan',
      verified: true,
      loyaltyTier: 'silver',
      referrals: 1
    },
    {
      id: '3',
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'pending',
      joinDate: '2024-01-10',
      lastActive: '30 min ago',
      totalAppointments: 3,
      totalSpent: '$225',
      rating: 4.7,
      subscription: 'Basic Plan',
      verified: false,
      loyaltyTier: 'bronze',
      referrals: 0
    },
    {
      id: '4',
      name: 'James Rodriguez',
      email: 'james.rodriguez@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Houston, TX',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'suspended',
      joinDate: '2022-11-05',
      lastActive: '2 days ago',
      totalAppointments: 12,
      totalSpent: '$890',
      rating: 3.2,
      subscription: 'Basic Plan',
      verified: true,
      loyaltyTier: 'bronze',
      referrals: 0
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@email.com',
      phone: '+1 (555) 567-8901',
      location: 'Miami, FL',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'active',
      joinDate: '2023-03-12',
      lastActive: '15 min ago',
      totalAppointments: 31,
      totalSpent: '$2,340',
      rating: 4.9,
      subscription: 'Enterprise Plan',
      verified: true,
      loyaltyTier: 'platinum',
      referrals: 7
    },
    {
      id: '6',
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 678-9012',
      location: 'Seattle, WA',
      avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'inactive',
      joinDate: '2023-06-08',
      lastActive: '1 week ago',
      totalAppointments: 8,
      totalSpent: '$620',
      rating: 4.5,
      subscription: 'Professional Plan',
      verified: true,
      loyaltyTier: 'silver',
      referrals: 2
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'suspended':
        return <Ban className="w-4 h-4 text-red-500" />;
      case 'inactive':
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      suspended: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      inactive: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    };
    return badges[status as keyof typeof badges] || badges.inactive;
  };

  const getLoyaltyColor = (tier: string) => {
    const colors = {
      bronze: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      silver: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
      gold: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      platinum: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    };
    return colors[tier as keyof typeof colors] || colors.bronze;
  };

  const handleSelectClient = (clientId: string) => {
    setSelectedClients(prev => 
      prev.includes(clientId) 
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const statusFilters = [
    { value: 'all', label: 'All Clients', count: clients.length },
    { value: 'active', label: 'Active', count: clients.filter(c => c.status === 'active').length },
    { value: 'pending', label: 'Pending', count: clients.filter(c => c.status === 'pending').length },
    { value: 'inactive', label: 'Inactive', count: clients.filter(c => c.status === 'inactive').length },
    { value: 'suspended', label: 'Suspended', count: clients.filter(c => c.status === 'suspended').length }
  ];

  const filteredClients = filterStatus === 'all' 
    ? clients 
    : clients.filter(client => client.status === filterStatus);

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
                  ? 'bg-cyan-600 text-white shadow-lg'
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

      {/* View Mode Toggle */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Clients Directory ({filteredClients.length} clients)
          </h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 shadow-sm'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 shadow-sm'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="w-4 h-4 flex flex-col space-y-1">
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClients.map((client, index) => (
            <div
              key={client.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Client Header */}
              <div className="relative p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-16 h-16 rounded-full ring-4 ring-white dark:ring-gray-800 group-hover:scale-110 transition-transform duration-300"
                    />
                    {client.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(client.status)}`}>
                      {getStatusIcon(client.status)}
                      <span className="ml-1">{client.status.charAt(0).toUpperCase() + client.status.slice(1)}</span>
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {client.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{client.location}</span>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getLoyaltyColor(client.loyaltyTier)}`}>
                    <Award className="w-3 h-3 mr-1" />
                    {client.loyaltyTier.charAt(0).toUpperCase() + client.loyaltyTier.slice(1)} Member
                  </span>
                </div>
              </div>

              {/* Client Stats */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{client.totalAppointments}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Appointments</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{client.totalSpent}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Total Spent</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{client.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{client.referrals} referrals</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <p>Joined: {new Date(client.joinDate).toLocaleDateString()}</p>
                  <p>Last active: {client.lastActive}</p>
                  <p>Plan: {client.subscription}</p>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => onSelectClient(client)}
                    className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-200 hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                    <Edit className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Table Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Clients List
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredClients.length} clients
                </span>
                {selectedClients.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      {selectedClients.length} selected
                    </span>
                    <button className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors">
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
                      className="rounded border-gray-300 dark:border-gray-600 text-cyan-600 focus:ring-cyan-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedClients(filteredClients.map(c => c.id));
                        } else {
                          setSelectedClients([]);
                        }
                      }}
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredClients.map((client, index) => (
                  <tr 
                    key={client.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 animate-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 dark:border-gray-600 text-cyan-600 focus:ring-cyan-500"
                        checked={selectedClients.includes(client.id)}
                        onChange={() => handleSelectClient(client.id)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={client.avatar}
                            alt={client.name}
                            className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                          />
                          {client.verified && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full flex items-center justify-center">
                              <Shield className="w-2 h-2 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {client.name}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getLoyaltyColor(client.loyaltyTier)}`}>
                              <Award className="w-3 h-3 mr-1" />
                              {client.loyaltyTier}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
                          <Mail className="w-3 h-3" />
                          <span>{client.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
                          <Phone className="w-3 h-3" />
                          <span>{client.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{client.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(client.status)}
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(client.status)}`}>
                          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {client.subscription}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{client.totalAppointments} appointments</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Activity className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{client.lastActive}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3 text-green-500" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{client.totalSpent}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{client.rating} rating</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => onSelectClient(client)}
                          className="p-2 text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-all duration-200 hover:scale-110"
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
                Showing 1 to {filteredClients.length} of {filteredClients.length} clients
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-lg">
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
      )}
    </div>
  );
};

export default ClientsList;