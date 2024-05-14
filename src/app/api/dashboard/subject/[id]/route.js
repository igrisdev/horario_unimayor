import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(req, { params }) {
  try {
    const { id } = params

    console.log(id);

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
