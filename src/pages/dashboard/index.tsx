
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Style.module.css';

export default function Dashboard() {

  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <div className={styles.listaCliente}>
        <ul>
          <li>VW</li>
          <li>GM</li>
          <li>Ford</li>
          <li>Fiat</li>
        </ul>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  )
}