import "./App.css";
import Formulario from "./Formulario";
import ListadoCitas from "./ListadoCitas";
import React, { useState } from "react";


function App() {

  const prueba = { id: 0, mascota: 'Mateo', dueño: 'Nacho', fecha: '2012-12-05', hora: '09:12', sintomas: 'Exceso de facha' };

  const [listado, setListado] = useState([prueba]);

  const agregarCita = function (cita) {
    setListado([...listado, cita]);
  }

  const eliminarCita = function (id) {

    setListado([...listado.filter(cita => cita.id !== id)]);

  }

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <ListadoCitas listado={listado} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
  );

}



export default App;
