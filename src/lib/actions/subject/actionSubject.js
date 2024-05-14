'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'

export async function createSubject(formData) {
  const subject = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/subject', subject)

  revalidatePath('/dashboard/subject')
}

export async function deleteSubject(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/subject/${id}`)

  revalidatePath('/dashboard/subject')
}
