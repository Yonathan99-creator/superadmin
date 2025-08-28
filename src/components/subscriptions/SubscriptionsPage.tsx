import React, { useState } from 'react';
import SubscriptionsHeader from './SubscriptionsHeader';
import SubscriptionsStats from './SubscriptionsStats';
import SubscriptionsList from './SubscriptionsList';
import SubscriptionDetails from './SubscriptionDetails';
import SubscriptionsAnalytics from './SubscriptionsAnalytics';
import PlansManagement from './PlansManagement';

const SubscriptionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SubscriptionsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <SubscriptionsStats />
            <SubscriptionsList 
              onSelectSubscription={setSelectedSubscription}
            />
          </>
        )}
        
        {activeTab === 'plans' && (
          <PlansManagement />
        )}
        
        {activeTab === 'analytics' && (
          <SubscriptionsAnalytics />
        )}
        
        {selectedSubscription && (
          <SubscriptionDetails 
            subscription={selectedSubscription}
            onClose={() => setSelectedSubscription(null)}
          />
        )}
      </div>
    </div>
  );
};

export default SubscriptionsPage;