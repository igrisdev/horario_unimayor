import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const environments = await prisma.environment.findMany({
        where: {
          OR: [
            { typeEnvironment: { contains: search, mode: 'insensitive' } },
            { side: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
          ],
        },
      })

      return NextResponse.json(environments, { status: 200 })
    }

    const environments = await prisma.environment.findMany()

    return NextResponse.json(environments, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { typeEnvironment, side, location } = await req.json()

    await prisma.environment.create({
      data: {
        typeEnvironment,
        side,
        location,
      },
    })

    return NextResponse.json(
      { message: 'Ambiente creada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
