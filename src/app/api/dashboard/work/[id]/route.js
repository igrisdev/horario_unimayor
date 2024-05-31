import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundWork = await prisma.work.findUnique({
      where: { id },
    })

    return NextResponse.json(foundWork, { status: 200 })
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
    const { name, typeWork, description, availability } = await req.json()

    await prisma.work.update({
      where: {
        id,
      },
      data: {
        name,
        typeWork,
        description,
        availability,
      },
    })

    return NextResponse.json(
      { message: 'Labor actualizada con éxito' },
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

    await prisma.work.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Labor eliminada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
