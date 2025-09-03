import React, { useState } from 'react';
import ReviewsHeader from './ReviewsHeader';
import ReviewsStats from './ReviewsStats';
import ReviewsList from './ReviewsList';
import ReviewDetails from './ReviewDetails';
import ReviewsAnalytics from './ReviewsAnalytics';
import ReviewsModeration from './ReviewsModeration';

const ReviewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedReview, setSelectedReview] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ReviewsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <ReviewsStats />
            <ReviewsList 
              onSelectReview={setSelectedReview}
            />
          </>
        )}
        
        {activeTab === 'moderation' && (
          <ReviewsModeration />
        )}
        
        {activeTab === 'analytics' && (
          <ReviewsAnalytics />
        )}
        
        {selectedReview && (
          <ReviewDetails 
            review={selectedReview}
            onClose={() => setSelectedReview(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;