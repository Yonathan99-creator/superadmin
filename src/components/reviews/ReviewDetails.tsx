import React, { useState } from 'react';
import { 
  X, Star, ThumbsUp, ThumbsDown, Flag, 
  Edit, Ban, CheckCircle, AlertTriangle,
  Activity, TrendingUp, Settings, Eye,
  Award, Shield, MessageSquare, Calendar,
  User, Mail, Phone, MapPin, Clock
} from 'lucide-react';

interface ReviewDetailsProps {
  review: any;
  onClose: () => void;
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({ review, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [moderationAction, setModerationAction] = useState('');

  const tabs = [
    { id: 'details', label: 'Review Details', icon: Eye },
    { id: 'moderation', label: 'Moderation', icon: Shield },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'history', label: 'History', icon: Clock },
  ];

  const moderationHistory = [
    {
      action: 'Review submitted',
      user: review.customerName,
      timestamp: '2024-01-25 14:30',
      details: 'Customer submitted review after appointment completion'
    },
    {
      action: 'Auto-moderation passed',
      user: 'System',
      timestamp: '2024-01-25 14:31',
      details: 'Automated content filtering completed successfully'
    },
    {
      action: 'Review approved',
      user: 'Admin User',
      timestamp: '2024-01-25 14:45',
      details: 'Manual review completed and approved for publication'
    },
    {
      action: 'Professional responded',
      user: review.professionalName,
      timestamp: '2024-01-25 16:20',
      details: 'Healthcare professional provided response to review'
    }
  ];

  const relatedReviews = [
    {
      id: '1',
      customer: 'John Smith',
      rating: 5,
      service: 'General Consultation',
      date: '2024-01-20',
      content: 'Excellent service from Dr. Chen. Very professional and thorough.',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '2',
      customer: 'Mary Johnson',
      rating: 4,
      service: 'Follow-up Consultation',
      date: '2024-01-18',
      content: 'Good follow-up care. Dr. Chen was attentive to my concerns.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 5) return 'text-green-500';
    if (rating >= 4) return 'text-lime-500';
    if (rating >= 3) return 'text-yellow-500';
    if (rating >= 2) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={review.customerAvatar}
                  alt={review.customerName}
                  className="w-16 h-16 rounded-full ring-4 ring-white/20"
                />
                {review.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{review.customerName}</h2>
                <p className="text-yellow-100">Review for {review.professionalName}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? 'text-white fill-current' 
                              : 'text-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-yellow-200">{review.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-yellow-200">{review.service}</span>
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
                      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
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
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Review Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Review Content */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {review.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {review.content}
                  </p>
                  
                  {/* Review Engagement */}
                  <div className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2">
                      <ThumbsUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.helpful} found helpful
                      </span>
                    </div>
                    {review.reported > 0 && (
                      <div className="flex items-center space-x-2">
                        <Flag className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-600 dark:text-red-400">
                          {review.reported} reports
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Professional Response */}
                {review.response && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={review.professionalAvatar}
                        alt={review.professionalName}
                        className="w-10 h-10 rounded-full ring-2 ring-blue-200 dark:ring-blue-600"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {review.response.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Responded on {review.response.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {review.response.content}
                    </p>
                  </div>
                )}

                {/* Related Reviews */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Other Reviews for {review.professionalName}
                  </h3>
                  <div className="space-y-3">
                    {relatedReviews.map((relatedReview, index) => (
                      <div key={relatedReview.id} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <img
                          src={relatedReview.avatar}
                          alt={relatedReview.customer}
                          className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {relatedReview.customer}
                            </p>
                            <div className="flex space-x-0.5">
                              {[...Array(relatedReview.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            {relatedReview.service} • {relatedReview.date}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {relatedReview.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Customer & Professional Info */}
              <div className="space-y-6">
                {/* Customer Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.customerAvatar}
                        alt={review.customerName}
                        className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{review.customerName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Customer since 2023</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">12 total reviews</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-600 dark:text-gray-300">4.6 average rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">Verified customer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.professionalAvatar}
                        alt={review.professionalName}
                        className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{review.professionalName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare Professional</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Total Reviews</span>
                        <span className="font-medium text-gray-900 dark:text-white">247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Average Rating</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-900 dark:text-white">4.9</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Response Rate</span>
                        <span className="font-medium text-gray-900 dark:text-white">96%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      <span>Approve Review</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                      <Flag className="w-4 h-4" />
                      <span>Flag for Review</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Ban className="w-4 h-4" />
                      <span>Reject Review</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'moderation' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Moderation Tools</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Moderation Action
                    </label>
                    <select 
                      value={moderationAction}
                      onChange={(e) => setModerationAction(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-gray-700"
                    >
                      <option value="">Select action...</option>
                      <option value="approve">Approve Review</option>
                      <option value="reject">Reject Review</option>
                      <option value="flag">Flag for Further Review</option>
                      <option value="edit">Request Edit</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Moderation Notes
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-gray-700"
                      placeholder="Add moderation notes..."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Analysis</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sentiment Score</span>
                        <span className="font-medium text-green-600 dark:text-green-400">Positive (0.85)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Language Quality</span>
                        <span className="font-medium text-gray-900 dark:text-white">High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Spam Probability</span>
                        <span className="font-medium text-green-600 dark:text-green-400">Low (0.02)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Authenticity</span>
                        <span className="font-medium text-green-600 dark:text-green-400">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Review Analytics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                  <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                  <ThumbsUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{review.helpful}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Helpful Votes</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">+15%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Engagement</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Moderation History</h3>
              <div className="space-y-4">
                {moderationHistory.map((entry, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      entry.action.includes('approved') ? 'bg-green-500' :
                      entry.action.includes('flagged') || entry.action.includes('rejected') ? 'bg-red-500' :
                      entry.action.includes('submitted') ? 'bg-blue-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{entry.action}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{entry.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{entry.details}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">by {entry.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Review ID: #{review.id.padStart(6, '0')}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                Export Review
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Approve Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;