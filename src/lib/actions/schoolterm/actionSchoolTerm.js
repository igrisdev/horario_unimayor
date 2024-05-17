'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function createSchoolTerm(formData) {
  const schoolterm = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/schoolterm', schoolterm)

  revalidatePath('/dashboard/schoolterm')
}

export async function updateSchoolTerm(formData) {
  const schoolterm = Object.fromEntries(formData)

  await Axios.put(`/api/dashboard/schoolterm/${schoolterm.id}`, schoolterm)

  revalidatePath('/dashboard/schoolterm')
  redirect('/dashboard/schoolterm')
}

export async function deleteSchoolTerm(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/schoolterm/${id}`)

  revalidatePath('/dashboard/schoolterm')
}
