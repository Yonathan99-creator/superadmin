import React, { useState } from 'react';
import { 
  X, Star, MapPin, Phone, Mail, Calendar, 
  DollarSign, Clock, User, Activity, Edit,
  CheckCircle, AlertTriangle, MessageSquare,
  FileText, Download, RefreshCw, Ban
} from 'lucide-react';

interface AppointmentDetailsProps {
  appointment: any;
  onClose: () => void;
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({ appointment, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'details', label: 'Details', icon: FileText },
    { id: 'timeline', label: 'Timeline', icon: Activity },
    { id: 'communication', label: 'Messages', icon: MessageSquare },
    { id: 'billing', label: 'Billing', icon: DollarSign },
  ];

  const timeline = [
    {
      time: '10:25 AM',
      action: 'Patient checked in',
      user: 'Reception Staff',
      type: 'info',
      details: 'Patient arrived 5 minutes early'
    },
    {
      time: '10:30 AM',
      action: 'Appointment started',
      user: appointment.professionalName,
      type: 'success',
      details: 'Consultation began on time'
    },
    {
      time: '10:45 AM',
      action: 'Examination completed',
      user: appointment.professionalName,
      type: 'success',
      details: 'Physical examination and consultation completed'
    },
    {
      time: '11:00 AM',
      action: 'Appointment completed',
      user: appointment.professionalName,
      type: 'success',
      details: 'Patient checked out, follow-up scheduled'
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'Patient',
      message: 'Hi, I need to confirm my appointment for tomorrow at 10:30 AM',
      time: '2 hours ago',
      type: 'incoming'
    },
    {
      id: '2',
      sender: 'System',
      message: 'Appointment confirmed for January 25, 2024 at 10:30 AM with Dr. Michael Chen',
      time: '2 hours ago',
      type: 'system'
    },
    {
      id: '3',
      sender: 'Dr. Michael Chen',
      message: 'Looking forward to seeing you tomorrow. Please bring your insurance card.',
      time: '1 hour ago',
      type: 'outgoing'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'cancelled':
        return <X className="w-5 h-5 text-red-500" />;
      case 'in_progress':
        return <Activity className="w-5 h-5 text-blue-500 animate-pulse" />;
      case 'no_show':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={appointment.patientAvatar}
                  alt={appointment.patientName}
                  className="w-16 h-16 rounded-full ring-4 ring-white/20"
                />
                <div className="absolute -bottom-1 -right-1">
                  {getStatusIcon(appointment.status)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{appointment.patientName}</h2>
                <p className="text-green-100">Appointment with {appointment.professionalName}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-green-200">{appointment.date} at {appointment.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-green-200">{appointment.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
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
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
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
          {activeTab === 'details' && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Patient Information */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Patient Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={appointment.patientAvatar}
                        alt={appointment.patientName}
                        className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{appointment.patientName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Patient ID: #PAT-{appointment.id.padStart(4, '0')}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{appointment.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{appointment.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{appointment.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Appointment Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Service</span>
                      <span className="font-medium text-gray-900 dark:text-white">{appointment.service}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Date & Time</span>
                      <span className="font-medium text-gray-900 dark:text-white">{appointment.date} at {appointment.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Duration</span>
                      <span className="font-medium text-gray-900 dark:text-white">{appointment.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Price</span>
                      <span className="font-medium text-green-600 dark:text-green-400">{appointment.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(appointment.status)}`}>
                        {appointment.status.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                      </span>
                    </div>
                    {appointment.rating && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Rating</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-900 dark:text-white">{appointment.rating}/5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Professional Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={appointment.professionalAvatar}
                        alt={appointment.professionalName}
                        className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{appointment.professionalName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare Professional</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Specialty</span>
                        <span className="font-medium text-gray-900 dark:text-white">Cardiology</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Experience</span>
                        <span className="font-medium text-gray-900 dark:text-white">8 years</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Rating</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-900 dark:text-white">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notes</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {appointment.notes || 'No notes available for this appointment.'}
                      </p>
                    </div>
                    {isEditing && (
                      <textarea
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700"
                        rows={3}
                        placeholder="Add notes..."
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Appointment Timeline</h3>
              <div className="space-y-4">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl animate-in slide-in-from-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      event.type === 'success' ? 'bg-green-500' :
                      event.type === 'warning' ? 'bg-yellow-500' :
                      event.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{event.action}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{event.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.details}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">by {event.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'communication' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Messages</h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Send Message
                </button>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-xl animate-in slide-in-from-bottom ${
                      message.type === 'incoming' ? 'bg-blue-50 dark:bg-blue-900/20 ml-8' :
                      message.type === 'outgoing' ? 'bg-green-50 dark:bg-green-900/20 mr-8' :
                      'bg-gray-50 dark:bg-gray-700/50 mx-4'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {message.sender}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Billing Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Payment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Service Fee</span>
                      <span className="font-medium text-gray-900 dark:text-white">{appointment.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Platform Fee</span>
                      <span className="font-medium text-gray-900 dark:text-white">$5.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax</span>
                      <span className="font-medium text-gray-900 dark:text-white">$6.00</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">Total</span>
                        <span className="font-bold text-green-600 dark:text-green-400">
                          ${(parseInt(appointment.price.replace('$', '')) + 11).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Payment Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Payment Completed</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <p>Payment Method: **** 4242</p>
                      <p>Transaction ID: TXN-{appointment.id}-2024</p>
                      <p>Processed: {appointment.date} at {appointment.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                Download Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Reminder
              </button>
              {appointment.status === 'pending' && (
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Confirm Appointment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;