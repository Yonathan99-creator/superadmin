import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, MapPin, 
  Calendar, Phone, Mail, Clock, CheckCircle,
  AlertTriangle, X, User, DollarSign, Activity
} from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  patientAvatar: string;
  professionalName: string;
  professionalAvatar: string;
  service: string;
  date: string;
  time: string;
  duration: string;
  status: 'completed' | 'pending' | 'cancelled' | 'in_progress' | 'no_show';
  price: string;
  rating?: number;
  notes?: string;
  location: string;
  phone: string;
  email: string;
}

interface AppointmentsListProps {
  onSelectAppointment: (appointment: Appointment) => void;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ onSelectAppointment }) => {
  const [selectedAppointments, setSelectedAppointments] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Sarah Johnson',
      patientAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Michael Chen',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'General Consultation',
      date: '2024-01-25',
      time: '10:30 AM',
      duration: '30 min',
      status: 'completed',
      price: '$75',
      rating: 5,
      location: 'New York, NY',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
      notes: 'Regular checkup, patient reported feeling well'
    },
    {
      id: '2',
      patientName: 'Michael Rodriguez',
      patientAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Emma Wilson',
      professionalAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Cardiac Screening',
      date: '2024-01-25',
      time: '2:00 PM',
      duration: '45 min',
      status: 'in_progress',
      price: '$150',
      location: 'Los Angeles, CA',
      phone: '+1 (555) 234-5678',
      email: 'michael.rodriguez@email.com',
      notes: 'Follow-up cardiac screening, previous results normal'
    },
    {
      id: '3',
      patientName: 'Lisa Thompson',
      patientAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. James Wilson',
      professionalAvatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Dental Cleaning',
      date: '2024-01-25',
      time: '4:30 PM',
      duration: '45 min',
      status: 'pending',
      price: '$120',
      location: 'Chicago, IL',
      phone: '+1 (555) 345-6789',
      email: 'lisa.thompson@email.com',
      notes: 'Routine dental cleaning and checkup'
    },
    {
      id: '4',
      patientName: 'David Kim',
      patientAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Sarah Martinez',
      professionalAvatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Physical Therapy',
      date: '2024-01-24',
      time: '11:00 AM',
      duration: '60 min',
      status: 'cancelled',
      price: '$90',
      location: 'Houston, TX',
      phone: '+1 (555) 456-7890',
      email: 'david.kim@email.com',
      notes: 'Patient cancelled due to scheduling conflict'
    },
    {
      id: '5',
      patientName: 'Amanda Garcia',
      patientAvatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Robert Johnson',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Mental Health Counseling',
      date: '2024-01-24',
      time: '3:00 PM',
      duration: '50 min',
      status: 'no_show',
      price: '$110',
      location: 'Phoenix, AZ',
      phone: '+1 (555) 567-8901',
      email: 'amanda.garcia@email.com',
      notes: 'Patient did not show up for scheduled appointment'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'cancelled':
        return <X className="w-4 h-4 text-red-500" />;
      case 'in_progress':
        return <Activity className="w-4 h-4 text-blue-500 animate-pulse" />;
      case 'no_show':
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      completed: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      cancelled: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      in_progress: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      no_show: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getStatusText = (status: string) => {
    const texts = {
      completed: 'Completed',
      pending: 'Pending',
      cancelled: 'Cancelled',
      in_progress: 'In Progress',
      no_show: 'No Show'
    };
    return texts[status as keyof typeof texts] || 'Unknown';
  };

  const handleSelectAppointment = (appointmentId: string) => {
    setSelectedAppointments(prev => 
      prev.includes(appointmentId) 
        ? prev.filter(id => id !== appointmentId)
        : [...prev, appointmentId]
    );
  };

  const statusFilters = [
    { value: 'all', label: 'All Appointments', count: appointments.length },
    { value: 'completed', label: 'Completed', count: appointments.filter(a => a.status === 'completed').length },
    { value: 'pending', label: 'Pending', count: appointments.filter(a => a.status === 'pending').length },
    { value: 'in_progress', label: 'In Progress', count: appointments.filter(a => a.status === 'in_progress').length },
    { value: 'cancelled', label: 'Cancelled', count: appointments.filter(a => a.status === 'cancelled').length },
    { value: 'no_show', label: 'No Show', count: appointments.filter(a => a.status === 'no_show').length }
  ];

  const filteredAppointments = filterStatus === 'all' 
    ? appointments 
    : appointments.filter(appointment => appointment.status === filterStatus);

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
                  ? 'bg-green-600 text-white shadow-lg'
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

      {/* Appointments Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Table Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Appointments List
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredAppointments.length} appointments
              </span>
              {selectedAppointments.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {selectedAppointments.length} selected
                  </span>
                  <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
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
                    className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAppointments(filteredAppointments.map(a => a.id));
                      } else {
                        setSelectedAppointments([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Professional
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAppointments.map((appointment, index) => (
                <tr 
                  key={appointment.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                      checked={selectedAppointments.includes(appointment.id)}
                      onChange={() => handleSelectAppointment(appointment.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={appointment.patientAvatar}
                          alt={appointment.patientName}
                          className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-2 h-2 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.patientName}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <Phone className="w-3 h-3" />
                          <span>{appointment.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={appointment.professionalAvatar}
                        alt={appointment.professionalName}
                        className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.professionalName}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                      {appointment.service}
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {appointment.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {new Date(appointment.date).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {appointment.time}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(appointment.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(appointment.status)}`}>
                        {getStatusText(appointment.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {appointment.price}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {appointment.rating ? (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.rating}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">No rating</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => onSelectAppointment(appointment)}
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
              Showing 1 to {filteredAppointments.length} of {filteredAppointments.length} appointments
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg">
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

export default AppointmentsList;