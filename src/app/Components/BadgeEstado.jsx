export default function BadgeEstado({ estado = "Inactivo" }) {
  const esActivo = estado.toLowerCase() === "activo";

  return (
    <span
      className={`px-3 py-1 rounded-full text-white text-sm font-semibold
        ${esActivo ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {estado}
    </span>
  );
}
