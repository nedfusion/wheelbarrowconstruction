import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const authToken = localStorage.getItem('admin_auth');
    if (authToken) {
      // In production, verify the token with your backend
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // In production, send credentials to your backend for verification
    // For demo purposes, we'll use simple client-side validation
    if (credentials.username === 'admin' && credentials.password === 'wheelbarrow2024') {
      localStorage.setItem('admin_auth', 'authenticated');
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-wine-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard />;
};

export default AdminRoute;