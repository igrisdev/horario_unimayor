import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const subjects = await prisma.user.findMany({
        where: {
          OR: [
            { id: { contains: search, mode: 'insensitive' } },
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { role: { contains: search, mode: 'insensitive' } },
          ],
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
        },
      })

      return NextResponse.json(subjects, { status: 200 })
    }

    const subjects = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    })

    return NextResponse.json(subjects, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, role } = await req.json()

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        role,
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
