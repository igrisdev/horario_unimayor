'use server'

import { Axios } from '@/lib/axios'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const user = Object.fromEntries(formData)

  Axios.post('/api/login', user)

  redirect('/')
}

export async function logout() {
  Axios.post('/api/logout')

  redirect('/')
}

export async function register(formData) {
  const user = Object.fromEntries(formData)

  Axios.post('/api/register', user)

  redirect('/login')
}
