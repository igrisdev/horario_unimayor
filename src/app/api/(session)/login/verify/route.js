import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/verifyJWT'
import jwt from 'jsonwebtoken'

export async function GET(req) {
  const token = await req.cookies.get('token')

  const id = jwt.verify(token.value.toString(), process.env.JWT_SECRET)

  console.log(id)
  return NextResponse.json({ id })
}
