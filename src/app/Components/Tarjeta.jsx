import styles from './Tarjeta.module.css';
export default function Tarjeta({Nombre}) {
  return (
    <div className={styles.tarjeta} >
        <h2 className={styles.tiulo}>{Nombre}</h2>
        <p>bienvenido al proyecto de next</p>
        <button className={styles.boton}>presiona</button>

    </div>
  );
}