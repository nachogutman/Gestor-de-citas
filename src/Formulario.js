import Input from "./Input";
import React, {useState} from "react";

export default function Formulario({ agregarCita }) {

  const [ids, setIds] = useState(1);
  const crearCita = (e) => {
    e.preventDefault(); 

    const cita = {
      id: ids,
      mascota: e.target.mascota.value,
      dueño: e.target.dueño.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value
    }

    setIds(ids + 1);

    agregarCita(cita);
  };

  return (
    <form onSubmit={(e) => crearCita(e)}>
      <Input title="Nombre Mascota" type="text" name="mascota" id="mascota" className="u-full-width" placeholder="Nombre Mascota" defaultValue=" " />

      <Input title="Nombre Dueño" type="text" name="dueño" id="dueño" className="u-full-width" placeholder="Nombre dueño de la mascota" defaultValue=" "/>

      <Input title="Fecha" type="date" name="fecha" id="fecha" className="u-full-width" defaultValue=" "/>

      <Input title="hora" type="time" name="hora" id="hora" className="u-full-width" defaultValue=" "/>

      <label>Sintomas</label>
      <textarea name="sintomas" id="sintomas" className="u-full-width" defaultValue=" "></textarea>
      <button type="submit" id="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );

}





