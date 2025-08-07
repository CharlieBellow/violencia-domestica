import CardBlog from "@/components/CardBlog"

export default function servicesPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-lg lg:text-2xl font-bold text-fundo">
        Serviços disponíveis
      </h1>
      <p className="text-sm lg:text-lg bg-fundo/70 rounded-lg p-4">
        Os seviços disponíveis podem auxiliar a pessoa vitma de violência tanto
        no prcesso da denuncia quanto na proteção a vítma. Dentre os serviços
        mas procurados temos:
      </p>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <CardBlog
          title={"Delegacia da mulher"}
          content={
            <ul className="list-disc px-4">
              <li>
                Atendimento especializado para mulheres vítimas de violência
              </li>
              <li>Registro de ocorrências e medidas protetivas</li>
              <li>Encaminhamento para serviços de apoio psicológico</li>
              <li>Petição de divorcio</li>
              <li>Proteção da vítima em situação de violência</li>
              <li>Denúncia da situação de violência</li>
            </ul>
          }
        />
        <CardBlog
          title={"ECA e Conselho tutelar"}
          content={
            <ul className="list-disc px-4">
              <li>
                O ECA (Estatuto da Criança e do Adolescente) garante a proteção
                integral dos direitos das crianças e adolescentes
              </li>
              <li>
                O direito à proteção das crianças também se estende ás situações
                de violência doméstica
              </li>
              <li>
                Direito a mudança de escola e sigilo das informações referentes
                ao motivo da mudança.
              </li>
            </ul>
          }
        />
        <CardBlog
          title={"CRAS"}
          content={
            <ul className="list-disc px-4">
              <li>
                O CRAS (Centro de Referência de Assistência Social) é uma
                unidade pública que oferece serviços de proteção e assistência
                social para famílias em situação de vulnerabilidade
              </li>
              <li>
                O CRAS realiza um trabalho de prevenção e enfrentamento da
                violência doméstica, promovendo a autonomia e o fortalecimento
                das famílias
              </li>
              <li>
                No CRAS, as vítimas de violência podem encontrar apoio
                psicológico, orientação e encaminhamentos para outros serviços
                da rede de proteção
              </li>
              <li>
                Auxílio financeiro (bolsa família, etc.) para quem se enquadrar
                nos critérios de recebimento
              </li>
            </ul>
          }
        />
      </div>
    </div>
  )
}
