// middleware.ts
import { NextResponse } from 'next/server'
// import { verifyToken } from './utils/jsonWebToken'
function parseJwt (token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(globalThis.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}
/**
 * @param {import('next/server').NextRequest} request
 * @returns
 */
export function middleware (request) {
  try {
    const token = request.cookies.get('token')
    const abc = parseJwt(token)
    console.log('🚀 ~ file: middleware.js ~ line 21 ~ middleware ~ abc', abc)
    // if (!token) return NextResponse.redirect(new URL('/404', request.url))

    // const payload = verifyToken(token)

    return NextResponse.redirect(new URL('/300', request.url))
  } catch (error) {
    console.error('🚀 ~ file: middleware.js ~ line 28 ~ middleware ~ error', error.message)
    return NextResponse.redirect(new URL('/500', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard'
}
