'use server'

import { revalidatePath } from 'next/cache'
import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function getSchedules(formData) {
  const { schedule } = Object.fromEntries(formData)

  if (schedule === 'default') {
    redirect('/dashboard/schedule')
  }

  redirect('/dashboard/schedule?schedule=' + schedule)
}

export async function createSchedule(formData) {
  const schedule = Object.fromEntries(formData)

  await Axios.post('/api/dashboard/schedule', schedule)

  revalidatePath('/dashboard/schedule')
  revalidatePath('/')
}

export async function updateSchedule(formData) {
  const schedule = Object.fromEntries(formData)

  await Axios.put(`/api/dashboard/schedule/${schedule.id}`, schedule)

  revalidatePath('/dashboard/schedule')
  revalidatePath('/')

  redirect('/dashboard/schedule')
}

export async function deleteSchedule(formData) {
  const id = formData.get('id')

  await Axios.delete(`/api/dashboard/schedule/${id}`)

  revalidatePath('/dashboard/schedule')
  revalidatePath('/')
}
