import { NextResponse } from 'next/server'
import { verifyJWT } from '@/lib/verifyJWT'
import jwt from 'jsonwebtoken'

export async function GET(req) {
  const token = req.cookies.get('token')

  console.log(token)

  const id = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsd2I2aDdhYjAwMDFtMzkyY3JnaHlwcDAiLCJpYXQiOjE3MTY5NTQ4ODEsImV4cCI6MTcxNzA0MTI4MX0.BzJpx734yPOBYNG5uEuP7ASzm-8c-bHW0cQ4i_pYoPI',
    'palabrasupersecreta'
  )

  console.log(id)
  return NextResponse.json({ id })
}
