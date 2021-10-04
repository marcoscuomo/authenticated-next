import React, { useContext, useState } from 'react';

import {AuthContext} from './Context';
import useAuth from '../../hooks/useAuth';

const AuthProvider: React.FC = ({ children }) => {

  const { handleLogin, isAuthenticated } = useAuth();


  return (
    <AuthContext.Provider value={{handleLogin, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}