import React, { useState } from 'react';
import AppointmentsHeader from './AppointmentsHeader';
import AppointmentsStats from './AppointmentsStats';
import AppointmentsCalendar from './AppointmentsCalendar';
import AppointmentsList from './AppointmentsList';
import AppointmentDetails from './AppointmentDetails';
import AppointmentsAnalytics from './AppointmentsAnalytics';

const AppointmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AppointmentsHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        
        {activeTab === 'overview' && (
          <>
            <AppointmentsStats />
            {viewMode === 'list' ? (
              <AppointmentsList 
                onSelectAppointment={setSelectedAppointment}
              />
            ) : (
              <AppointmentsCalendar 
                onSelectAppointment={setSelectedAppointment}
              />
            )}
          </>
        )}
        
        {activeTab === 'analytics' && (
          <AppointmentsAnalytics />
        )}
        
        {selectedAppointment && (
          <AppointmentDetails 
            appointment={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;