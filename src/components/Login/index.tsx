import React from 'react';

import styles from './Styles.module.css';

const Login: React.FC = () => {
  return (
    <main className={styles.main}>
      <form>
        <h2>Sign In</h2>
        <input type="text" className={styles.form} />
        <input type="password" className={styles.form} />
        <button>OK</button>
      </form>
    </main>
  )
}

export default Login;