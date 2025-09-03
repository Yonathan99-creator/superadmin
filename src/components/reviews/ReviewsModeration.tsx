import React, { useState } from 'react';
import { 
  Shield, Flag, CheckCircle, X, Eye, 
  AlertTriangle, Clock, Star, MessageSquare,
  ThumbsUp, ThumbsDown, Edit, Ban, Award,
  User, Calendar, TrendingUp, Activity
} from 'lucide-react';

interface ModerationItem {
  id: string;
  type: 'new_review' | 'flagged_review' | 'reported_review' | 'appeal';
  customerName: string;
  customerAvatar: string;
  professionalName: string;
  professionalAvatar: string;
  service: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  reason?: string;
  reports?: number;
  autoFlags?: string[];
}

const ReviewsModeration: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const moderationQueue: ModerationItem[] = [
    {
      id: '1',
      type: 'flagged_review',
      customerName: 'John Smith',
      customerAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Emma Wilson',
      professionalAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Mental Health Counseling',
      rating: 1,
      title: 'Terrible experience',
      content: 'This was the worst consultation I have ever had. The doctor was unprofessional and seemed distracted throughout the session. I would not recommend this service to anyone.',
      date: '2024-01-25',
      priority: 'high',
      reason: 'Inappropriate language detected',
      reports: 3,
      autoFlags: ['Negative sentiment', 'Potential defamation']
    },
    {
      id: '2',
      type: 'new_review',
      customerName: 'Maria Garcia',
      customerAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Sarah Johnson',
      professionalAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Cardiology Consultation',
      rating: 5,
      title: 'Outstanding cardiac care',
      content: 'Dr. Johnson provided exceptional care during my cardiac consultation. Her expertise and compassionate approach made me feel confident about my treatment plan.',
      date: '2024-01-25',
      priority: 'low',
      autoFlags: []
    },
    {
      id: '3',
      type: 'reported_review',
      customerName: 'David Wilson',
      customerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Michael Chen',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Dermatology Consultation',
      rating: 2,
      title: 'Questionable diagnosis',
      content: 'I am not satisfied with the diagnosis provided. The doctor seemed rushed and did not thoroughly examine my condition. I think a second opinion is necessary.',
      date: '2024-01-24',
      priority: 'medium',
      reason: 'Disputed medical advice',
      reports: 1,
      autoFlags: ['Medical dispute']
    },
    {
      id: '4',
      type: 'appeal',
      customerName: 'Lisa Thompson',
      customerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. James Rodriguez',
      professionalAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Physical Therapy',
      rating: 4,
      title: 'Good therapy but room for improvement',
      content: 'The physical therapy sessions were helpful, but I felt the treatment plan could have been more personalized. Overall satisfied with the progress made.',
      date: '2024-01-23',
      priority: 'low',
      reason: 'Appeal for review restoration'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new_review':
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'flagged_review':
        return <Flag className="w-5 h-5 text-red-500" />;
      case 'reported_review':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'appeal':
        return <Shield className="w-5 h-5 text-purple-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      new_review: 'New Review',
      flagged_review: 'Flagged Review',
      reported_review: 'Reported Review',
      appeal: 'Appeal Request'
    };
    return labels[type as keyof typeof labels] || 'Unknown';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/10';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10';
      default:
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/10';
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 5) return 'text-green-500';
    if (rating >= 4) return 'text-lime-500';
    if (rating >= 3) return 'text-yellow-500';
    if (rating >= 2) return 'text-orange-500';
    return 'text-red-500';
  };

  const handleApprove = (itemId: string) => {
    console.log('Approving item:', itemId);
  };

  const handleReject = (itemId: string) => {
    console.log('Rejecting item:', itemId);
  };

  const handleFlag = (itemId: string) => {
    console.log('Flagging item:', itemId);
  };

  const typeFilters = [
    { value: 'all', label: 'All Items', count: moderationQueue.length },
    { value: 'new_review', label: 'New Reviews', count: moderationQueue.filter(i => i.type === 'new_review').length },
    { value: 'flagged_review', label: 'Flagged', count: moderationQueue.filter(i => i.type === 'flagged_review').length },
    { value: 'reported_review', label: 'Reported', count: moderationQueue.filter(i => i.type === 'reported_review').length },
    { value: 'appeal', label: 'Appeals', count: moderationQueue.filter(i => i.type === 'appeal').length }
  ];

  const filteredItems = moderationQueue.filter(item => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesPriority = filterPriority === 'all' || item.priority === filterPriority;
    return matchesType && matchesPriority;
  });

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-700">
      {/* Moderation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <Flag className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {moderationQueue.filter(i => i.type === 'flagged_review').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Flagged Reviews</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Require immediate attention</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
              <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {moderationQueue.filter(i => i.type === 'new_review').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Pending Reviews</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Awaiting moderation</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {moderationQueue.filter(i => i.type === 'reported_review').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Reported Reviews</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">User reports</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {moderationQueue.filter(i => i.type === 'appeal').length}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">Appeals</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Review appeals</p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Type Filters */}
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter, index) => (
              <button
                key={filter.value}
                onClick={() => setFilterType(filter.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom ${
                  filterType === filter.value
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{filter.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  filterType === filter.value
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Priority Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority:</span>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Moderation Queue */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Moderation Queue
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredItems.length} items
              </span>
              {selectedItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    {selectedItems.length} selected
                  </span>
                  <button className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-sm font-medium hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors">
                    Bulk Actions
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 border-l-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 animate-in slide-in-from-left ${getPriorityColor(item.priority)}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Type Icon */}
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(item.type)}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {getTypeLabel(item.type)}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                        item.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                        'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      }`}>
                        {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)} Priority
                      </span>
                      {item.reports && item.reports > 0 && (
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                          {item.reports} reports
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                  </div>

                  {/* Customer and Professional Info */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.customerAvatar}
                        alt={item.customerName}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.customerName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Customer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.professionalAvatar}
                        alt={item.professionalName}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.professionalName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.service}</p>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating 
                                ? `${getRatingColor(item.rating)} fill-current` 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.rating}/5
                      </span>
                    </div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                      {item.content}
                    </p>
                  </div>

                  {/* Auto Flags */}
                  {item.autoFlags && item.autoFlags.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Auto-detected Issues:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.autoFlags.map((flag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs">
                            {flag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reason */}
                  {item.reason && (
                    <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        Reason: {item.reason}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Approve</span>
                  </button>
                  <button
                    onClick={() => handleFlag(item.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-200 hover:scale-105"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Flag</span>
                  </button>
                  <button
                    onClick={() => handleReject(item.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105"
                  >
                    <X className="w-4 h-4" />
                    <span>Reject</span>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Actions Footer */}
        {selectedItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {selectedItems.length} items selected
              </span>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Bulk Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Bulk Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsModeration;