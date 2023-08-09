import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAuthToken } from './redux/auth/cookies/cookies'

export function middleware(request: NextRequest) {

  if (!getAuthToken()) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
}

export const config = {
  matcher: ['/', '/profile']
}