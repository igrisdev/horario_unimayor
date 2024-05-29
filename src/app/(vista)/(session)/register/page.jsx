import { FormRegister } from '@/components/session/FormRegister'
import { Suspense } from 'react'

export default function Register() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <main className='grid place-content-center h-screen'>
        <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
          <h1 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
            Regístrate en{' '}
            <span className='text-[#7747ff]'>Horario UniMayor</span>
          </h1>

          <FormRegister />
        </div>
      </main>
    </Suspense>
  )
}
