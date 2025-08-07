import Image from "next/image"

import victim from "../../../../assets/victim.png"
import charlie from "../../../../assets/charlie.jpg"
import uniasselvi from "../../../../assets/uniasselvi-pgn-tranp.png"
import cras from "../../../../assets/cras.jpg"

export default function aboutPage() {
  return (
    <div className="flex flex-col  space-y-4 items-center p-10">
      <div className="flex">
        <div>
          <h1 className="text-fundo font font-extrabold text-2xl">Sobre</h1>
          <p className="text-purple-5 text-4xl">
            Divulgação da temática de violência e adesão a ações sociais e
            aumento de denúncias
          </p>
          <p>
            Este site foi desenvolvido com o intuito de
            disponibilizar/possibilitar a divulgação e instruções normativas
            sobre a temática da violência doméstica junto ao CRAS visando a
            maior adesão a ações sociais de combate e denúncia.
          </p>
        </div>
        <div>
          <Image src={victim} alt="Sobre" width={700} height={500} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-purple-5 text-2xl">Produtores e parceiros</h2>
        <div className="flex flex-col lg:flex-row p-8 gap-8 w-full items-center justify-center max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="size-20 rounded-full overflow-hidden ">
              <Image
                src={charlie}
                className="size-full object-cover"
                alt="Produtores e parceiros"
                width={50}
                height={50}
              />
            </div>
            <p>Charlie B. O. Pimentel S.</p>
            <p>
              4º semestre de Sistemas de Informação Universidade Leonardo da
              Vinci - UNIASSELVI (Desenvolvedor)
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="size-20 rounded-full overflow-hidden ">
              <Image
                src={cras}
                className="size-full object-cover"
                alt="Produtores e parceiros"
                width={50}
                height={50}
              />
            </div>
            <p>Centro de Referência de Assistência Social (CRAS) - Arapiraca</p>
            <p>
              Colaboradora: Milena Stéfane Nunes da Costa - Psicóloga (Roteiro e
              Conteúdo)
            </p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <div className=" p-4">
              <Image
                src={uniasselvi}
                className=""
                alt="Produtores e parceiros"
                width={50}
                height={50}
              />
            </div>
            <p>UNIASSELVI</p>
            <p>
              Universidade Leonardo da Vinci (Idealizador do projeto de
              extensão)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
