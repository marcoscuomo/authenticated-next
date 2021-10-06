import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Styles.module.css';

type LoginType = {
  email: string;
  password: string;

}

const Login: React.FC = () => {

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: LoginType) {
    
    signIn(data);
  }

  return (

    <main className={styles.main}>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h2>Sign In</h2>
        <input type="text" className={styles.form} {...register('email')} placeholder="Email" />
        <input type="password" className={styles.form} {...register('password')} placeholder="Password" />
        <button type="submit">OK</button>
      </form>
    </main>
  )
}

export default Login;