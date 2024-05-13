import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const subjects = await prisma.subject.findMany()

    revalidatePath('/dashboard/subject')
    return NextResponse.json(subjects, { status: 200 })
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
    const { name, code, hours, description } = await req.json()

    await prisma.subject.create({
      data: {
        name,
        code,
        hours: Number(hours),
        description,
      },
    })

    return NextResponse.json(
      { message: 'Materia creada con éxito' },
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
