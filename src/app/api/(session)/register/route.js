import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany()

    return NextResponse.json(users, { status: 200 })
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
    const { firstName, lastName, email, password, revalidatePassword } =
      await req.json()

    console.log(firstName, lastName, email, password, revalidatePassword)

    if (!firstName) {
      return NextResponse.json({ error: 'Nombre es requerido' })
    }

    if (!lastName) {
      return NextResponse.json({ error: 'Apellido es requerido' })
    }

    if (!email) {
      return NextResponse.json({ error: 'Email es requerido' })
    }

    if (!password) {
      return NextResponse.json({ error: 'Contraseña es requerida' })
    }

    if (!revalidatePassword) {
      return NextResponse.json({ error: 'Misma contraseña es requerida' })
    }

    if (password !== revalidatePassword) {
      return NextResponse.json({ error: 'Las contraseñas no coinciden' })
    }

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
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

/* import connect from '@/lib/connectDB'
import User from '@/model/users'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()
// Calls the connect function to establish a connection to the database.

export async function POST(request) {
  // Defines an asynchronous POST request handler.
  try {
    const reqBody = await request.json()
    const { username, email, password } = reqBody
    // Parses the request body to extract username, email, and password.

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ email })

    //If yes, returns a 400 response.
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    //hash password using bcryptjs.
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    // Saves the new user to the database.
    const savedUser = await newUser.save()

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser,
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
} */
