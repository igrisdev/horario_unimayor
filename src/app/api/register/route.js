import Users from '@/model/users'
import connectDB from '@/lib/connectDB'

import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectDB()

    const { firstName, lastName, email, password } = req.body

    const person = new Users({
      firstName,
      lastName,
      email,
      password,
    })

    await person.save()

    console.log('inside api', person)

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
