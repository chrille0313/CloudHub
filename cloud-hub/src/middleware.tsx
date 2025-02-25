import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth';

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    if (
      !request.nextUrl.pathname.startsWith('/sign-in') &&
      !request.nextUrl.pathname.startsWith('/sign-up')
    ) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  } else {
    if (
      request.nextUrl.pathname.startsWith('/sign-in') ||
      request.nextUrl.pathname.startsWith('/sign-up')
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/clouds/:path*',
    '/dashboard/:path*',
    '/shared/:path*',
    '/sign-out/:path*',
    '/sign-in/:path*',
    '/sign-up/:path*'
  ]
};
