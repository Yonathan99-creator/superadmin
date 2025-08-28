import React, { useState } from 'react';
import ReportsHeader from './ReportsHeader';
import ReportsStats from './ReportsStats';
import ReportsList from './ReportsList';
import ReportDetails from './ReportDetails';
import ReportsAnalytics from './ReportsAnalytics';
import ReportGenerator from './ReportGenerator';
import ScheduledReports from './ScheduledReports';

const ReportsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedReport, setSelectedReport] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ReportsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <ReportsStats />
            <ReportsList 
              onSelectReport={setSelectedReport}
            />
          </>
        )}
        
        {activeTab === 'generator' && (
          <ReportGenerator />
        )}
        
        {activeTab === 'scheduled' && (
          <ScheduledReports />
        )}
        
        {activeTab === 'analytics' && (
          <ReportsAnalytics />
        )}
        
        {selectedReport && (
          <ReportDetails 
            report={selectedReport}
            onClose={() => setSelectedReport(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ReportsPage;