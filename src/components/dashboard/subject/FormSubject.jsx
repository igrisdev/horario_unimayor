'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import {
  createSubject,
  updateSubject,
} from '@/lib/actions/subject/actionSubject'
import { toast } from 'sonner'

export async function FormSubject({
  isEdit,
  label,
  id = null,
  dataSubject = [],
}) {
  const handleCreateSubject = async (formData) => {
    const subject = createSubject(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        return `Materia Creada ✅`
      },
      error: 'Error al crear la materia',
      duration: 1000,
    })
  }

  return (
    <form
      action={isEdit ? updateSubject : handleCreateSubject}
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
        <label htmlFor='name'>Nombre de la materia</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Calculo, Ingles ...'
          autoFocus
          defaultValue={isEdit ? dataSubject.name : ''}
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
          defaultValue={isEdit ? dataSubject.code : ''}
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
          defaultValue={isEdit ? dataSubject.hours : ''}
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
          defaultValue={isEdit ? dataSubject.description : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500 min-h-10'
        ></textarea>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
