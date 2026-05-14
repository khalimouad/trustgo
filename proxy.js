import { NextResponse } from 'next/server';

const ROLE_HOME = {
  customer: '/customer',
  deliveryman: '/deliveryman',
  manager: '/manager',
  admin: '/admin',
};

const ACCESS_RULES = [
  { prefix: '/customer', roles: ['customer', 'manager', 'admin'] },
  { prefix: '/deliveryman', roles: ['deliveryman', 'manager', 'admin'] },
  { prefix: '/manager', roles: ['manager', 'admin'] },
  { prefix: '/admin', roles: ['admin'] },
];

export function proxy(req) {
  const { pathname } = req.nextUrl;
  const role = req.cookies.get('trustgo_role')?.value;

  if (pathname === '/login' && role && ROLE_HOME[role]) {
    return NextResponse.redirect(new URL(ROLE_HOME[role], req.url));
  }

  const rule = ACCESS_RULES.find((r) => pathname.startsWith(r.prefix));
  if (!rule) return NextResponse.next();

  if (!role) {
    const url = new URL('/login', req.url);
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  if (!rule.roles.includes(role)) {
    return NextResponse.redirect(new URL(ROLE_HOME[role] || '/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/customer/:path*', '/deliveryman/:path*', '/manager/:path*', '/admin/:path*'],
};
