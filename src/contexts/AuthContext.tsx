import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

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
  signIn: ({email, password}: ILoginData) => void,
  logout: () => void
}

interface IResponseData {
  token: string
  user: User
}

interface IResponseLogin {
  data: IResponseData
}

export function AuthProvider({ children }: IPropsAuthProvider) {

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'authnext-token': token } = parseCookies();

    if(token){
      Router.push('/dashboard');
    } else {
      Router.push('/');
    }
  }, []);

  async function signIn({email, password}: ILoginData) {
    
    try {
      const { data: { token, user } }: IResponseLogin = await api.post('login', {
        email, 
        password
      });
  
      if(token) {

        setCookie(undefined, 'authnext-token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        });
  
        api.defaults.headers!['Authorization'] = `Bearer ${token}`;

        setUser(user);
  
        Router.push('/dashboard');
      }

    } catch(error) {
      alert('User or Password is incorrect');
    }
  }

  async function logout() {
    destroyCookie(undefined, 'authnext-token');
    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      signIn,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}