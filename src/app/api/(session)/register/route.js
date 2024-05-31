import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany()

    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, revalidatePassword } =
      await req.json()

    if (!firstName) {
      return NextResponse.json({ error: 'Nombre es requerido' })
    }

    if (!lastName) {
      return NextResponse.json({ error: 'Apellido es requerido' })
    }

    if (!email) {
      return NextResponse.json({ error: 'Email es requerido' })
    }

    if (!password) {
      return NextResponse.json({ error: 'Contraseña es requerida' })
    }

    if (!revalidatePassword) {
      return NextResponse.json({ error: 'Misma contraseña es requerida' })
    }

    if (password !== revalidatePassword) {
      return NextResponse.json({ error: 'Las contraseñas no coinciden' })
    }

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })

    return NextResponse.json(
      { message: 'Usuario creado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
