import { Inter } from 'next/font/google'
import '@/app/style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horario UniMayor',
  description:
    'Aplicación web para gestionar los horarios de la Institución Universitaria Colegio Mayor Del Cauca',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' h-screen'}>{children}</body>
    </html>
  )
}
