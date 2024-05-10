import Users from '@/model/users'
import connectDB from '@/lib/connectDB'

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectDB()

    const users = await Users.find({}, { createdAt: 0, updatedAt: 0, __v: 0 })

    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    await connectDB()

    const { firstName, lastName, email, password } = await req.json()

    await Users.create({
      firstName,
      lastName,
      email,
      password,
    })

    return NextResponse.json(
      { message: 'Usuario creado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
