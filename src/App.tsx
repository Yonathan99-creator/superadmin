import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/landing/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;