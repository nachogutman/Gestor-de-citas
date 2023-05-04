import "./App.css";
import Formulario from "./Formulario";
import ListadoCitas from "./ListadoCitas";

function App() {

  const listado = [
    {mascota: 'Nina', dueño: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna'},
    {mascota: 'Mateo', dueño: 'Nacho', fecha: '2012-12-05', hora: '09:12', sintomas: 'Exceso de facha'}
    ];

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <ListadoCitas listado={listado} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
