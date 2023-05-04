import logo from "./logo.svg";
import "./App.css";
import Formulario from "./Formulario";
import Cita from "./Cita";

function App() {
  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario />
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Cita />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
