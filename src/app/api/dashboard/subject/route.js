import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const subjects = await prisma.subject.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { code: { contains: search, mode: 'insensitive' } },
          ],
        },
      })

      return NextResponse.json(subjects, { status: 200 })
    }

    const subjects = await prisma.subject.findMany()

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
    const { name, code, hours, description } = await req.json()

    await prisma.subject.create({
      data: {
        name,
        code,
        hours: Number(hours),
        description,
      },
    })

    return NextResponse.json(
      { message: 'Materia creada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
