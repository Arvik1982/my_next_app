import { NextRequest, NextResponse } from 'next/server';
import { Token, isTokenValid, parseJwt } from './utils/jwt';

const prefixUrl = process.env.NEXT_PUBLIC_API;

export const config = { matcher: ['/home/:path*'] };

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = '/';

  const nowUnix = (+new Date() / 1e3) | 0;
  const token = req?.cookies.get('access_token')?.value;
  const refresh_token = req?.cookies.get('refresh_token')?.value;

  const newResponse = NextResponse.next();

  let tokenIsValid = isTokenValid(token);

  if (!tokenIsValid && !!refresh_token) {
    const response = await fetch(`${prefixUrl}ch/auth/refresh/`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${refresh_token}` },
    });

    const { access_token } = await response.json();

    const access_token_decoded: { exp: number } = parseJwt(access_token) as Token;

    newResponse.cookies.set('access_token', access_token, {
      path: '/',
      maxAge: access_token_decoded.exp - nowUnix,
    });

    tokenIsValid = true;
  }

  return tokenIsValid ? newResponse : NextResponse.redirect(url);
}
