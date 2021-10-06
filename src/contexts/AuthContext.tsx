import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router';


import { api } from '../utils/api';

export const AuthContext = createContext({} as IValueContext);

interface IPropsAuthProvider {
  children: ReactNode;
}

interface User {
  name: string,
  profile: string
}

interface ILoginData {
  email: string,
  password: string
}

interface IValueContext {
  isAuthenticated: boolean,
  user: User | null,
  signIn: ({email, password}: ILoginData) => void
}

interface IResponseData {
  token: string
  user: User
}

interface IResponseLogin {
  data: IResponseData
}

export function AuthProvider({ children }: IPropsAuthProvider) {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn({email, password}: ILoginData) {
    
    const { data: { token, user } }: IResponseLogin = await api.post('login', {
      email, 
      password
    });

    // const { data: { token } } = await api.post('/authenticate');

    if(token) {
      setUser(user);

      Router.push('/dashboard');
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}