import React, { useState } from 'react';
import ClientsHeader from './ClientsHeader';
import ClientsStats from './ClientsStats';
import ClientsList from './ClientsList';
import ClientDetails from './ClientDetails';
import ClientsAnalytics from './ClientsAnalytics';
import ClientsSegmentation from './ClientsSegmentation';

const ClientsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClient, setSelectedClient] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ClientsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <ClientsStats />
            <ClientsList 
              onSelectClient={setSelectedClient}
            />
          </>
        )}
        
        {activeTab === 'analytics' && (
          <ClientsAnalytics />
        )}
        
        {activeTab === 'segmentation' && (
          <ClientsSegmentation />
        )}
        
        {selectedClient && (
          <ClientDetails 
            client={selectedClient}
            onClose={() => setSelectedClient(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ClientsPage;