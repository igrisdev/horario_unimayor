import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const schedules = await prisma.schedule.findMany({
        where: {
          OR: [
            {
              day: { contains: search, mode: 'insensitive' },
              schoolTermId: { contains: search, mode: 'insensitive' },
              userId: { contains: search, mode: 'insensitive' },
              environmentId: { contains: search, mode: 'insensitive' },
              subjectId: { contains: search, mode: 'insensitive' },
            },
          ],
        },
      })

      return NextResponse.json(schedules, { status: 200 })
    }

    const schedules = await prisma.schedule.findMany({
      where: {},
      include: {
        schoolTerm: true,
        user: true,
        environment: true,
        subject: true,
      },
    })

    console.log(schedules)

    return NextResponse.json(schedules, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const {
      day,
      hourStart,
      hourEnd,
      schoolTermId,
      userId,
      environmentId,
      subjectId,
    } = await req.json()

    await prisma.schedule.create({
      data: {
        day,
        hourStart: new Date(hourStart),
        hourEnd: new Date(hourEnd),
        schoolTermId,
        userId,
        environmentId,
        subjectId,
      },
    })

    return NextResponse.json(
      { message: 'Horario creado con éxito' },
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
