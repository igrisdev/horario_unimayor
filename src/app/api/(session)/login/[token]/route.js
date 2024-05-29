import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/verifyJWT'
import jwt from 'jsonwebtoken'

export async function GET(req, { params }) {
  const { token } = params

  const { id } = jwt.verify(token, process.env.JWT_SECRET)

  console.log(id)

  return NextResponse.json({ id })
}
