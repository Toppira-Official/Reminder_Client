import React from 'react';
import { Navigate, useLocation } from 'react-router';

interface RequireAuthProps {
  children: React.ReactElement;
}

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
