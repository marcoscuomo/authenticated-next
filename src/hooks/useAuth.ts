import { useState } from 'react';

import { api } from '../utils/api';

interface IAuth {
  user: string,
  password: string
}

//isAuthenticated handleLogin handleLogout
export default function useAuth() { 

  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  async function handleLogin({user, password}: IAuth) {
    const { data } = await api.post('login', {user, password});

    console.log(data);


    
  }

  return { handleLogin, isAuthenticated }

}