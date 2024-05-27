'use server'

import { Axios } from '@/lib/axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const user = Object.fromEntries(formData)

  const { data } = await Axios.post('/api/login', user)

  if (data.error) {
    return { error: data.error }
  }

  const token = data.token

  if (!token) {
    return { error: 'Error al iniciar sesión' }
  }

  cookies().set('token', token)

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
