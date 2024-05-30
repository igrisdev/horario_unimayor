import { Inter } from 'next/font/google'
import '@/app/style/globals.css'

import { Toaster } from 'sonner'
import { Navbar } from '@/components/general/Navbar'
import { Suspense } from 'react'
import { getUser, isLoggedIn } from '@/lib/actions/session/actionSession'
import { Axios } from '@/lib/axios'

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
  const id = await isLoggedIn()

  const user = await getUser(id)

  let isLogged

  if (user?.role) {
    isLogged = true
  } else {
    isLogged = false
  }

  const { data } = await Axios.get('/api/dashboard/schoolterm?search=')

  const teachers = await prisma.user.findMany({
    where: {
      role: 'docente',
    },
    orderBy: {
      firstName: 'asc',
    },
  })

  return (
    <html lang='en'>
      <body className={inter.className + ' bg-[#16161d] text-gray-400'}>
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar
            isLogged={isLogged}
            user={user?.role}
            userInfo={user}
            schoolterms={data}
            teachers={teachers}
          />
        </Suspense>

        <div className='px-4'>{children}</div>

        <Toaster
          richColors
          position='bottom-center'
        />
      </body>
    </html>
  )
}
