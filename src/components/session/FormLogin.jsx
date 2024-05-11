'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Axios } from '@/lib/axios'

export const FormLogin = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const foundUser = (e) => {
    setLoading(true)

    const dataUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    Axios.get('api/login', {
      params: {
        email: dataUser.email,
        password: dataUser.password,
      },
    })
      .then((res) => {
        console.log(res)
        if (res.data.length > 0) {
          console.log(res.data[0])
          localStorage.setItem('user', JSON.stringify(res.data[0]))
          router.push('/')
        } else {
          console.log('Usuario no encontrado')
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
        onSubmit={foundUser}
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

        <button
          type='submit'
          className='bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'
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
            'Iniciar Sesión'
          )}
        </button>
      </form>
      <div className='flex gap-1 items-center justify-center mt-3'>
        No tienes cuenta
        <button
          className='text-[#7747ff] bg-none'
          onClick={() => router.push('register')}
        >
          Crea Una
        </button>
      </div>
    </>
  )
}
