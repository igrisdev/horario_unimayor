import { FormRegister } from '@/components/session/FormRegister'

export default function Register() {
  return (
    <main className='grid place-content-center h-screen'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <div className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Regístrate en <span className='text-[#7747ff]'>Horario UniMayor</span>
        </div>

        <FormRegister />
      </div>
    </main>
  )
}
