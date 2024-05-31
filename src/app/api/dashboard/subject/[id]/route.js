import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundSubject = await prisma.subject.findUnique({
      where: { id },
    })

    return NextResponse.json(foundSubject, { status: 200 })
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
    const { name, code, hours, description } = await req.json()

    const updateUser = await prisma.subject.update({
      where: {
        id,
      },
      data: {
        name,
        code,
        hours: Number(hours),
        description,
      },
    })

    return NextResponse.json(
      { message: 'Materia actualizada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params

    await prisma.subject.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Materia eliminada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
