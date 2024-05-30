'use server'

import { Axios } from '@/lib/axios'
import { verifyJWT } from '@/lib/verifyJWT'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isLoggedIn() {
  const token = cookies().get('token')

  if (!token) {
    return false
  }

  const { id } = await verifyJWT(token.value)

  return id
}

export async function getUser(id) {
  const { data } = await Axios.get(`/api/user/${id}`)
  return data
}

export async function login(formData) {
  const user = Object.fromEntries(formData)

  const { data } = await Axios.post('/api/login', user)

  if (data.error) {
    return { error: data.error }
  }

  const token = data

  if (!token) {
    return { error: 'Error al iniciar sesión' }
  }

  cookies().set('token', token)

  revalidatePath('/')
  redirect('/')
}

export async function logout() {
  cookies().delete('token')
  redirect('/login')
}

export async function register(formData) {
  const user = Object.fromEntries(formData)

  Axios.post('/api/register', user)

  redirect('/login')
}
