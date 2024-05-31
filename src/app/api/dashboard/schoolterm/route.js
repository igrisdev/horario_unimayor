import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const schoolterms = await prisma.SchoolTerm.findMany({
        where: {
          OR: [{ name: { contains: search, mode: 'insensitive' } }],
        },
      })

      return NextResponse.json(schoolterms, { status: 200 })
    }

    const schoolterms = await prisma.SchoolTerm.findMany()

    return NextResponse.json(schoolterms, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { name, dateStart, dateEnd, state } = await req.json()

    await prisma.SchoolTerm.create({
      data: {
        name,
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        state: state == 'true' ? true : false,
      },
    })

    return NextResponse.json(
      { message: 'Periodo académico creado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
