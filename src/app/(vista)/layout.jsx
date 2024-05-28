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
  const { value } = cookies().get('token')

  if (value) {
    let { id } = await verifyJWT(value)

    if (id) {
      let { data } = await Axios.get(`/api/dashboard/user/${id}`)
      console.log(data)
    }

    // infoLogin = data
  }

  /* let infoLogin = {
    id: 123,
    name: 'juan',
    email: 'carlos@gmail.com',
  } */

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
