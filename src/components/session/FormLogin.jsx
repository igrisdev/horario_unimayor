import Link from 'next/link'

import { login } from '@/lib/actions/session/actionSession'
import { ButtonLoading } from '@/components/session/ButtonLoading'

export const FormLogin = () => {
  return (
    <>
      <form
        action={login}
        className='flex flex-col gap-3'
      >
        <div className='block relative'>
          <label
            htmlFor='email'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
          />
        </div>
        <div className='block relative'>
          <label
            htmlFor='password'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Contraseña
          </label>
          <input
            type='text'
            id='password'
            name='password'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
          />
        </div>

        <ButtonLoading label={'Iniciar Sesión'} />
      </form>
      <div className='flex gap-1 items-center justify-center mt-3'>
        No tienes cuenta
        <Link
          href={'/register'}
          className='text-[#7747ff] bg-none'
        >
          Crea Una.
        </Link>
      </div>
    </>
  )
}
