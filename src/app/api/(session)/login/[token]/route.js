import { verifyJWT } from '@/lib/verifyJWT'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const { token } = params

  const { id } = await verifyJWT(token)

  console.log(id)

  return NextResponse.json({ id })
}
