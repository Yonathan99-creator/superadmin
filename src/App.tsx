import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainApp from './components/MainApp';

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;