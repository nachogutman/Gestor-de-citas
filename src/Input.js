import React from 'react'

export default function Input({title, type, name, className, placeholder = ""}) {
  return (
    <>
        <label> {title} </label>
        <input type={type} name={name} className={className} placeHolder={placeholder} value="" />
    </>
  )
}
