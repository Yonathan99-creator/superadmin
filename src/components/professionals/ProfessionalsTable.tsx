import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, MapPin, 
  Calendar, Phone, Mail, Shield, Award,
  CheckCircle, Clock, AlertTriangle, Ban
} from 'lucide-react';

interface Professional {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  status: 'active' | 'pending' | 'suspended' | 'inactive';
  joinDate: string;
  lastActive: string;
  avatar: string;
  verified: boolean;
  appointments: number;
  revenue: string;
  phone: string;
  email: string;
  services: string[];
}

interface ProfessionalsTableProps {
  onSelectProfessional: (professional: Professional) => void;
}

const ProfessionalsTable: React.FC<ProfessionalsTableProps> = ({ onSelectProfessional }) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedProfessionals, setSelectedProfessionals] = useState<string[]>([]);

  const professionals: Professional[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 247,
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: true,
      appointments: 1247,
      revenue: '$24,580',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
      services: ['Consultation', 'ECG', 'Stress Test']
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      location: 'Los Angeles, CA',
      rating: 4.8,
      reviews: 189,
      status: 'active',
      joinDate: '2023-02-20',
      lastActive: '1 hour ago',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: true,
      appointments: 892,
      revenue: '$18,940',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@email.com',
      services: ['Skin Analysis', 'Treatment', 'Cosmetic Procedures']
    },
    {
      id: '3',
      name: 'Dr. Emma Wilson',
      specialty: 'Psychology',
      location: 'Chicago, IL',
      rating: 4.7,
      reviews: 156,
      status: 'pending',
      joinDate: '2024-01-10',
      lastActive: '30 min ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: false,
      appointments: 234,
      revenue: '$8,760',
      phone: '+1 (555) 345-6789',
      email: 'emma.wilson@email.com',
      services: ['Therapy Sessions', 'Counseling', 'Group Therapy']
    },
    {
      id: '4',
      name: 'Dr. James Rodriguez',
      specialty: 'General Medicine',
      location: 'Houston, TX',
      rating: 4.6,
      reviews: 203,
      status: 'suspended',
      joinDate: '2022-11-05',
      lastActive: '2 days ago',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: true,
      appointments: 567,
      revenue: '$12,340',
      phone: '+1 (555) 456-7890',
      email: 'james.rodriguez@email.com',
      services: ['General Consultation', 'Health Checkup', 'Vaccination']
    },
    {
      id: '5',
      name: 'Dr. Lisa Thompson',
      specialty: 'Dentistry',
      location: 'Miami, FL',
      rating: 4.9,
      reviews: 312,
      status: 'active',
      joinDate: '2023-03-12',
      lastActive: '15 min ago',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: true,
      appointments: 1456,
      revenue: '$32,180',
      phone: '+1 (555) 567-8901',
      email: 'lisa.thompson@email.com',
      services: ['Cleaning', 'Whitening', 'Root Canal', 'Implants']
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
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
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

  const handleSelectProfessional = (professionalId: string) => {
    setSelectedProfessionals(prev => 
      prev.includes(professionalId) 
        ? prev.filter(id => id !== professionalId)
        : [...prev, professionalId]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom duration-700 delay-400">
      {/* Table Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            All Professionals
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {professionals.length} professionals
            </span>
            {selectedProfessionals.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {selectedProfessionals.length} selected
                </span>
                <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
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
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProfessionals(professionals.map(p => p.id));
                    } else {
                      setSelectedProfessionals([]);
                    }
                  }}
                />
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Professional
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Specialty
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Appointments
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Last Active
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {professionals.map((professional, index) => (
              <tr 
                key={professional.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                    checked={selectedProfessionals.includes(professional.id)}
                    onChange={() => handleSelectProfessional(professional.id)}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={professional.avatar}
                        alt={professional.name}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      {professional.verified && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <Shield className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {professional.name}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{professional.location}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                    {professional.specialty}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {professional.rating}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({professional.reviews})
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(professional.status)}
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(professional.status)}`}>
                      {professional.status.charAt(0).toUpperCase() + professional.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {professional.appointments.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {professional.revenue}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {professional.lastActive}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onSelectProfessional(professional)}
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200 hover:scale-110">
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
            Showing 1 to {professionals.length} of {professionals.length} professionals
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
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
  );
};

export default ProfessionalsTable;