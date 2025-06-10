// src/App.jsx
import React from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';

function App() {
  // A very basic state to simulate login for now
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tally</h1>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Login (Simulated)
            </button>
          )}
        </div>
      </header>

      <main className="container mx-auto p-6">
        {isLoggedIn ? (
          <>
            <Dashboard />
            <Transactions />
          </>
        ) : (
          <Auth onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2025 Tally. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;