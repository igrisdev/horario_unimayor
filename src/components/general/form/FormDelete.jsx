'use client'

import { toast } from 'sonner'

import { deleteSubject } from '@/lib/actions/subject/actionSubject'
import { ButtonLoading } from '@/components/general/ButtonLoading'
import { deleteEnvironment } from '@/lib/actions/environment/actionEnvironment'
import { deleteUser } from '@/lib/actions/user/actionUser'
import { deleteSchoolTerm } from '@/lib/actions/schoolterm/actionSchoolTerm'
import { deleteSchedule } from '@/lib/actions/schedule/actionSchedule'

export function FormDelete({ id, label, type }) {
  const handleDeleteSubject = async (formData) => {
    let promise
    if (type === 'subject') {
      promise = deleteSubject(formData)
    }

    if (type === 'environment') {
      promise = deleteEnvironment(formData)
    }

    if (type === 'user') {
      promise = deleteUser(formData)
    }

    if (type === 'schoolterm') {
      promise = deleteSchoolTerm(formData)
    }

    if (type === 'schedule') {
      promise = deleteSchedule(formData)
    }

    toast.promise(promise, {
      loading: 'Eliminando ...',
      success: () => {
        return `${label} ✅`
      },
      error: (err) => {
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
