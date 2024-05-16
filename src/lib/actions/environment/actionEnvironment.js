'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function createEnvironment(formData) {
  const environment = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/environment', environment)

  revalidatePath('/dashboard/environment')
}

export async function updateEnvironment(formData) {
  const environment = Object.fromEntries(formData)

  await Axios.put(`/api/dashboard/environment/${environment.id}`, environment)

  revalidatePath('/dashboard/environment')
  redirect('/dashboard/environment')
}

export async function deleteEnvironment(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/environment/${id}`)

  revalidatePath('/dashboard/environment')
}
