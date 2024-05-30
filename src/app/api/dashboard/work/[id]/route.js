import { NextResponse } from 'next/server'

import apiLabor from '@/lib/mock/apiLabor.json'

export async function GET(req, { params }) {
  try {
    const { id } = params

    const foundWork = apiLabor.find((item) => {
      return item.id === id
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
    const { name, typeLabor, description, availability } = await req.json()

    return NextResponse.json(
      { message: 'Labor actualizado con éxito' },
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

    apiLabor.filter((item) => item.id !== id)

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
