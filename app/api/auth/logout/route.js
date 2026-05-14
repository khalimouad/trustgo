import { NextResponse } from 'next/server';

export async function POST(req) {
  const res = NextResponse.redirect(new URL('/login', req.url));
  res.cookies.set('trustgo_role', '', { maxAge: 0, path: '/' });
  return res;
}
