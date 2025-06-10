// src/components/Transactions.jsx
import React from 'react';

function Transactions() {
  const transactions = [
    { id: 1, date: '2023-06-05', description: 'Groceries', category: 'Food', type: 'expense', amount: 85.20 },
    { id: 2, date: '2023-06-04', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 3500.00 },
    { id: 3, date: '2023-06-03', description: 'Electricity Bill', category: 'Utilities', type: 'expense', amount: 120.50 },
    { id: 4, date: '2023-06-02', description: 'Dinner with friends', category: 'Social', type: 'expense', amount: 65.00 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Transactions</h2>

      <div className="mb-4">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mr-2">
          Add New Transaction
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Filter / Sort
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 border-b border-gray-200">Date</th>
              <th className="py-3 px-6 border-b border-gray-200">Description</th>
              <th className="py-3 px-6 border-b border-gray-200">Category</th>
              <th className="py-3 px-6 border-b border-gray-200">Type</th>
              <th className="py-3 px-6 border-b border-gray-200 text-right">Amount</th>
              <th className="py-3 px-6 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {transactions.map(transaction => (
              <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 whitespace-nowrap">{transaction.date}</td>
                <td className="py-3 px-6">{transaction.description}</td>
                <td className="py-3 px-6">{transaction.category}</td>
                <td className={`py-3 px-6 font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                </td>
                <td className={`py-3 px-6 text-right font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </td>
                <td className="py-3 px-6">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-xs mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-600 text-sm mt-4">
        (This is a placeholder for your transaction list. Functionality to add/edit/delete will be implemented later.)
      </p>
    </div>
  );
}

export default Transactions;