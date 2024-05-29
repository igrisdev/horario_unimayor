import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')
  const { pathname } = req.nextUrl

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if ((token && pathname === '/login') || pathname === '/register') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // En cualquier otro caso, continuar con la solicitud
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/', '/login', '/register'],
}
