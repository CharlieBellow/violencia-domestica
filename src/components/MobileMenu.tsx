"use client"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

import { FaBars } from "react-icons/fa"

export default function MobileMenu() {
  return (
    <div className="flex md:hidden justify-end items-end w-full z-[100]">
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" aria-label="Menu" size="icon">
              <FaBars className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mr-4 w-auto border-purple-1 md:hidden bg-fundo/95 text-white">
            <nav>
              <ul className="flex flex-col gap-4 p-2">
                <li className="hover:text-purple-1 cursor-pointer">
                  <Link href="./">Início</Link>
                </li>
                <li className="hover:text-purple-1 cursor-pointer">
                  <Link href="./error">Erro </Link>
                </li>
                <li className="hover:text-purple-1 cursor-pointer">
                  <Link href="./services"> Serviços</Link>
                </li>
                <li className="hover:text-purple-1 cursor-pointer">
                  <Link href="./about"> Sobre</Link>
                </li>
                <li className="hover:text-purple-1 cursor-pointer">
                  <Link href="./contact">Contato</Link>
                </li>
              </ul>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
