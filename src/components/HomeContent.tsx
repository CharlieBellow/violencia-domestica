import CardBlog from "@/components/CardBlog"
import H4 from "@/components/H4"
import Image from "next/image"
import logo from "../../assets/violentometro.jpg"

const tiposDeViolencia = [
  {
    title: "PATRIMONIAL",
    content: [
      "Contra seu dinheiro",
      "retem seus documentso pessoais",
      "destói seus objetos",
      "não te deixa trabalhar",
      "oculta bens e propriedades",
    ],
  },
  {
    title: "FÍSICA",
    content: [
      "Contra seu dinheiro",
      "retem seus documentso pessoais",
      "destói seus objetos",
      "não te deixa trabalhar",
      "oculta bens e propriedades",
    ],
  },
  {
    title: "PSICOLÓGICA",
    content: [
      "Contra seu dinheiro",
      "retem seus documentso pessoais",
      "destói seus objetos",
      "não te deixa trabalhar",
      "oculta bens e propriedades",
    ],
  },
  {
    title: "SEXUAL",
    content: [
      "Contra seu dinheiro",
      "retem seus documentso pessoais",
      "destói seus objetos",
      "não te deixa trabalhar",
      "oculta bens e propriedades",
    ],
  },
  {
    title: "MORAL",
    content: [
      "Contra seu dinheiro",
      "retem seus documentso pessoais",
      "destói seus objetos",
      "não te deixa trabalhar",
      "oculta bens e propriedades",
    ],
  },
]

export default function HomeContent() {
  return (
    <main className="space-y-8 pt-8 items-center flex flex-col">
      <H4 text="Tipos de Violência" />
      <div className="grid grid-cols-3 gap-8">
        {tiposDeViolencia.map((card) => {
          return (
            <CardBlog
              key={card.title}
              title={card.title}
              content={
                <ul className="list-disc px-4">
                  {card.content.map((topic) => {
                    return <li key={topic}>{topic}</li>
                  })}
                </ul>
              }
            />
          )
        })}
      </div>
      <H4 text="Violentômetro" />
      <Image src={logo} alt="Violentômetro" width={300} height={400} />
    </main>
  )
}
