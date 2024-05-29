import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/verifyJWT'
import jwt from 'jsonwebtoken'

export async function GET(req) {
  const token = req.cookies.get('token')

  const { id } = jwt.verify(token.value, process.env.JWT_SECRET)

  return NextResponse.json({ id })
}
