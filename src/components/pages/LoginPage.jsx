import React from 'react';
import Auth from '../components/Auth';

function LoginPage({ onLoginSuccess }) {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Auth onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default LoginPage;
