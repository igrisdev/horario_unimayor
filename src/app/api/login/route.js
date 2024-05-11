import Users from '@/model/users'
import connectDB from '@/lib/connectDB'

import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    await connectDB()

    const { email, password } = await req.json()
    console.log(email, password)

    const foundUser = await Users.find({ email, password })

    return NextResponse.json(
      { message: 'Inicio de sesión con éxito' },
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
