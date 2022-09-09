import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { resetPasswordApi, signInApi, signUpApi } from '../api';
import { clearStorageItem, loadStorageItem, saveStorageItem, tokenKey } from '../lib/handler';

const AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(loadStorageItem(tokenKey));

  const handleSignUp = async (firstName, lastName, mail, password, verificationCode) => {
    const {
      data: { token },
    } = await signUpApi({ firstName, lastName, mail, password, verificationCode });
    setToken(token);
    saveStorageItem(tokenKey, token);
    navigate('/');
  };

  const handleResetPassword = async (mail, newPassword, verificationCode) => {
    const {
      data: { token },
    } = await resetPasswordApi({ mail, newPassword, verificationCode });
    setToken(token);
    saveStorageItem(tokenKey, token);
    navigate('/');
  };

  const handleLogin = async (mail, password) => {
    const {
      data: { token },
    } = await signInApi({ mail, password });
    setToken(token);
    saveStorageItem(tokenKey, token);
    navigate('/');
  };

  const handleLogout = () => {
    setToken(null);
    clearStorageItem(tokenKey);
    navigate('/');
  };

  const value = {
    token,
    onLogout: handleLogout,
    onLogin: handleLogin,
    onSignup: handleSignUp,
    onResetPassword: handleResetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
