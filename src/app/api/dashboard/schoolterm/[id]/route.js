import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundSchoolTerm = await prisma.SchoolTerm.findUnique({
      where: { id },
    })

    return NextResponse.json(foundSchoolTerm, { status: 200 })
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
    const { name, dateStart, dateEnd, state } = await req.json()

    await prisma.SchoolTerm.update({
      where: {
        id,
      },
      data: {
        name,
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        state: state == 'true' ? true : false,
      },
    })

    return NextResponse.json(
      { message: 'Periodo Académico actualizado con éxito' },
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

    await prisma.SchoolTerm.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Periodo Académico eliminada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
