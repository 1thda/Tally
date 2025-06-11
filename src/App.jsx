// src/App.jsx
import React, { useState } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {isAuthenticated ? (
        <>
          <Dashboard />
          <Transactions />
        </>
      ) : (
        <Auth onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;
