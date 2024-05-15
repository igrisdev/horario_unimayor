'use client'

import { deleteSubject } from '@/lib/actions/subject/actionSubject'
import { toast } from 'sonner'

export default function FormDelete({ id }) {
  const handleDeleteSubject = async (formData) => {
    const subject = deleteSubject(formData)

    toast.promise(subject, {
      loading: 'Eliminando ...',
      success: () => {
        return `Materia Eliminada ✅`
      },
      error: 'Error al eliminar la materia',
      duration: 500,
    })
  }
  return (
    <form action={handleDeleteSubject}>
      <input
        type='hidden'
        name='id'
        value={id}
      />
      <button
        type='submit'
        className='font-medium text-red-600 hover:underline'
      >
        Eliminar
      </button>
    </form>
  )
}
