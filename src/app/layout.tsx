import type { Metadata } from 'next'
import './globals.css'
import TopPage from '@/components/TopPage'

export const metadata: Metadata = {
  title: 'Psicólogo Charlie',
  description: 'Site do psicólogo Charlie',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />

        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='font-roboto'>
        <TopPage/>
        {children}</body>
    </html>
  )
}
