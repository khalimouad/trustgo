import { NextResponse } from 'next/server';

const ROLE_HOME = { customer: '/customer', deliveryman: '/deliveryman', manager: '/manager', admin: '/admin' };

export async function POST(req) {
  const formData = await req.formData();
  const role = formData.get('role');
  const destination = ROLE_HOME[role] || '/login';
  const res = NextResponse.redirect(new URL(destination, req.url));
  res.cookies.set('trustgo_role', role, { httpOnly: true, sameSite: 'lax', path: '/' });
  return res;
}
