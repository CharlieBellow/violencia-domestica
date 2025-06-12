import Image from "next/image"
import logo from "../../assets/uniasselvi-pgn-tranp.png"


export default function Header() {
  
  return (
    <div className="flex justify-between md:items-center flex-col md:flex-row">
      {/* trocar por uma logo com o nome branco */}
      <Image src={logo} alt="Logomarca de Charlie" width={120} className="m-4" />
      {/* adicionar float button - shadcn ou radix */}
      <div className="flex md:hidden justify-end items-end w-full">
        menu
        {/* <Menu/> */}
      </div>
      <ul className="flex flex-col md:flex-row gap-2 w-full p-4 right-10 text-sm font-light z-50  absolute lg:text-lg  text-white justify-end items-end space-x-4 ">
        <li className="hover:text-primary cursor-pointer">Início</li>
        <li className="hover:text-primary cursor-pointer">Blog</li>
        <li className="hover:text-primary cursor-pointer">Serviços</li>
        <li className="hover:text-primary cursor-pointer">Sobre mim</li>
        <li className="hover:text-primary cursor-pointer">Contato</li>
      </ul>
    </div>
  )
}
