import React, { useState } from 'react';
import ProfessionalsHeader from './ProfessionalsHeader';
import ProfessionalsStats from './ProfessionalsStats';
import ProfessionalsTable from './ProfessionalsTable';
import ProfessionalDetails from './ProfessionalDetails';
import PendingApprovals from './PendingApprovals';
import ServicesManagement from './ServicesManagement';

const ProfessionalsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfessionalsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <ProfessionalsStats />
            <ProfessionalsTable 
              onSelectProfessional={setSelectedProfessional}
            />
          </>
        )}
        
        {activeTab === 'pending' && (
          <PendingApprovals />
        )}
        
        {activeTab === 'services' && (
          <ServicesManagement />
        )}
        
        {selectedProfessional && (
          <ProfessionalDetails 
            professional={selectedProfessional}
            onClose={() => setSelectedProfessional(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfessionalsPage;