export default function PerfilGlobal() {
  return (
    <div className="tarjeta">
      <h2 className="tarjeta-nombre">Juan Velásquez</h2>

      <p className="tarjeta-descripcion">
        Soy un usuario activo del sistema y este componente demuestra el uso de
        clases globales definidas en <strong>globals.css</strong>.
      </p>

      <button className="boton">
        Ver Perfil
      </button>
    </div>
  );
}
