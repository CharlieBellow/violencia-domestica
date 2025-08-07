import Image from "next/image"
import Link from "next/link"

import { FiAlertTriangle } from "react-icons/fi"
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-tl from-[#626FB3] from-10% via-[#A462B3]  to-[#EBC8C2] to-90% text-white">
      <FiAlertTriangle className="mb-6" size={200} />

      <h2 className="mb-4 text-4xl font-bold">404 - Página Não Encontrada</h2>
      <p className="mb-8 text-lg">
        Não conseguimos encontrar essa página, provavelmente ela não existe ou
        não está disponível agora, enquanto isso, caso precise fazer uma
        denúncia disque:
      </p>
      <div className="flex flex-col items-center mt-8 gap-8">
        <p className="font-extrabold text-4xl">100</p>
        <Link
          href="/"
          className="rounded bg-purple-1 px-4 py-2 text-purple-4 transition-colors hover:bg-purple-1/50"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  )
}
