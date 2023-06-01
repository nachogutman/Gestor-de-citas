import React from 'react'

export default function Input({title, type, name, className, placeholder = "", defaultValue}) {
  return (
    <>
        <label> {title} </label>
        <input type={type} name={name} className={className} placeholder={placeholder} defaultValue={defaultValue} required autoComplete="off"/>
    </>
  )
}
