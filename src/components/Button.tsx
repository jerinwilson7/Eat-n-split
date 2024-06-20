import React from "react"

type ButtonPropsTypes = {
    children:React.ReactNode
    onClick ?:()=>void
}


function Button({children,onClick}:ButtonPropsTypes) {
  return (
    <button onClick={onClick} className="button">{children}</button>
  )
}

export default Button