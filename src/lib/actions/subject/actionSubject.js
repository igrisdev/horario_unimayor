'use server'

import { Axios } from '@/lib/axios'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createSubject(formData) {
  const subject = Object.fromEntries(formData)

  Axios.post('/api/dashboard/subject', subject)

  revalidatePath('/dashboard/subject')
}

export async function deleteSubject(formData) {
  const id = formData.get('id')

  Axios.delete(`/api/dashboard/subject/${id}`)

  revalidatePath('/dashboard/subject')
}
