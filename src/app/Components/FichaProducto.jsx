import Image from "next/image";
import styles from "./FichaProducto.module.css";

export default function FichaProducto({ Nombre }) {
  return (
    <div className={styles.fichaProducto}>
      <h2 className={styles.titulo}>{Nombre}</h2>

      <Image
        className={styles.imagen}
        src="https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg"
        alt={`Camiseta ${Nombre}`}
        width={250}
        height={250}
      />

      <p className={styles.precio}>$50.000</p>

      <button className={styles.boton}>
        Agregar al carrito
      </button>
    </div>
  );
}
