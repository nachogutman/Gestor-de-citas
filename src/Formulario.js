import Input from "./Input";

export default function Formulario() {
  return (
    <>
      <Input title="Nombre Mascota" type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>

      <Input title="Nombre Dueño" type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>

      <Input title="Fecha" type="date" name="fecha" className="u-full-width"/>

      <Input title="hora" type="time" name="hora" className="u-full-width"/>

      <label>Sintomas</label>
      <textarea name="sintomas" class="u-full-width"></textarea>
      <button type="submit" class="u-full-width button-primary">
        Agregar Cita
      </button>
    </>
  );
}
