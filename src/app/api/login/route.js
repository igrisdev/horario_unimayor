import Users from '@/model/users'
import connectDB from '@/lib/connectDB'

import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectDB()

    const { email, password } = await req.json()

    const foundUser = await Users.find({ email, password })

    console.log(foundUser)

    return NextResponse.json(
      { message: 'Inicio de sesión con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
