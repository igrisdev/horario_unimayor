import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

import { generateJWT } from '@/lib/generateJWT'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email es requerido' })
    }

    if (!password) {
      return NextResponse.json({ error: 'Contraseña es requerida' })
    }

    const foundUser = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    })

    if (!foundUser) {
      return NextResponse.json({ error: 'Usuario no encontrado' })
    }

    const token = await generateJWT({ id: foundUser.id })

    if (!token) {
      return NextResponse.json({ error: 'Error al generar token' })
    }

    return NextResponse.json({ message: 'Inicio de sesión exitoso', token })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
