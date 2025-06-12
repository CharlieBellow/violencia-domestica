import Background from "@/components/Background"
import CallToAction from "@/components/CallToAction"
import Header from "@/components/Header"

export default function TopPage() {
  return (
    <header className="overflow-hidden bg-gradient-to-br from-[#EBC8C2] from-5% via-[#8A62B3] via-35% to-[#626FB3] to-95% relative">
      <Header />

      <CallToAction />

      <Background />
    </header>
  )
}
