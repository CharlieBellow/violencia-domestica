import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo-white.png'

export default function Header() {
  return (
    <div className='flex justify-between md:items-center flex-col md:flex-row h-fit'>
      {/* trocar por uma logo com o nome branco */}
      <Image
        src={logo}
        alt='Logomarca da Uniasselvi'
        width={120}
        className='m-4'
      />
      {/* adicionar float button - shadcn ou radix */}
      <div className='flex md:hidden justify-end items-end w-full'>
        menu
        {/* <Menu/> implementar menu com float button */}
      </div>
      <ul className='flex flex-col md:flex-row gap-2 w-full p-4 right-10 text-sm font-light z-50  absolute lg:text-lg  text-white justify-end items-end space-x-4'>
        <li className='hover:text-primary cursor-pointer'>
          <Link href='./'>Início</Link>
        </li>
        <li className='hover:text-primary cursor-pointer'>
          <Link href='./error'>Erro </Link>
        </li>
        <li className='hover:text-primary cursor-pointer'>
          <Link href='./services'> Serviços</Link>
        </li>
        <li className='hover:text-primary cursor-pointer'>
          <Link href='./about'> Sobre</Link>
        </li>
        <li className='hover:text-primary cursor-pointer'>
          <Link href='./contact'>Contato</Link>
        </li>
      </ul>
    </div>
  )
}
