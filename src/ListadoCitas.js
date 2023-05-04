import React from 'react'
import Cita from './Cita'

export default function ListadoCitas({listado}) {
  return (
    <>
      {listado.map((cita) => (
        <div key={cita.mascota}>
          <Cita info={cita} />
        </div>
      ))}
    </>
  )
}
