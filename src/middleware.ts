import { verify } from "@/lib/utils/security/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/' && await isAuthenticated(request)) {
        return NextResponse.rewrite(new URL('/view', request.url))
    }
}

async function isAuthenticated(request: NextRequest): Promise<boolean> {
    const cookie = request.cookies.get('id')?.value;

    if (!cookie) {
        return false;
    }

    const payload = await verify(cookie);

    return Object.values(payload).length !== 0;
}