'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import { createUser, updateUser } from '@/lib/actions/user/actionUser'
import { useRef } from 'react'
import { toast } from 'sonner'

export function FormUser({ isEdit, label, id = null, data = [] }) {
  const ref = useRef()

  const handleCreateUser = async (formData) => {
    const subject = createUser(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        ref.current.reset()
        return `Usuario Creado ✅`
      },
      error: 'Error al crear el usuario',
      duration: 1000,
    })
  }

  return (
    <form
      ref={ref}
      action={isEdit ? updateUser : handleCreateUser}
      className='flex flex-col gap-y-8 w-96'
    >
      {isEdit && (
        <input
          type='hidden'
          name='id'
          value={id}
        />
      )}
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
            defaultValue={data.firstName}
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
            defaultValue={data.lastName}
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
          defaultValue={data.email}
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
          defaultValue={data.password}
          className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='role'>Rol</label>
        <select
          id='role'
          name='role'
          defaultValue={isEdit ? data.role : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='admin'>Admin</option>
          <option value='docente'>Docente</option>
        </select>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
