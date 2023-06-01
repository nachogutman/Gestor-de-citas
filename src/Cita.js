import React from "react";

export default function Cita({info, eliminarCita}) {
  return (
    <>
    <div className="cita">
      <p>
        Mascota: <span>{info.mascota}</span>
      </p>
      <p>
        Dueño: <span>{info.dueño}</span>
      </p>
      <p>
        Fecha: <span>{info.fecha}</span>
      </p>
      <p>
        Hora: <span>{info.hora}</span>
      </p>
      <p>
        Sintomas: <span>{info.sintomas}</span>
      </p>
      <button className="button elimnar u-full-width" onClick={(e) => eliminarCita(info.id)}>Eliminar ×</button>
    </div></>
  );
}
