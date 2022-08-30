import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/signin" replace state={{ from: location }} />;
};

export default ProtectedRoute;
