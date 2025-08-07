import React from 'react'
type props = {
  className?: string
}
export default function Triangulo({className } : props) {
  return (
    <div className={` rounded-md absolute -top-36 border-r-[240px]  border-b-[340px] border-t-[360px] border-transparent  drop-shadow-2xl 
      ${className}`}></div>
  )
}
