import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInApi } from '../api';
import { clearUserToken, loadUserToken, saveUserToken } from '../lib/Handler';

const AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(loadUserToken());

  const handleLogin = async (mail, password) => {
    const {
      data: { token },
    } = await signInApi({ mail: mail, password: password });
    setToken(token);
    saveUserToken(token);
    navigate('/');
  };

  const handleLogout = () => {
    setToken(null);
    clearUserToken();
  };

  const value = {
    token,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
