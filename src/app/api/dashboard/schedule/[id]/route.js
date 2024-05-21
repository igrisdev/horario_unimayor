import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundSchedule = await prisma.schedule.findUnique({
      where: {
        id,
      },
      include: {
        schoolTerm: true,
        user: true,
        environment: true,
        subject: true,
      },
    })

    return NextResponse.json(foundSchedule, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params
    const {
      day,
      hourStart,
      hourEnd,
      schoolTermId,
      userId,
      environmentId,
      subjectId,
    } = await req.json()

    await prisma.schedule.update({
      where: {
        id,
      },
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
      { message: 'Horario actualizado con éxito' },
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

export async function DELETE(req, { params }) {
  try {
    const { id } = params

    await prisma.schedule.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Horario eliminado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
