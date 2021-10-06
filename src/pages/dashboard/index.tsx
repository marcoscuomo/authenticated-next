
import styles from './Style.module.css';

export default function Dashboard() {
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
    </div>
  )
}