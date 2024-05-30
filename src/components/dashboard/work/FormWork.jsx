'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import { createWork, updateWork } from '@/lib/actions/work/actionSchoolTerm'
import { useRef } from 'react'
import { toast } from 'sonner'

export function FormWork({ isEdit, label, id = null, data = [] }) {
  const ref = useRef()

  const handleWork = async (formData) => {
    const subject = createWork(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        ref.current.reset()
        return `Labor Creada ✅`
      },
      error: 'Error al crear la labor',
      duration: 1000,
    })
  }

  return (
    <form
      ref={ref}
      action={isEdit ? updateWork : handleWork}
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
        <label htmlFor='name'>Nombre de la labor</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Ingeniería Informática ...'
          autoFocus
          defaultValue={isEdit ? data.name : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='typeLabor'>Tipo de labor</label>
        <input
          id='typeLabor'
          type='text'
          name='typeLabor'
          placeholder='Programador, Docente ...'
          autoFocus
          defaultValue={isEdit ? data.typeLabor : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='description'>Descripción de la labor</label>
        <textarea
          style={{
            'field-sizing': 'content',
            resize: 'none',
            'max-height': '300px',
          }}
          name='description'
          id='description'
          placeholder='lorem ...'
          defaultValue={isEdit ? data.description : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500 min-h-10'
        ></textarea>
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='availability'>Disponibilidad</label>
        <textarea
          style={{
            'field-sizing': 'content',
            resize: 'none',
            'max-height': '300px',
          }}
          name='availability'
          id='availability'
          placeholder='lorem ...'
          defaultValue={isEdit ? data.availability : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500 min-h-10'
        ></textarea>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
