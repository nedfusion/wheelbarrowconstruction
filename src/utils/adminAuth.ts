// Simple authentication utilities for admin dashboard
// In production, replace with proper JWT tokens and backend authentication

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'editor';
}

export const AUTH_TOKEN_KEY = 'wheelbarrow_admin_token';

export const authenticateAdmin = async (username: string, password: string): Promise<AdminUser | null> => {
  // In production, send credentials to your backend API
  // This is a demo implementation
  
  const validCredentials = [
    { username: 'admin', password: 'wheelbarrow2024', role: 'admin' as const },
    { username: 'editor', password: 'editor2024', role: 'editor' as const }
  ];

  const user = validCredentials.find(
    cred => cred.username === username && cred.password === password
  );

  if (user) {
    const adminUser: AdminUser = {
      id: `user_${Date.now()}`,
      username: user.username,
      role: user.role
    };

    // Store auth token (in production, use proper JWT)
    const token = btoa(JSON.stringify(adminUser));
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    
    return adminUser;
  }

  return null;
};

export const getCurrentAdmin = (): AdminUser | null => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;

    const adminUser = JSON.parse(atob(token));
    return adminUser;
  } catch (error) {
    console.error('Failed to parse admin token:', error);
    return null;
  }
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const isAdminAuthenticated = (): boolean => {
  return getCurrentAdmin() !== null;
};