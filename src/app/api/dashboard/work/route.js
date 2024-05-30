import { NextResponse } from 'next/server'

import apiLabor from '@/lib/mock/apiLabor.json'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')

    if (search !== '') {
      const work = apiLabor.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.typeLabor.toLowerCase().includes(search.toLowerCase())
        )
      })

      return NextResponse.json(work, { status: 200 })
    }

    const work = apiLabor

    return NextResponse.json(work, { status: 200 })
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
    const { name, typeLabor, description, availability } = await req.json()

    apiLabor.push({
      id: apiLabor.length + 1,
      name,
      typeLabor,
      description,
      availability,
    })

    return NextResponse.json(
      { message: 'Labor creado con éxito' },
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
