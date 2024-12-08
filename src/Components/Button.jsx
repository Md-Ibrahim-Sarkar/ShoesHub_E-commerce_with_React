import React from 'react'
import { Link } from 'react-router-dom'

function Button({children,className}) {
  return (
    <button className={`text-white hover:scale-105  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center   ${className}`}>{children}</button>
  )
}

export default Button