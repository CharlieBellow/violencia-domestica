import Triangulo from '@/components/Triangulo'
import React from 'react'

export default function Background() {
  return (
    <div className='relative left-[12rem] w-content h-[25rem] items-center flex -top-20 opacity-20 md:opacity-100'>
      <Triangulo className="right-2 border-r-primary   z-50"/>
      <Triangulo className="-right-8 border-r-fundo   z-50"/>
      <Triangulo className="right-14 border-r-purple-1 z-40"/>
      <Triangulo className="right-[101px] border-r-purple-2  z-30"/>
      <Triangulo className="right-36 border-r-purple-3  z-20"/>
      <Triangulo className="right-48 border-r-purple-4 z-10"/>
      <Triangulo className="right-[18rem] border-r-fundo "/>
      <Triangulo className="right-60 border-r-purple-5 z-0"/>
    </div>
  )
}
