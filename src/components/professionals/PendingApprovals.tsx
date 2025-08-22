import React, { useState } from 'react';
import { 
  Clock, CheckCircle, X, Eye, FileText, 
  Shield, Award, AlertTriangle, User,
  Calendar, MapPin, Star, Phone, Mail
} from 'lucide-react';

const PendingApprovals: React.FC = () => {
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  const pendingApplications = [
    {
      id: '1',
      name: 'Dr. Amanda Rodriguez',
      specialty: 'Pediatrics',
      location: 'Boston, MA',
      appliedDate: '2024-01-15',
      documents: ['Medical License', 'CV', 'Certifications', 'References'],
      status: 'under_review',
      avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      phone: '+1 (555) 123-4567',
      email: 'amanda.rodriguez@email.com',
      experience: '8 years',
      education: 'Harvard Medical School',
      previousRating: 4.7,
      urgency: 'high'
    },
    {
      id: '2',
      name: 'Dr. Robert Kim',
      specialty: 'Orthopedics',
      location: 'Seattle, WA',
      appliedDate: '2024-01-18',
      documents: ['Medical License', 'CV', 'Certifications'],
      status: 'pending_documents',
      avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      phone: '+1 (555) 234-5678',
      email: 'robert.kim@email.com',
      experience: '12 years',
      education: 'Johns Hopkins University',
      previousRating: 4.9,
      urgency: 'medium'
    },
    {
      id: '3',
      name: 'Dr. Maria Santos',
      specialty: 'Neurology',
      location: 'Phoenix, AZ',
      appliedDate: '2024-01-20',
      documents: ['Medical License', 'CV', 'Certifications', 'References', 'Background Check'],
      status: 'ready_for_approval',
      avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      phone: '+1 (555) 345-6789',
      email: 'maria.santos@email.com',
      experience: '15 years',
      education: 'Stanford Medical School',
      previousRating: 4.8,
      urgency: 'high'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'under_review':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'pending_documents':
        return <FileText className="w-4 h-4 text-orange-500" />;
      case 'ready_for_approval':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      under_review: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      pending_documents: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      ready_for_approval: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/10';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10';
      default:
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/10';
    }
  };

  const handleApprove = (applicationId: string) => {
    console.log('Approving application:', applicationId);
    // Handle approval logic
  };

  const handleReject = (applicationId: string) => {
    console.log('Rejecting application:', applicationId);
    // Handle rejection logic
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-700">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">23</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Total Pending</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Applications awaiting review</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">8</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Ready to Approve</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Complete applications</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Missing Documents</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Incomplete applications</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">3</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Under Review</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Currently being reviewed</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pending Applications</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Review and approve new professional registrations</p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {pendingApplications.map((application, index) => (
            <div
              key={application.id}
              className={`p-6 border-l-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 animate-in slide-in-from-left ${getUrgencyColor(application.urgency)}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={application.avatar}
                      alt={application.name}
                      className="w-16 h-16 rounded-full ring-4 ring-white dark:ring-gray-800"
                    />
                    <div className="absolute -bottom-1 -right-1">
                      {getStatusIcon(application.status)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {application.name}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(application.status)}`}>
                        {application.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      {application.urgency === 'high' && (
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                          High Priority
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>{application.specialty}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Applied {application.appliedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{application.experience} experience</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{application.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{application.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {application.previousRating} previous rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedApplication(application)}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  
                  {application.status === 'ready_for_approval' && (
                    <>
                      <button
                        onClick={() => handleApprove(application.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleReject(application.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105"
                      >
                        <X className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </>
                  )}
                  
                  {application.status !== 'ready_for_approval' && (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                      <FileText className="w-4 h-4" />
                      <span>Review</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Documents Status */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Documents:</span>
                  <div className="flex space-x-2">
                    {application.documents.map((doc, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Application Review - {selectedApplication.name}
                </h3>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {selectedApplication.name}</p>
                    <p><span className="font-medium">Specialty:</span> {selectedApplication.specialty}</p>
                    <p><span className="font-medium">Location:</span> {selectedApplication.location}</p>
                    <p><span className="font-medium">Experience:</span> {selectedApplication.experience}</p>
                    <p><span className="font-medium">Education:</span> {selectedApplication.education}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Application Status</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Applied:</span> {selectedApplication.appliedDate}</p>
                    <p><span className="font-medium">Status:</span> {selectedApplication.status}</p>
                    <p><span className="font-medium">Documents:</span> {selectedApplication.documents.length} submitted</p>
                    <p><span className="font-medium">Previous Rating:</span> {selectedApplication.previousRating}/5.0</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => handleReject(selectedApplication.id)}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleApprove(selectedApplication.id)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve Application
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

export default PendingApprovals;