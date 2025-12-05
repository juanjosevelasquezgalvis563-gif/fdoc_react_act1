import Tarjeta from "./components/Tarjeta";
import FichaProducto from "./components/FichaProducto";
import AvisoInline from "./components/AvisoInline";
import PerfilGlobal from "./components/PerfilGlobal";
import BadgeEstado from "./components/BadgeEstado";
export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Bienvenido al Proyecto Next.js 🚀
      </h1>

      <AvisoInline />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Tarjeta Nombre="Tarjeta principal" />
        <FichaProducto Nombre="Camiseta Azul" />
        <PerfilGlobal />
         <BadgeEstado estado="activo" />

      </div>
    </main>
  );
}
