// src/components/Dashboard.jsx
import React from 'react';

function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-800">Current Balance</h3>
          <p className="text-3xl font-bold text-blue-600">$5,230.50</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-green-800">Total Income (This Month)</h3>
          <p className="text-3xl font-bold text-green-600">$3,500.00</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-red-800">Total Expenses (This Month)</h3>
          <p className="text-3xl font-bold text-red-600">$1,275.25</p>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-sm text-center text-gray-600">
        <p>Charts and detailed statistics will go here (e.g., monthly spending, category breakdown).</p>
      </div>
    </div>
  );
}

export default Dashboard;