import React, { createContext } from 'react';

interface IAuth {
  user: string,
  password: string
}

interface IAuthContext {
  isAuthenticated: boolean,
  handleLogin: ({user, password}: IAuth) => Promise<void>
}

export const AuthContext = createContext({
  isAuthenticated: false,
  handleLogin: ({user, password}: IAuth) => {}
});