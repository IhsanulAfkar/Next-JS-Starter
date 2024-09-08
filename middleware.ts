import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import route from './routes';
const authPath = ["/auth/login", "/auth/register"]
const protectedPath = "/dashboard"
// using export {default} not working, create own middleware
export default async (req: NextRequest) => {
    const path = req.nextUrl.pathname;
    // const session = !!req.cookies.get("next-auth.session-token")
    const session = await getToken({ req: req, secret: process.env.JWT_SECRET })
    if (authPath.includes(path) && session) {
        return NextResponse.redirect(new URL(route('dashboard'), req.url))
    }
    if (!session && protectedPath.includes(path)) {
        return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${path}`, req.url));
    }
    return NextResponse.next();
}

// export { default } from "next-auth/middleware"
export const config = { matcher: ["/dashboard", "/dashboard/:path*", "/auth/:path*"] } 