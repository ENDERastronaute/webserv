'use server'

import { SignJWT, jwtVerify, type JWTPayload } from "jose";

export async function sign(payload: any): Promise<string> {
    const issuedAt = Math.floor(Date.now() / 1000);
    const expirationTime = issuedAt + 86400 // 24 hours

    return await new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(expirationTime)
        .setIssuedAt(issuedAt)
        .setNotBefore(issuedAt)
        .sign(new TextEncoder().encode(process.env.JWT_SECRET))
}

export async function verify(token: string): Promise<JWTPayload> {
    let payload: JWTPayload = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload;

    return payload;
}