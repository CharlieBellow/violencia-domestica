import Footer from "@/components/Footer"
import TopPage from "@/components/TopPage"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Violência Doméstica",
  description: "Site sobre violência doméstica",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto h-full flex justify-between flex-col">
        <TopPage />
        <div className="">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
