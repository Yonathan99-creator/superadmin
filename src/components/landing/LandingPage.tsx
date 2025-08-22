import React from 'react';
import Hero from './Hero';
import Dashboard from './Dashboard';
import QuickOverview from './QuickOverview';
import GoogleCalendarIntegration from './GoogleCalendarIntegration';

const LandingPage: React.FC = () => {
  return (
    <>
        <Hero />
        <Dashboard />
        <QuickOverview />
        <GoogleCalendarIntegration />
    </>
  );
};

export default LandingPage;