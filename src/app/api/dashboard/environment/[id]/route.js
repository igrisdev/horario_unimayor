import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundEnvironment = await prisma.environment.findUnique({
      where: { id },
    })

    return NextResponse.json(foundEnvironment, { status: 200 })
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
    const { typeEnvironment, side, location } = await req.json()

    await prisma.environment.update({
      where: {
        id,
      },
      data: { typeEnvironment, side, location },
    })

    return NextResponse.json(
      { message: 'Ambiente actualizado con éxito' },
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

    console.log(id)

    await prisma.environment.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Ambiente eliminada con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
