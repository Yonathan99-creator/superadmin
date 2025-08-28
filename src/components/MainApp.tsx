import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import LandingPage from './landing/LandingPage';
import ProfessionalsPage from './professionals/ProfessionalsPage';
import AppointmentsPage from './appointments/AppointmentsPage';
import ServicesPage from './services/ServicesPage';
import SubscriptionsPage from './subscriptions/SubscriptionsPage';
import ReportsPage from './reports/ReportsPage';
import Footer from './landing/Footer';

const MainApp: React.FC = () => {
  const [activeModule, setActiveModule] = useState('Home');

  const renderContent = () => {
    switch (activeModule) {
      case 'Professionals':
        return <ProfessionalsPage />;
      case 'Appointments':
        return <AppointmentsPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Subscriptions':
        return <SubscriptionsPage />;
      case 'Reports':
        return <ReportsPage />;
      case 'Home':
      default:
        return (
          <>
            <LandingPage />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar activeModule={activeModule} onModuleChange={setActiveModule} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default MainApp;