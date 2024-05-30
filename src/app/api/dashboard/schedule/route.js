import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')
    const searchSchedule = searchParams.get('schedule')

    // console.log(req.headers)

    if (searchSchedule !== '') {
      const schedules = await prisma.schedule.findMany({
        where: {
          schoolTerm: {
            name: { contains: searchSchedule, mode: 'insensitive' },
          },
        },
        include: {
          schoolTerm: true,
          user: true,
          environment: true,
          subject: true,
        },
      })

      return NextResponse.json(schedules, { status: 200 })
    }

    if (search !== '') {
      const schedules = await prisma.schedule.findMany({
        where: {
          OR: [
            {
              day: { contains: search, mode: 'insensitive' },
            },
            {
              schoolTerm: {
                name: { contains: search, mode: 'insensitive' },
              },
            },
            {
              user: {
                OR: [
                  {
                    firstName: { contains: search, mode: 'insensitive' },
                  },
                  {
                    lastName: { contains: search, mode: 'insensitive' },
                  },
                ],
              },
            },
            {
              environment: {
                typeEnvironment: { contains: search, mode: 'insensitive' },
              },
            },
            {
              subject: {
                name: { contains: search, mode: 'insensitive' },
              },
            },
          ],
        },
        include: {
          schoolTerm: true,
          user: true,
          environment: true,
          subject: true,
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
      hours,
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
        hourStart,
        hourEnd,
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
