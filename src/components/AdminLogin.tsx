import React, { useState } from 'react';
import { Building2, Eye, EyeOff, Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (credentials: { username: string; password: string }) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simple validation - in production, use proper authentication
      if (credentials.username === 'admin' && credentials.password === 'wheelbarrow2024') {
        onLogin(credentials);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-900 via-wine-800 to-wine-700 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-wine-200">
            Wheelbarrow Construction Limited
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-100 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-white mb-3">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wine-300" />
                <input
                  type="text"
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-wine-300 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wine-300" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-wine-300 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-wine-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-wine-900 py-4 rounded-xl font-semibold text-lg hover:bg-wine-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-wine-900"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-wine-200 text-sm mb-2 font-medium">Demo Credentials:</p>
            <p className="text-wine-300 text-xs">Username: admin</p>
            <p className="text-wine-300 text-xs">Password: wheelbarrow2024</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-wine-300 text-sm">
            © 2024 Wheelbarrow Construction Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;