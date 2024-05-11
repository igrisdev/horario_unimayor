import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    const foundUser = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    })

    return NextResponse.json(
      { message: 'Inicio de sesión con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
