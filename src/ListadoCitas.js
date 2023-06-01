import React from 'react'
import Cita from './Cita'

export default function ListadoCitas({listado, eliminarCita}) {
  return (
    <>
    {console.log(listado)}
      {listado.map((cita) => (
        <div key={cita.id}>
          <Cita info={cita} eliminarCita={eliminarCita} />
        </div>
      ))}
    </>
  )
}
