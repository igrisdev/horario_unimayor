import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/verifyJWT'
import jwt from 'jsonwebtoken'

export async function GET(req, { params }) {
  const { token } = params
  const token2 = req.cookies.get('token')

  console.log(token2)
  const { id } = jwt.verify(token.toString(), process.env.JWT_SECRET)

  console.log(id)

  return NextResponse.json({ id })
}
