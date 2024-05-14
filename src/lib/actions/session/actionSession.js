'use server'

import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const user = Object.fromEntries(formData)

  Axios.post('api/login', user)

  redirect('/')
}
