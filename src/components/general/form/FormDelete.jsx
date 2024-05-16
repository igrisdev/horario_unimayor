'use client'

import { toast } from 'sonner'

import { deleteSubject } from '@/lib/actions/subject/actionSubject'
import { ButtonLoading } from '@/components/general/ButtonLoading'
import { deleteEnvironment } from '@/lib/actions/environment/actionEnvironment'

export function FormDelete({ id, label, type }) {
  const handleDeleteSubject = async (formData) => {
    console.log(type)
    let promise
    if (type === 'subject') {
      promise = deleteSubject(formData)
    }

    if (type === 'environment') {
      promise = deleteEnvironment(formData)
    }

    toast.promise(promise, {
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
