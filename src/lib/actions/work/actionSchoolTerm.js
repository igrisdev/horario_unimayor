'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function createWork(formData) {
  const work = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/work', work)

  revalidatePath('/dashboard/work')
}

export async function updateWork(formData) {
  const work = Object.fromEntries(formData)

  await Axios.put(`/api/dashboard/work/${work.id}`, work)

  revalidatePath('/dashboard/work')
  redirect('/dashboard/work')
}

export async function deleteWork(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/work/${id}`)

  revalidatePath('/dashboard/work')
}
