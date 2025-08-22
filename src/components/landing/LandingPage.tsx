import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Dashboard from './Dashboard';
import QuickOverview from './QuickOverview';
import GoogleCalendarIntegration from './GoogleCalendarIntegration';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <QuickOverview />
        <GoogleCalendarIntegration />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;