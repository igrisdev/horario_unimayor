'use client'

import { toast } from 'sonner'

import { deleteSubject } from '@/lib/actions/subject/actionSubject'
import { ButtonLoading } from '@/components/general/ButtonLoading'

export function FormDelete({ id, label }) {
  const handleDeleteSubject = async (formData) => {
    const subject = deleteSubject(formData)

    toast.promise(subject, {
      loading: 'Eliminando ...',
      success: () => {
        return `${label} ✅`
      },
      error: () => {
        return `Error ${label}`
      },
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
      <ButtonLoading
        label={'Eliminar'}
        isDelete={true}
      />
    </form>
  )
}
