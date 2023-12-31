import React from 'react'

export default function Button({name, className}) {
  return (
    <button className={className }>{name}</button>
  )
}
