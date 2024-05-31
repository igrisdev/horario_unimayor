import { FormLogin } from '@/components/session/FormLogin'

export default function Login() {
  return (
    <main className='grid place-content-center h-screen'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <div className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Iniciar sesión en{' '}
          <span className='text-[#7747ff]'>Horario UniMayor</span>
        </div>

        <FormLogin />
      </div>
    </main>
  )
}
