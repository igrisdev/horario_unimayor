import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')

  if (!token) return NextResponse.redirect(new URL('/login', req.url))

  if (req.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  /* if (token) {
    if (
      req.nextUrl.pathname === '/login' ||
      req.nextUrl.pathname === '/register'
    ) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  } */
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/', '/login', '/register'],
}
