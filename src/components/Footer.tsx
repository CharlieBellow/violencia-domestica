import React from 'react'
import logo from "../../assets/uniasselvi-pgn-tranp.png"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-primary p-8 space-x-4 flex '>
      <div className='flex flex-col gap-4 w-1/2'>
      <Image src={logo} alt="logo uniasselvi" width={120}/>

      <p>Produzido por: Charlie Bellow de Oliveira Pimentel Silva
Estudante do 4º período de Sistemas de Informação
UNIASSELVI</p>
<span>2025 - Todos os direitos reservados</span>
      </div>
      <div>

<ul>
<li>Sobre o site</li>
<li>Contato</li>
<li>Serviço</li>
<li>Política de Privacidade</li>
</ul>
      </div>

    </footer>
  )
}
