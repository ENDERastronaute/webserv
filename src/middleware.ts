
import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/utils/security/auth";

export default async function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname === '/' && await isAuthenticated(request)) {
    //     return NextResponse.redirect(new URL('/view', request.url));
    // }

    if (request.nextUrl.pathname.startsWith('/view') && !await isAuthenticated(request)) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

