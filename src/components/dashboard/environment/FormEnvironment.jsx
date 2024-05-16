'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import { createEnvironment, updateEnvironment } from '@/lib/actions/environment/actionEnvironment'
import { useRef } from 'react'

import { toast } from 'sonner'

export function FormEnvironment({ isEdit, label, id = null, data = [] }) {
  const ref = useRef()
  const handleCreateEnvironment = async (formData) => {
    const subject = createEnvironment(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        return `Ambiente Creado ✅`
      },
      error: 'Error al crear la materia',
      duration: 1000,
    })
  }

  return (
    <form
      ref={ref}
      action={isEdit ? updateEnvironment : handleCreateEnvironment}
      className='flex flex-col gap-y-8 w-96'
    >
      {isEdit && (
        <input
          type='hidden'
          name='id'
          value={id}
        />
      )}
      <div className='flex flex-col max-w-96'>
        <label htmlFor='typeEnvironment'>Tipo de ambiente</label>
        <select
          id='typeEnvironment'
          name='typeEnvironment'
          defaultValue={isEdit ? data.typeEnvironment : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='salon'>Salon</option>
          <option value='sala'>Sala</option>
        </select>
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='side'>Seleccionar la sede</label>
        <select
          id='side'
          name='side'
          defaultValue={isEdit ? data.side : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='encarnacion'>Encarnación</option>
          <option value='bicentenario'>Bicentenario</option>
        </select>
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='location'>Seleccionar el ambiente</label>
        <select
          id='location'
          name='location'
          defaultValue={isEdit ? data.location : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='salon_300'>salon 300</option>
          <option value='salon_301'>salon 301</option>
        </select>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
