import { Inter } from 'next/font/google'
import '@/app/style/globals.css'

import { Toaster } from 'sonner'
import { Navbar } from '@/components/general/Navbar'

import { Axios } from '@/lib/axios'
import { cookies } from 'next/headers'

import { verifyJWT } from '@/lib/verifyJWT'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horario UniMayor',
  description:
    'Aplicación web para gestionar los horarios de la Institución Universitaria Colegio Mayor Del Cauca',
  icons: {
    icon: '/logoHorarioUniMayor.jpeg',
  },
}

export default async function RootLayout({ children }) {
  const token = cookies().get('token')

  let id
  if (token) {
    let data = await verifyJWT(token.value)

    id = data.id
  }

  let infoLogin = {
    id: 123,
    name: 'juan',
    email: 'carlos@gmail.com',
  }

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/user/${id}`)
    infoLogin = data
  }

  return (
    <html lang='en'>
      <body className={inter.className + ' bg-[#16161d] text-gray-400'}>
        <Navbar
          // isAuth={infoLogin ? true : false}
          isAuth={true}
          // infoLogin={infoLogin ?? null}
        />

        <div className='px-4'>{children}</div>

        <Toaster
          richColors
          position='bottom-center'
        />
      </body>
    </html>
  )
}
