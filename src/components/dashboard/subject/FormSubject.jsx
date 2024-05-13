'use client'

import { Axios } from '@/lib/axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const FormSubject = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    const subject = Object.fromEntries(data)
    setLoading(true)

    Axios.post('/api/dashboard/subject', subject)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-y-8 w-96'
    >
      <div className='flex flex-col max-w-96'>
        <label htmlFor='name'>Nombre de la materia</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Calculo, Ingles ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='code'>Código de la materia</label>
        <input
          id='code'
          type='text'
          name='code'
          placeholder='10D0F, FD4 ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='hours'>Cantidad de horas de la materia</label>
        <input
          id='hours'
          type='number'
          name='hours'
          placeholder='2, 3, 1 ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='description'>Descripción de la materia</label>
        <textarea
          style={{
            'field-sizing': 'content',
            resize: 'none',
            'max-height': '300px',
          }}
          name='description'
          id='description'
          placeholder='lorem ...'
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500 min-h-10'
        ></textarea>
      </div>

      <button className='bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'>
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
  )
}
