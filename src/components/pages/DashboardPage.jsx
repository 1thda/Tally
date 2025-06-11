import React from 'react';
import Dashboard from '../components/Dashboard';
import Transactions from '../components/Transactions';

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Dashboard />
      <Transactions />
    </div>
  );
}

export default DashboardPage;
