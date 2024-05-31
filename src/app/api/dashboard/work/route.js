import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const works = await prisma.work.findMany({
        where: {
          OR: [{ name: { contains: search, mode: 'insensitive' } }],
        },
      })

      return NextResponse.json(works, { status: 200 })
    }

    const works = await prisma.work.findMany()

    return NextResponse.json(works, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { name, typeWork, description, availability } = await req.json()

    await prisma.work.create({
      data: {
        name,
        typeWork,
        description,
        availability,
      },
    })

    return NextResponse.json(
      { message: 'Labor creada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
