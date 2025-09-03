import React, { useState } from 'react';
import { 
  Eye, Edit, MoreHorizontal, Star, Calendar, 
  User, MessageSquare, CheckCircle, Clock,
  AlertTriangle, X, ThumbsUp, ThumbsDown,
  Flag, Shield, Award, TrendingUp
} from 'lucide-react';

interface Review {
  id: string;
  customerName: string;
  customerAvatar: string;
  professionalName: string;
  professionalAvatar: string;
  service: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  status: 'approved' | 'pending' | 'flagged' | 'rejected';
  helpful: number;
  reported: number;
  verified: boolean;
  response?: {
    content: string;
    date: string;
    author: string;
  };
}

interface ReviewsListProps {
  onSelectReview: (review: Review) => void;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ onSelectReview }) => {
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRating, setFilterRating] = useState('all');

  const reviews: Review[] = [
    {
      id: '1',
      customerName: 'Sarah Johnson',
      customerAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Michael Chen',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'General Consultation',
      rating: 5,
      title: 'Excellent service and care',
      content: 'Dr. Chen was incredibly thorough and professional. He took the time to explain everything clearly and made me feel comfortable throughout the consultation. Highly recommend!',
      date: '2024-01-25',
      status: 'approved',
      helpful: 12,
      reported: 0,
      verified: true,
      response: {
        content: 'Thank you for your kind words, Sarah. It was a pleasure helping you with your health concerns.',
        date: '2024-01-25',
        author: 'Dr. Michael Chen'
      }
    },
    {
      id: '2',
      customerName: 'Michael Rodriguez',
      customerAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Emma Wilson',
      professionalAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Cardiac Screening',
      rating: 4,
      title: 'Good experience overall',
      content: 'The cardiac screening was comprehensive and Dr. Wilson was knowledgeable. The only issue was the wait time, but the quality of care made up for it.',
      date: '2024-01-24',
      status: 'approved',
      helpful: 8,
      reported: 0,
      verified: true
    },
    {
      id: '3',
      customerName: 'Lisa Thompson',
      customerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. James Wilson',
      professionalAvatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Dental Cleaning',
      rating: 2,
      title: 'Disappointing experience',
      content: 'The appointment was rushed and I felt like the dentist was not paying attention to my concerns. The cleaning was adequate but the service could be much better.',
      date: '2024-01-23',
      status: 'flagged',
      helpful: 3,
      reported: 2,
      verified: false
    },
    {
      id: '4',
      customerName: 'David Kim',
      customerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Sarah Martinez',
      professionalAvatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Physical Therapy',
      rating: 5,
      title: 'Outstanding therapy sessions',
      content: 'Dr. Martinez helped me recover from my injury faster than expected. Her expertise and personalized approach made all the difference. Truly exceptional care!',
      date: '2024-01-22',
      status: 'pending',
      helpful: 0,
      reported: 0,
      verified: true
    },
    {
      id: '5',
      customerName: 'Amanda Garcia',
      customerAvatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      professionalName: 'Dr. Robert Johnson',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      service: 'Mental Health Counseling',
      rating: 5,
      title: 'Life-changing therapy',
      content: 'Dr. Johnson provided incredible support during a difficult time. His compassionate approach and professional expertise helped me tremendously. Cannot recommend enough!',
      date: '2024-01-21',
      status: 'approved',
      helpful: 15,
      reported: 0,
      verified: true,
      response: {
        content: 'Thank you Amanda. I\'m glad I could help you through this journey. Wishing you continued success.',
        date: '2024-01-21',
        author: 'Dr. Robert Johnson'
      }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'flagged':
        return <Flag className="w-4 h-4 text-red-500" />;
      case 'rejected':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      approved: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      flagged: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      rejected: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 5) return 'text-green-500';
    if (rating >= 4) return 'text-lime-500';
    if (rating >= 3) return 'text-yellow-500';
    if (rating >= 2) return 'text-orange-500';
    return 'text-red-500';
  };

  const handleSelectReview = (reviewId: string) => {
    setSelectedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const statusFilters = [
    { value: 'all', label: 'All Reviews', count: reviews.length },
    { value: 'approved', label: 'Approved', count: reviews.filter(r => r.status === 'approved').length },
    { value: 'pending', label: 'Pending', count: reviews.filter(r => r.status === 'pending').length },
    { value: 'flagged', label: 'Flagged', count: reviews.filter(r => r.status === 'flagged').length },
    { value: 'rejected', label: 'Rejected', count: reviews.filter(r => r.status === 'rejected').length }
  ];

  const ratingFilters = [
    { value: 'all', label: 'All Ratings' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    return matchesStatus && matchesRating;
  });

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-400">
      {/* Filter Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((filter, index) => (
              <button
                key={filter.value}
                onClick={() => setFilterStatus(filter.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom ${
                  filterStatus === filter.value
                    ? 'bg-yellow-600 text-white shadow-lg'
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

          {/* Rating Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by rating:</span>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {ratingFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group animate-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Review Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={review.customerAvatar}
                      alt={review.customerName}
                      className="w-12 h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-yellow-400 transition-all duration-300"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <Shield className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {review.customerName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {review.service}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(review.status)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(review.status)}`}>
                    {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating 
                          ? `${getRatingColor(review.rating)} fill-current` 
                          : 'text-gray-300 dark:text-gray-600'
                      } transition-all duration-300 hover:scale-110`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {review.rating}/5
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {review.date}
                </span>
              </div>

              {/* Review Title */}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {review.title}
              </h4>
            </div>

            {/* Review Content */}
            <div className="p-6">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                {review.content}
              </p>

              {/* Professional Info */}
              <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <img
                  src={review.professionalAvatar}
                  alt={review.professionalName}
                  className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-600"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {review.professionalName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Healthcare Professional
                  </p>
                </div>
              </div>

              {/* Response Preview */}
              {review.response && (
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                      Professional Response
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                    {review.response.content}
                  </p>
                </div>
              )}

              {/* Review Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{review.helpful}</span>
                  </div>
                  {review.reported > 0 && (
                    <div className="flex items-center space-x-1">
                      <Flag className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600 dark:text-red-400">{review.reported}</span>
                    </div>
                  )}
                </div>
                {review.verified && (
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => onSelectReview(review)}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-200 hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                  <Edit className="w-4 h-4" />
                  <span>Moderate</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-110">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
          <span className="group-hover:scale-110 transition-transform duration-300">Load More Reviews</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewsList;