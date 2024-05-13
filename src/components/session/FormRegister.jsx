'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Axios } from '@/lib/axios'

export const FormRegister = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const createUser = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    const user = Object.fromEntries(data)

    setLoading(true)

    Axios.post('/api/register', user)
      .then((res) => {
        if (res.status === 200) {
          router.push('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <form
        onSubmit={createUser}
        className='flex flex-col gap-3'
      >
        <div className='flex items-center mt-2 gap-4'>
          <div className='block relative '>
            <label
              htmlFor='firstName'
              className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
              Nombre
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
            />
          </div>
          <div className='block relative'>
            <label
              htmlFor='lastName'
              className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
              Apellido/s
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
            />
          </div>
        </div>
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

        <div className='block relative'>
          <label
            htmlFor='revalidatePassword'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Misma contraseña
          </label>
          <input
            type='text'
            id='revalidatePassword'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
          />
        </div>

        <button
          className='bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'
          disabled={loading}
        >
          {loading ? (
            <>
              <svg
                aria-hidden='true'
                role='status'
                className='inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='#1C64F2'
                />
              </svg>
              Loading...
            </>
          ) : (
            'Crear cuenta'
          )}
        </button>
      </form>
      <div className='flex gap-1 items-center justify-center mt-3'>
        Ya tienes cuenta
        <Link
          className='text-[#7747ff] '
          href='/login'
        >
          Inicia Sesión
        </Link>
      </div>
    </>
  )
}
