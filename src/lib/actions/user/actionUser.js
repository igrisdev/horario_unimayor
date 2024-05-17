'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function createUser(formData) {
  const user = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/user', user)

  revalidatePath('/dashboard/user')
}

export async function updateUser(formData) {
  const user = Object.fromEntries(formData)

  await Axios.put(`/api/dashboard/user/${user.id}`, user)

  revalidatePath('/dashboard/user')
  redirect('/dashboard/user')
}

export async function deleteUser(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/user/${id}`)

  revalidatePath('/dashboard/user')
}
