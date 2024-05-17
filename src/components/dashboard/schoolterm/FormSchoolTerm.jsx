'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import {
  createSchoolTerm,
  updateSchoolTerm,
} from '@/lib/actions/schoolterm/actionSchoolTerm'
import { useRef } from 'react'
import { toast } from 'sonner'

export function FormSchoolTerm({ isEdit, label, id = null, data = [] }) {
  const ref = useRef()

  const handleSchoolTerm = async (formData) => {
    const subject = createSchoolTerm(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        ref.current.reset()
        return `Periodo Académico Creado ✅`
      },
      error: 'Error al crear la materia',
      duration: 1000,
    })
  }

  return (
    <form
      ref={ref}
      action={isEdit ? updateSchoolTerm : handleSchoolTerm}
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
        <label htmlFor='name'>Nombre del periodo académico</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='2020-1, 2020-2, 2023-1 ...'
          autoFocus
          defaultValue={isEdit ? data.name : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='dateStart'>Fecha inicio del semestre</label>
        <input
          id='dateStart'
          type='date'
          name='dateStart'
          defaultValue={isEdit ? data.dateStart.substring(0, 10) : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='dateEnd'>Fecha fin del semestre</label>
        <input
          id='dateEnd'
          type='date'
          name='dateEnd'
          defaultValue={isEdit ? data.dateEnd.substring(0, 10) : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='state'>Estado</label>
        <select
          id='state'
          name='state'
          defaultValue={isEdit ? data.state : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='true'>Activo</option>
          <option value='false'>Inactivo</option>
        </select>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
