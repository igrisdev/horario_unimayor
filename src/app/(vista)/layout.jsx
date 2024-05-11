import { Inter } from 'next/font/google'
import '@/app/style/globals.css'

import { Navbar } from '@/components/general/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horario UniMayor',
  description:
    'Aplicación web para gestionar los horarios de la Institución Universitaria Colegio Mayor Del Cauca',
  icons: {
    icon: '/logoHorarioUniMayor.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-[#16161d] text-gray-400'}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
